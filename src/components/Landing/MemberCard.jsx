import React from "react";
import squar from "../../assets/Group 39520.png";
import squar2 from "../../assets/Group 39506.png";
import { FaCheckCircle } from "react-icons/fa";
function MemberCard() {
  return (
    <div className="Membercard_back text-white">
      <div className="text-center">
        <h2>
          <span className="tex_color_buld ">Why Join Us?</span>
        </h2>
        <h2>Membership Benefits, Access, and Returns</h2>
        <p>
          Highlighting access to the commodities market, collective power,
          shared <br /> success, education, and empowerment.
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="card card_member">
              <div className="card-body">
                <div className="d-flex gap-3">
                  <div
                    className="bg-light p-3  "
                    style={{ width: "fit-content", borderRadius: "12px" }}
                  >
                    <div className="circl"></div>
                  </div>
                  <div>
                    <p className="m-0">For individuals</p>
                    <h5>Basic</h5>
                  </div>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.
                </p>
                <div className="d-flex gap-1 align-items-center mt-5">
                  <h1>$99</h1>
                  <p className="m-0"> /monthly</p>
                </div>
                <p className="fw-bold">What’s included</p>
                <div className="d-flex gap-3 mt-2 align-items-center">
                  <FaCheckCircle className="colo" />
                  <p className="m-0"> All analytics features</p>
                </div>
                <div className="d-flex gap-3 mt-2  align-items-center">
                  <FaCheckCircle className="colo" />
                  <p className="m-0"> Up to 250,000 tracked visits</p>
                </div>
                <div className="d-flex gap-3 mt-2  align-items-center">
                  <FaCheckCircle className="colo" />
                  <p className="m-0"> Normal support</p>
                </div>
                <div className="d-flex gap-3 mt-2 align-items-center">
                  <FaCheckCircle className="colo" />
                  <p className="m-0"> Up to 3 team members</p>
                </div>
                <button className="btn my-5 btn_colo">Get started</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card card_member2">
              <div className="card-body">
                <div className="d-flex gap-3">
                  <div
                    className="bg-light p-3  "
                    style={{ width: "fit-content", borderRadius: "12px" }}
                  >
                    <img src={squar} width={30} alt="" />
                  </div>
                  <div>
                    <p className="m-0">For startups</p>
                    <h5>Pro</h5>
                  </div>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.
                </p>
                <div className="d-flex gap-1 align-items-center mt-5">
                  <h1>$199</h1>
                  <p className="m-0"> /monthly</p>
                </div>
                <p className="fw-bold">What’s included</p>
                <div className="d-flex gap-3 mt-2 align-items-center">
                  <FaCheckCircle className="colo1" />
                  <p className="m-0"> All analytics features</p>
                </div>
                <div className="d-flex gap-3 mt-2  align-items-center">
                  <FaCheckCircle className="colo1" />
                  <p className="m-0"> Up to 250,000 tracked visits</p>
                </div>
                <div className="d-flex gap-3 mt-2  align-items-center">
                  <FaCheckCircle className="colo1" />
                  <p className="m-0"> Normal support</p>
                </div>
                <div className="d-flex gap-3 mt-2 align-items-center">
                  <FaCheckCircle className="colo1" />
                  <p className="m-0"> Up to 3 team members</p>
                </div>
                <button className="btn my-5 btn_colo2">Get started</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card card_member">
              <div className="card-body">
                <div className="d-flex gap-3">
                  <div
                    className="bg-light p-3  "
                    style={{ width: "fit-content", borderRadius: "12px" }}
                  >
                    <img src={squar2} width={30} alt="" />
                  </div>
                  <div>
                    <p className="m-0">For big companies</p>
                    <h5>Enterprice</h5>
                  </div>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.
                </p>
                <div className="d-flex gap-1 align-items-center mt-5">
                  <h1>$399</h1>
                  <p className="m-0"> /monthly</p>
                </div>
                <p className="fw-bold">What’s included</p>
                <div className="d-flex gap-3 mt-2 align-items-center">
                  <FaCheckCircle className="colo" />
                  <p className="m-0"> All analytics features</p>
                </div>
                <div className="d-flex gap-3 mt-2  align-items-center">
                  <FaCheckCircle className="colo" />
                  <p className="m-0"> Up to 250,000 tracked visits</p>
                </div>
                <div className="d-flex gap-3 mt-2  align-items-center">
                  <FaCheckCircle className="colo" />
                  <p className="m-0"> Normal support</p>
                </div>
                <div className="d-flex gap-3 mt-2 align-items-center">
                  <FaCheckCircle className="colo" />
                  <p className="m-0"> Up to 3 team members</p>
                </div>
                <button className="btn my-5 btn_colo">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
