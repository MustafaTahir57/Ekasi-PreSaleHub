import React, { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { Link } from "react-router-dom";
import mathy from "../assets/Matic.png"

import {
  useAccount,
  useContractWrite,
  useContractRead,
  usePrepareContractWrite,
  useWaitForTransaction,
  useBalance,
} from "wagmi";
import ConnectWalletButton from "./ConnectWalletButton";
import CountdownTimer from "./CountdownTimers";
import EthCurrency from "./Currency/EthCurrency";
import UsdcCurrency from "./Currency/UsdcCurrency";
import UsdtCurrency from "./Currency/UsdtCurrency";
import ClaimToken from "./ClaimTokens";
import { parseUnits, formatEther, formatUnits } from "viem";
import presaleAbi from "../abi/presale.json";
import { tokenAdd, usdcAdd, usdtAdd, contractAddr, chainId } from "../config";
import { lan } from "../language";
import { useTranslation } from "react-i18next";
import Modals from "./Modal";

const Price = ({ language }) => {
  const [endTime, setEndTime] = useState("");
  const { t, i18n } = useTranslation();
  const { address } = useAccount();
  const [ownerAddress, setOwnerAddress] = useState('')
  const getEndTime = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "endTimeSale",
    watch: true,
    chainId: chainId,
  });
  const getCurrentPrice = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "getPriceInUSD",
    watch: true,
    chainId: chainId,
  });
  const owner = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "owner",
    watch: true,
    chainId: chainId,
  });
  const getCurrentStage = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "currentStage",
    watch: true,
    chainId: chainId,
  });

  const getStages = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "stages",
    args: [getCurrentStage.data],
    watch: true,
    chainId: chainId,
  });

  const getUserInfo = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "userInfo",
    args: [address],
    enabled: !!address,
    watch: true,
    chainId: chainId,
  });

  const getUsdRaised = useContractRead({
    address: contractAddr,
    abi: presaleAbi,
    functionName: "getTotalUSDRaised",
    watch: true,
    chainId: chainId,
  });
  const currentPrice = new BigNumber(getCurrentPrice.data)
    .dividedBy(new BigNumber(10).pow(18))
    .toFixed(4);


  const userAmountPurchased = new BigNumber(getUserInfo.data?.[0])
    .dividedBy(new BigNumber(10).pow(18))
    .toFixed(3);
  const userAmountBonus = new BigNumber(getUserInfo.data?.[1])
    .dividedBy(new BigNumber(10).pow(18))
    .toFixed(3);

  const [selectedCurrency, setSelectedCurrency] = useState("matic");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const stages = [
    { minValue: 0, maxValue: 500000, label: 'Stage 1' },
    { minValue: 500001, maxValue: 1500000, label: 'Stage 2' },
    { minValue: 1500001, maxValue: 2500000, label: 'Stage 3' },
  ];
  const usdTotal = new BigNumber(getUsdRaised.data)
    .dividedBy(new BigNumber(10).pow(18))
    .toFixed(3);
  const targetUsd = new BigNumber(15000000);
  const [currentStage, setCurrentStage] = useState(0);
  const [stageProgressPercentages, setStageProgressPercentage] = useState(0);
  useEffect(() => {
    let currentStageIndex = 0;
    for (let i = 0; i < stages.length; i++) {
      if (usdTotal >= stages[i].minValue && usdTotal <= stages[i].maxValue) {
        currentStageIndex = i;
        break;
      }
    }
    if (usdTotal > stages[currentStageIndex].maxValue) {
      currentStageIndex += 1;
      setCurrentStage(stages[currentStageIndex]);
      setStageProgressPercentage(0);
    } else {
      const stageValue = usdTotal - stages[currentStageIndex].minValue;
      setCurrentStage(stages[currentStageIndex]);
      setStageProgressPercentage((stageValue / (stages[currentStageIndex].maxValue - stages[currentStageIndex].minValue)) * 100);
    }
  }, [usdTotal]);
  useEffect(() => {
    const endTime = getEndTime.data;
    const currentTime = Math.floor(Date.now() / 1000);
    setEndTime(endTime && currentTime > Number(endTime));
  }, [getEndTime.data]);
  return (
    <section id="price" className="ico-section">
      <div data-aos="fade-up" className="w-layout-blockcontainer container w-container">
        <div className="ico-component">
          <h2 className="ico-h2 ">
            {t(lan[language].price.title)}
          </h2>
          <CountdownTimer />
          <div className="price">USDT {t('Raised')} ${parseFloat(usdTotal).toLocaleString('en-US', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          })}</div>
          <br />
          <div className="stage-progress fw-bold mb-1">
            <span>{currentStage.label}</span>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${isNaN(stageProgressPercentages) ? 0 : stageProgressPercentages.toFixed(3)}%`,
              }}
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={100}
            >
            </div>
          </div>
          <br />
          {endTime ? (
            <ClaimToken />
          ) : (
            <>
              <>
                <div className="button-row">
                  <button
                    type="button"
                    className={`custom-button ${selectedCurrency === "matic" ? "active" : ""
                      }`}
                    onClick={() => setSelectedCurrency("matic")}
                  >
                    <img
                      className="icon"
                      src={mathy}
                      width={30}
                      height={30}
                      alt="matic"
                    />
                    MATIC
                  </button>
                  <button
                    type="button"
                    className={`custom-button ${selectedCurrency === "usdt" ? "active" : ""
                      }`}
                    onClick={() => setSelectedCurrency("usdt")}
                  >
                    <img
                      className="icon"
                      src="/images/usdt.svg"
                      width={24}
                      height={24}
                      alt="usdt"
                    />
                    USDT
                  </button>
                  <button
                    type="button"
                    className={`custom-button ${selectedCurrency === "usdc" ? "active" : ""
                      }`}
                    onClick={() => setSelectedCurrency("usdc")}
                  >
                    <img
                      className="icon"
                      src="/images/coin.png"
                      width={24}
                      height={24}
                      alt="usdc"
                    />
                    USDC
                  </button>
                </div>
                <br />
                <div className="price _2">1 Ekasi = {parseFloat(currentPrice).toLocaleString('en-US', {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })}</div>
              </>
              <div>
                {address && (
                  <>
                    <p>{t('Your Purchase')} Ekasi: {parseFloat(userAmountPurchased).toLocaleString('en-US', {
                      minimumFractionDigits: 3,
                      maximumFractionDigits: 3,
                    })}</p>
                    <p>{t('Your Bonus')} Ekasi: {parseFloat(userAmountBonus).toLocaleString('en-US', {
                      minimumFractionDigits: 3,
                      maximumFractionDigits: 3,
                    })}</p>
                  </>
                )}
              </div>
              <div>
                {selectedCurrency === "matic" && <EthCurrency />}
                {selectedCurrency === "usdt" && <UsdtCurrency />}
                {selectedCurrency === "usdc" && <UsdcCurrency />}
              </div>
            </>
          )}
          <br />
          <div className="coins-wrapper">
            <ConnectWalletButton setOwnerAddress={setOwnerAddress} />
          </div>
          <div className="coins-wrapper">
            {
              ownerAddress == owner.data && (
                <><Modals /></>
              )
            }
          </div>

          {/* <a
            // href="https://baby-sinclair.gitbook.io/docs/how-to-buy"
            className="button-sec small w-button"
          >
            {t(lan[language].price.how)}
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Price;
