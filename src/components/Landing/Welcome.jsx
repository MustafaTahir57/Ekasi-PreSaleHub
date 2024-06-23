import React from "react";
import car from "../../assets/poli.png";
import eksi from "../../assets/dd (2).png";
import car2 from "../../assets/bit.png";
import car3 from "../../assets/eth.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="bodyy">
      <div className="container-fluid welom_100vh text-white">
        <div className="row">
          <div className="col-lg-2 col-12 heee">
            <div className="car ">
              <img src={eksi} className="car box" width={50} alt="" />
              <img src={car} className="car2" width={100} alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-12  text-center">
            <div className="">
              <h1 className="wlom">Welcome to</h1>
              <h1 className="ogn_text">Ekasi Investment Club</h1>
              <p className="fs-5">
              Uniting commodities, communities, and crypto for<br/>  the savvy investor
              </p>
              <div className="d-flex gap-4 justify-content-center">
              <Link to="/Home"> <button className="btn btn-dark btnn2" type="submit">
                  Join Now <FaArrowRightLong className="ms-2  coloo fs-5" />
                </button></Link>
               {/* <button className="btn btn-dark btnn" type="submit">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-12 post ">
            <img className="post " src={car2}   alt="" />
            <br />
            <img src={car3} className="post2"  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
