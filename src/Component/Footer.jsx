import React from 'react'
import logo from '../images/logo.png'
import ar from '../icons/ar.svg'

function Footer() {
  return (
    <>
      <section className="bg-[#F8F8F8] mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div>
            <div className=" lg:flex py-10 lg:py-20">
              <div>
                <img src={logo} alt="" />
                <p className="para-text mt-3 md:w-[370px]">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet.
                </p>
              </div>
              <div className="md:flex justify-between lg:ml-16 lg:space-x-36">
                <div className="mt-5 lg:mt-0">
                  <span className="text-[#171B26] font-inter font-medium">
                    Quick Link
                  </span>
                  <ul className="mt-3">
                    <li className="font-inter text-[#3D424D] hover:text-black">
                      <a href="#">Home</a>
                    </li>
                    <li className="font-inter text-[#3D424D] hover:text-black">
                      <a href="#">About</a>
                    </li>
                    <li className="font-inter text-[#3D424D] hover:text-black">
                      <a href="#">Services</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 lg:mt-0">
                  <span className="text-[#171B26] font-inter font-medium">
                    Support
                  </span>
                  <ul className="mt-3">
                    <li className="font-inter text-[#3D424D] hover:text-black">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="font-inter text-[#3D424D] hover:text-black">
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 lg:mt-0">
                  <span className="text-[#171B26] font-inter font-medium">
                    Subscribe Now
                  </span>
                  <div className="relative w-fit">
                    <input
                      className="bg-transparent border-[1px] border-[#e7e7e7] w-[270px] py-4 px-3 mt-5 rounded-[8px]"
                      type="email"
                      placeholder="Email address"
                    />
                    <img
                      className="absolute right-2 top-[26px]"
                      src={ar}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#e7e7e7]">
              <hr />
            </div>
            <div className="py-5">
              <div className='lg:flex justify-between'>
                <span className="text-[14px] font-inter text-[#3D424D]">
                  Copyright © 2024 Trafficomm.com. All rights reserved.
                </span>
                <div className="flex space-x-4 mt-3 lg:mt-0">
                  <span className="text-[14px] font-inter text-[#3D424D]">
                    Terms and Conditions
                  </span>
                  <span className="text-[14px] font-inter text-[#3D424D]">
                    Privacy statement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer
