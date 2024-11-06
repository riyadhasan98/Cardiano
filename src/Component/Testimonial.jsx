import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import star1 from '../icons/star1.svg'
import star2 from "../icons/star2.svg";
import star3 from "../icons/star3.svg";
import right from '../icons/RightOutline.svg'
import left from "../icons/LeftOutline.svg";
import pic1 from '../images/pic1.png'
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";


import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";
import "./style.css"

import {
  EffectCoverflow,
  Navigation,
  Pagination,
  
} from "swiper/modules";


function Testimonial() {
  
  return (
    <>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="">
            <h2 className="heading-text text-center">What Say Our Clients</h2>

            <div className="mt-5 md:mt-10">
              <Swiper
                speed={1500}
                spaceBetween={60}
                effect={"coverflow"}
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className="mySwiper"
              >
                <div className="">
                  {[
                    {
                      id: 1,
                      pic: pic1,
                      name: "Ayesha Khan",
                      text: "We appreciate their integrity and dedication to excellence. Cardiano has exceeded our expectations in every way, delivering results that speak for themselves. If you're looking to take your business to the next level, we highly recommend partnering with Cardiano. They are the digital experts you need to achieve extraordinary growth and success.",
                      rating: "5.0",
                      rating2: "/5.0 rating",
                      star: star1,
                    },
                    {
                      id: 2,
                      pic: pic3,
                      name: "Michel Stark",
                      text: "We appreciate their integrity and dedication to excellence. Cardiano has exceeded our expectations in every way, delivering results that speak for themselves. If you're looking to take your business to the next level, we highly recommend partnering with Cardiano. They are the digital experts you need to achieve extraordinary growth and success.",
                      rating: "4.0",
                      rating2: "/5.0 rating",
                      star: star2,
                    },
                    {
                      id: 3,
                      pic: pic2,
                      name: "Fatema Siddique",
                      text: "We appreciate their integrity and dedication to excellence. Cardiano has exceeded our expectations in every way, delivering results that speak for themselves. If you're looking to take your business to the next level, we highly recommend partnering with Cardiano. They are the digital experts you need to achieve extraordinary growth and success.",
                      rating: "3.0",
                      rating2: "/5.0 rating",
                      star: star3,
                    },
                  ].map(({ id, name, text, rating, rating2, star,pic }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className="pb-16">
                          <div className="w-fit testimonial mx-auto">
                            <img className="w-[150px]" src={pic} alt="" />
                            <h3 className="text-[20px] md:text-[30px] font-semibold font-inter text-[#171B26]">
                              {name}
                            </h3>
                            <p className="para-text lg:w-[781px] text-center">
                              {text}
                            </p>
                            <div className="flex space-x-3 md:space-x-8">
                              <p className="text-[24px] font-bold font-inter text-[#04645D]">
                                {rating}{" "}
                                <span className="font-inter text-[16px] text-black">
                                  {rating2}
                                </span>
                              </p>
                              <img
                                className="max-sm:w-[100px]"
                                src={star}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>

              <div className="flex justify-between z-20 relative bottom-12 md:bottom-[330px]">
                <img
                  className="swiper-btn-prev bg-[#04645D] p-3 rounded-full bg-opacity-20 hover:bg-opacity-100"
                  src={left}
                  alt=""
                />
                <img
                  className="swiper-btn-next bg-[#04645D] p-3 rounded-full bg-opacity-20 hover:bg-opacity-100"
                  src={right}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial
