import React from "react";
import memb_1 from "../../assets/Group 6.png";
import memb_2 from "../../assets/Group 6 (1).png";
import memb_3 from "../../assets/Group 6 (2).png";
import memb_4 from "../../assets/Group 6 (3).png";
function MemberShip() {
  return (
    <div className="MemberShip_back text-white">
      <div className="text-center">
        <h2>
          <span className="tex_color_buld ">Why Join Us?</span>
        </h2>
        <h2 className="fw-bold">Membership Benefits, Access, and Returns</h2>
        <p className="mt-3 mb-5">
          Access to the commodities market, collective power, <br />shared 
          success, education, and empowerment.
        </p>
      </div>
      <div className="container">
        <div className="d_grid gap-3">
          <div className=" border_mem p-3">
            <div className="d-lg-flex d-block  gap-4">
              <img src={memb_1}  className="small_img_center" alt="" />
              <div className="market">
                <h5 className="center">Access to the Commodities Market</h5>
                <p>
                  Unite commodities, communities, and cryptocurrency to create a
                  robust and diversified investment platform
                </p>
              </div>
            </div>
          </div>
          <div className=" border_mem p-3">
            <div className="d-lg-flex d-block  gap-4">
              <img src={memb_2} className="small_img_center" alt="" />
              <div className="market">
                <h5 className="center">Collective Power</h5>
                <p>
                  Benefit from the strength of community investment, enjoying
                  larger returns thanks to our group's total investment size.
                </p>
              </div>
            </div>
          </div>
          <div className=" border_mem p-3">
            <div className="d-lg-flex d-block   gap-4">
              <img src={memb_3} className="small_img_center" alt="" />
              <div className="market">
                <h5 className="center">Shared Success</h5>
                <p>
                  Empower investors through education, resources, and support,
                  promoting financial literacy and savvy decision-making
                </p>
              </div>
            </div>
          </div>
          <div className=" border_mem p-3">
            <div className="d-lg-flex d-block  gap-4">
              <img src={memb_4} className="small_img_center" alt="" />
              <div className="market">
                <h5 className="center">Education and Empowerment</h5>
                <p>
                  Foster a community of like-minded individuals, encouraging
                  collaboration, knowledge sharing, and collective growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberShip;
