import React from 'react'
import a1 from '../images/a1.png'
import a2 from "../images/a2.png";
import a3 from "../images/a3.png";
import more from '../icons/more.svg'

function About() {
  return (
    <>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="lg:flex items-center justify-between">
            <div className="left flex space-x-[27px] mx-auto w-fit lg:mx-0">
              <img className="w-[170px] md:w-[279px]" src={a1} alt="" />
              <div className="flex flex-col space-y-[26px]">
                <img
                  className="w-[170px] h-[120px] md:h-[209px] md:w-[279px]"
                  src={a2}
                  alt=""
                />
                <img
                  className="w-[170px] h-[120px] md:h-[209px] md:w-[279px]"
                  src={a3}
                  alt=""
                />
              </div>
            </div>
            <div className="right space-y-5 mt-5 lg:mt-0">
              <h2 className="heading-text">About The Cardiano</h2>
              <h4 className="font-inter font-semibold text-[18px] text-[#171B26]">
                We Have 5 years of experience
              </h4>
              <p className="para-text lg:w-[530px]">
                Welcome to Cardiano, where innovation meets expertise. At
                Cardiano, we are dedicated to transforming your digital presence
                and driving your business to new heights. Our team of seasoned
                professionals brings together creativity, technology, and
                strategy to deliver cutting-edge digital solutions tailored to
                your unique needs.
              </p>
              <div className="flex space-x-8">
                <div className="flex flex-col">
                  <span className="heading-text leading-[32px]">10+</span>
                  <span className="para-text">Countries</span>
                </div>
                <div className="flex flex-col">
                  <span className="heading-text leading-[32px]">50+</span>
                  <span className="para-text">Branch</span>
                </div>
              </div>
              <button className="bg-[#04645D]  hover:bg-[#114642] text-white leading-[26px] py-2 px-4 rounded-[6px] flex items-center">
                Learn More <img className="ml-2" src={more} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About
