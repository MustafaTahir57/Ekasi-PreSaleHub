import React, { useRef, useState } from "react";
import { lan } from "../language";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import roket from "../assets/roket.png"
const Hero = ({ language }) => {
  const [popUpDisplay, setPopUpDisplay] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  // Use refs to get references to video elements
  const videoRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    6: useRef(null),
  };

  const playVideoAndDisplay = (popUpNumber) => {
    setPopUpDisplay((prevDisplay) => ({ ...prevDisplay, [popUpNumber]: true }));

    // Play the video using React refs
    videoRefs[popUpNumber].current.play();

    // Add an event listener for video end
    videoRefs[popUpNumber].current.addEventListener("ended", () => {
      setPopUpDisplay((prevDisplay) => ({
        ...prevDisplay,
        [popUpNumber]: false,
      }));
    });
  };
  const { t, i18n } = useTranslation();

  return (
    <section id="hero-section" className="hero-section">
      <div
        id="avatar-pop-up-1"
        className="pop-up-wrapper"
        style={{ display: popUpDisplay[1] ? "block" : "none" }}
      >
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[1]}
              width="100%"
              height="100%"
              id="avatar-pop-video-1"
              playsInline
              className="avatar-pop-video-1"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c0878426990d4c1ce45acc_mp4%20(5)%202.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div
        id="avatar-pop-up-1-mob"
        className="pop-up-wrapper"
        style={{ display: popUpDisplay[4] ? "block" : "none" }}
      >
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[4]}
              width="100%"
              height="100%"
              id="avatar-pop-video-1-mob"
              playsInline
              className="avatar-pop-video-1"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c0878426990d4c1ce45acc_mp4%20(5)%202.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div
        id="avatar-pop-up-2"
        className="pop-up-wrapper2"
        style={{ display: popUpDisplay[2] ? "block" : "none" }}
      >
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[2]}
              width="100%"
              height="100%"
              id="avatar-pop-video-2"
              playsInline
              className="avatar-pop"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65cbb644647e50ad011c1161_Sam-done-done-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div
        id="avatar-pop-up-2-mob"
        className="pop-up-wrapper2"
        style={{ display: popUpDisplay[5] ? "block" : "none" }}
      >
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[5]}
              width="100%"
              height="100%"
              id="avatar-pop-video-2-mob"
              playsInline
              className="avatar-pop"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c8b5cd1997e3fd58640296_Sam-done-2-webm.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
      <div
        id="avatar-pop-up-3"
        className="pop-up-wrapper3"
        style={{ display: popUpDisplay[3] ? "block" : "none" }}
      >
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[3]}
              width="100%"
              height="100%"
              id="avatar-pop-video-3"
              playsInline
              className="avatar-pop"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c8be60b3fbb4c954828bd1_cramer-mp4.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div
        id="avatar-pop-up-3-mob"
        className="pop-up-wrapper3"
        style={{ display: popUpDisplay[6] ? "block" : "none" }}
      >
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[6]}
              width="100%"
              height="100%"
              id="avatar-pop-video-3-mob"
              playsInline
              className="avatar-pop"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c8be60b3fbb4c954828bd1_cramer-mp4.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="w-layout-blockcontainer container hero w-container">
        <div className="hero-component">
          <div
            id="w-node-a615a2f4-acb2-44c0-f5e5-39c5e502f158-85e878c5"
            className="hero-left"
          >
            <h1 className="hero-heading">{t(lan[language].heroTitle)}</h1>
            
            <p>
              {t(lan[language].heroText[0])}
              <strong>{t(lan[language].heroText[1])}</strong>{" "}
              {t(lan[language].heroText[2])}
            </p>
            <div className="spacer-62" />
            <div className="btn-wrapper">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width={148}
                height={51}
                viewBox="0 0 148 51"
              >
                <rect
                  className="rect"
                  x="0.5"
                  y="0.499756"
                  width={147}
                  height={50}
                  rx={25}
                  stroke="#4EF0FA"
                  strokeOpacity="0.7"
                  fill="none"
                />
              </svg>
              <svg
                className="svg _2"
                xmlns="http://www.w3.org/2000/svg"
                width={148}
                height={51}
                viewBox="0 0 148 51"
              >
                <rect
                  className="rect"
                  x="0.5"
                  y="0.499756"
                  width={147}
                  height={50}
                  rx={25}
                  stroke="#4EF0FA"
                  strokeOpacity="0.7"
                  fill="none"
                />
              </svg>
              <div>
                <Link
                  to="price"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  style={{ cursor: "pointer" }}
                  className="home-cta w-button"
                >
                  {t(lan[language].heroBtn)} Ekasi
                </Link>
              </div>
            </div>
          </div>
          <div className="">
          <img className="animate-up-down " style={{marginTop:"25%"}} src={roket} alt="" />

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
