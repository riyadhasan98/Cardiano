import React from 'react'
import s1 from '../icons/s1.svg'
import s2 from "../icons/s2.svg";
import s3 from "../icons/s3.svg";
import s4 from "../icons/s4.svg";
import s5 from "../icons/s5.svg";
import more from '../icons/more.svg'

function Services() {
  return (
    <>
      <section className="bg-[#171B26] mt-20 md:mt-28 lg:mt-40 relative py-24">
        <div className="cus-container">
          <div className="">
            <div className="bg-white w-fit rounded-full p-3 mx-auto absolute -top-12 md:-top-14  left-[50%] translate-x-[-50%]">
              <div className="w-fit py-3 px-5 md:py-[22px] md:px-[92px] rounded-full bg-[#04645D] bg-opacity-[0.3] text-[20px] md:text-[24px] font-semibold font-inter text-[#04645D]">
                Our Services
              </div>
            </div>
            <div>
              <h1 className="heading-text text-white text-center">
                What We Do
              </h1>
              <p className="para-text text-white text-center lg:w-[696px] mx-auto">
                At Cardiano, we offer a comprehensive range of digital services
                designed to elevate your brand and enhance your operations. Our
                services include:
              </p>
            </div>
            <div>
              {[
                {
                  id: 1,
                  icon: s1,
                  title: "Digital Strategy",
                  text: "We develop customized digital roadmaps that align with your business goals and drive measurable results.",
                },
                {
                  id: 2,
                  icon: s2,
                  title: "Digital Marketing",
                  text: "From SEO and content marketing to social media and PPC campaigns, we craft data-driven strategies that boost your online visibility and engagement.",
                },
                {
                  id: 3,
                  icon: s3,
                  title: "Web Development",
                  text: "Our team creates stunning, user-friendly websites that captivate your audience and deliver seamless experiences across all devices.",
                },
                {
                  id: 4,
                  icon: s4,
                  title: "E-commerce Solutions",
                  text: "We build robust e-commerce platforms that enhance your customers' shopping experience and drive sales growth.",
                },
                {
                  id: 5,
                  icon: s5,
                  title: "Branding and Design",
                  text: "Our creative experts design compelling visual identities and marketing materials that resonate with your target audience.",
                },
              ].map(({id, icon, title, text}) => {
                  return (
                    <div key={id}>
                      <div className='space-y-4 mt-10'>
                        <img src={icon} alt="" />
                        <div className='space-y-3 lg:space-y-0 lg:flex items-center justify-between'>
                          <h4 className="font-semibold font-inter text-[20px] text-white">
                            {title}
                          </h4>
                          <p className="para-text text-white w-full lg:w-[696px]">
                            {text}
                          </p>
                          <button className="flex items-center border-[1px] border-[#ffffff] rounded-[6px] py-2 px-3 text-white hover:bg-black">
                            Learn More{" "}
                            <img className="ml-2" src={more} alt="" />
                          </button>
                        </div>
                        <div className='bg-white bg-opacity-20'><hr/></div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services
