import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import card_img from "../../assets/dd (2).png";
import { Link } from "react-router-dom";
function Stockevl() {
  return (
    <div className="stok_back text-white ">
      <div className="container">
        <div className="row align-items-center justify-content-lg-center">
          <div className="col-12 col-lg-6 ">
            <h2>
              <span className="tex_color_buld  ">The Ekasi </span> Coin
             
            </h2>
            <p className="mt-4 p-3 p-lg-0">
              The Ekasi Coin is a cutting-edge cryptocurrency designed to
              facilitate seamless transactions, promote financial inclusion, and
              provide a secure store of value. As the native currency of our
              ecosystem, it will enable investors to participate in a wide range
              of investment opportunities, from traditional assets to innovative
              digital assets.
            </p>
            <Link to="/Home"> 
            <button className="btn btn-dark btnn mt-4 d-flex justify-content-center " type="submit">
                  Join Now <FaArrowRightLong className="ms-2  coloo fs-5" />
                </button></Link>
          </div>
          <div className="col-12 col-lg-6 pt-5 pt-lg-0 d-flex justify-content-center">
            <img className="box" src={card_img} width={400} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stockevl;
