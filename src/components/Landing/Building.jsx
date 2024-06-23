import React from "react";
import buld from "../../assets/Rectangle 2.png";
function Building() {
  return (
    <div className="back ">
      <div className="container pt-5">
        <div className="card back_card p-4">
          <div className="card-body p-0 p-lg-3">
            <div className="row">
              <div className="col-12 col-lg-6">
                <img src={buld} alt="" />
              </div>
              <div className="col-12 col-lg-6 align-items-center d-flex ">
                <div className=" text-white pt-3 pt-lg-0">
                  <h2>
                    <span className="tex_color_buld ">Building Wealth</span>
                    Together
                  </h2>
                  <p className="d-flex " >
                    At Ekasi Investment Club is a pioneering project that aims
                    to bridge the gap between traditional finace and the
                    innovative world of cryptocurrency. Our mission is to create
                    a unified ecosystem that empowers investors, fosters
                    community growth, and drives finacial inclusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Building;
