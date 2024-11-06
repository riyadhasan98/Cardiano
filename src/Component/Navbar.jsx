import React, { useState } from "react";

import logo from "../images/logo.png";
import menu from '../icons/MenuOutline.svg'
import cross from '../icons/X.svg'


function Navbar() {
  const [click, setClick] = useState(false)
  
  return (
    <>
      <section className="relative nav-bg py-4">
        <div className="cus-container">
          <div className="flex items-center justify-between">
            <img src={logo} alt="" />

            <div className={`lg:block ${click ? "" : "hidden"}`}>
              <ul
                className={`lg:flex lg:space-x-4 bg-black lg:bg-transparent z-10 p-5 lg:p-0 space-y-4 lg:space-y-0 absolute  lg:relative top-0 right-0 ${
                  setClick ? "" : "hidden"
                }`}
              >
                <img
                  onClick={() => setClick(false)}
                  className="lg:hidden"
                  src={cross}
                  alt=""
                />
                <li className="font-inter lg:text-[#636071] text-white hover:text-[#636071] lg:hover:text-black lg:hidden">
                  <a href="#">Login</a>
                </li>
                <li className="font-inter lg:text-[#636071] text-white hover:text-[#636071] lg:hover:text-black lg:hidden">
                  <a href="#">Register</a>
                </li>
                <li className="font-inter lg:text-[#636071] text-white hover:text-[#636071] lg:hover:text-black">
                  <a href="#">Features</a>
                </li>
                <li className="font-inter lg:text-[#636071] text-white hover:text-[#636071] lg:hover:text-black">
                  <a href="#">Services</a>
                </li>
                <li className="font-inter lg:text-[#636071] text-white hover:text-[#636071] lg:hover:text-black">
                  <a href="#">Resources</a>
                </li>
                <li className="font-inter lg:text-[#636071] text-white hover:text-[#636071] lg:hover:text-black">
                  <a href="#">About us</a>
                </li>
              </ul>
            </div>
            <div className="lg:flex items-center space-x-4 hidden">
              <p className="font-inter text-[#04645D]">
                <a className="hover:text-black mr-1" href="#">
                  Login
                </a>
                /
                <a className="hover:text-black ml-1" href="#">
                  Register
                </a>
              </p>
              <button className="font-inter bg-[#04645D] p-4 rounded-[12px] text-white hover:bg-[#114642]">
                Join Now
              </button>
            </div>
            <div className="lg:hidden">
              <img onClick={() => setClick(true)} src={menu} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
