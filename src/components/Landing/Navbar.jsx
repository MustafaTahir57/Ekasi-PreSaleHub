import React from 'react'
import logo9 from "../../assets/Group 1.png"
import menu from "../../assets/Group 2.png"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
function Navbar() {
  return (
    <div className='navo'>
       <nav className="navbar navbar-expand-lg  text-white">
     
  <div className="container pt-2">
  <a className="" href="/"><img src={logo9} width={200} alt="" className='d-block d-lg-none' /></a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="" ><HiOutlineMenuAlt1 className='fs-5'/></span>
    </button>
      <div className="d-flex gap-3 align-items-center d-none d-lg-block">
      <HiOutlineMenuAlt1 className='fs-5 me-3'/>
    <a className="text-decoration-none text-white" href="/">
     Menu
    </a></div>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <div className="navbar-nav m-auto mb-2 mb-lg-0 pt-3">
      <a className="" href="/"> <img src={logo9} alt="" className='d-none d-lg-block'/></a>
        <ul>
          <li style={{listStyle:"none"}}>
          <a className="text-decoration-none text-white d-block d-lg-none"  href="/">
     Menu
    </a>
          </li>
        </ul>
      </div>
    
        <button className="btn btn-dark btnn btn_width mt-2 mt-lg-0" type="submit">
        Contact Us
        </button>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar