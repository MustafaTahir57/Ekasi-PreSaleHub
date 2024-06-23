import React from 'react'
import logo9 from "../../assets/Group 1.png"
import { AiFillTwitterSquare } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function Footer2() {
  return (
    <div className=' pt-5'>
        <div className="container d-flex justify-content-center">
            <img src={logo9} className="w-50" alt="" />
        </div>
        <div className="d-flex gap-3 mt-4 justify-content-center">
        <AiFillTwitterSquare className='fs-2 text-white '/>
        <IoLogoDiscord className='fs-2 text-white'/>
        <SiGmail className='fs-2 text-white'/>
        <FaGithub className='fs-2 text-white'/>
        </div>
        <div className="d-flex gap-5 justify-content-center text-white mt-3 " >
          <p className=' foot'>Terms & Conditions</p>
          <p className=' foot'>Privacy Policy</p>
        </div>
        <p className='text-center py-3  foot'>© 2023 by Ekasi Investment Club</p>
    </div>
  )
}

export default Footer2