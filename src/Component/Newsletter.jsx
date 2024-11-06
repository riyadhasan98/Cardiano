import React from 'react'
import news from '../images/Newsletter.png'
import man from '../images/news-man.png'



function Newsletter() {
  return (
    <>
      <section className="">
        <div className="cus-container">
          <div>
            <div
              className="bg-cover bg-no-repeat bg-center px-10 lg:px-16 pt-10  rounded-[16px] lg:flex items-center justify-between"
              style={{ backgroundImage: `url(${news})` }}
            >
              <div className="flex flex-col space-y-4 items-center lg:items-start lg:pb-10">
                <h2 className="heading-text font-semibold text-white">
                  Subscribe newsletter
                </h2>
               
                <p className="para-text text-white text-center lg:text-left lg:w-[609px]">
                  Identifying target audiences and crafting effective promotion
                  strategies are crucial steps in marketing for businesses, as
                  they promote their brand, products, and services.
                </p>
                <div className="relative">
                  <input
                    className="w-80 md:w-[500px] lg:w-[600px] h-[44px] md:h-[56px] lg:h-[78px] rounded-[6px] outline-none pl-4 "
                    type="email"
                    placeholder="Enter email address"
                  />
                  <button className="font-inter text-white text-[14px] bg-[#04645D] py-2 px-3 md:py-3 md:px-4 lg:py-5 lg:px-7 rounded-[6px] absolute right-[4px] top-[4px] md:top-[6px] md:right-[4px] lg:right-[10px] lg:top-[8px]">
                    Subscribe
                  </button>
                </div>
              </div>
              <img className="mx-auto lg:mx-0 mt-5 lg:mt-0" src={man} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter
