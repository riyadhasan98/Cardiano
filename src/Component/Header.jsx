import React from 'react'
import play from '../icons/play.svg'
import arrow from '../icons/arrow.svg'
import man from '../images/man.png'
import card from '../images/Card.png'
import graph from '../images/graph.png'
import progress from '../images/progress.png'
import speed from '../images/speed.png'

function Header() {
  return (
    <>
      <section className="bg-[#F1FFFE] relative z-0">
        <div className="cus-container">
          <div className="pt-10 md:pt-16 lg:pt-32 lg:pb-10 lg:flex justify-between items-center">
            <div className="lef">
              <div className="space-y-5">
                <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold font-inter text-[#171B26] text-center lg:text-left lg:w-[561px] leading-normal">
                  Harnessing <br /> the Power of
                  <span className="text-[#04645D]"> Digital Innovation</span> for
                  Business
                </h1>
                <p className="para-text lg:w-[523px] text-center lg:text-left">
                  Digital innovation involves leveraging cutting-edge
                  technologies to transform businesses, enhance customer
                  experiences,
                </p>
              </div>
              <div className="flex items-center space-x-5 mx-auto w-fit lg:mx-0 mt-5 md:mt-8 lg:mt-20">
                <button className="font-inter bg-[#04645D] py-4 px-5 rounded-[12px] text-white hover:bg-[#114642]">
                  Get Started
                </button>
                <button className="flex items-center font-inter">
                  <img src={play} alt="" />
                  How Its Work
                </button>
              </div>
              <img
                className="relative bottom-8 lg:left-8 w-fit mx-auto lg:mx-0"
                src={arrow}
                alt=""
              />
            </div>
            <div className='lg:absolute right-10 bottom-0 2xl:right-64'>
              <div className="relative">
                <div className="right">
                  <img className="relative z-40" src={man} alt="" />
                  <img
                    className="hidden md:block absolute top-[350px] right-[200px] lg:right-[370px] z-50"
                    src={graph}
                    alt=""
                  />
                  <img
                    className="absolute top-[220px] left-[60px] md:top-[240px] md:left-[350px] z-50"
                    src={progress}
                    alt=""
                  />
                  <img
                    className="absolute top-[80px] left-[200px] md:top-[80px] md:left-[460px] "
                    src={card}
                    alt=""
                  />
                  <img
                    className="absolute top-0 -left-16 md:top-[00px] md:left-[0px] z-0"
                    src={speed}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header
