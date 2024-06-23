import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function TakeStep() {
  return (
    <div className="step12">
      <div className="container">
        <div className="card back_step_card text-center text-white py-4">
          <div className="card-body">
            <h4 className="" >
             <span className="ogn_text_SIZE">PARTNER WITH US TO SHAPE THE</span>  <br /> <span className="ogn_text_SIZE">FUTURE OF FINANCE</span> 
            </h4>
            <p className=" px-lg-5">
              We invite stakeholders, investors, and partners to join us on this
              exciting journey. Together, we can create a revolutionary
              investment platform that promotes financial freedom,can create a 
              revolutionary investment platform that promotes financial freedom,
              empowerment, and prosperity for all.
            </p>
       
          
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn ornge_btn">
                Join Now <FaArrowRightLong className="ms-2   fs-5" />
              </button>

              <button className="btn text-white  btnn" type="submit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeStep;
