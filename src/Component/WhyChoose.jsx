import React from 'react'
import w1 from '../icons/w1.svg'
import w2 from "../icons/w2.svg";
import w3 from "../icons/w3.svg";
import w4 from "../icons/w4.svg";


function WhyChoose() {
  return (
    <>
      <section className="mt-10 md:mt-16 lg:mt-24">
        <div className="cus-container">
          <div className="">
            <h2 className="heading-text text-center">Why Choose Cardiano?</h2>
            <div className="grid-res-cols mt-5 md:mt-8 lg:mt-12">
              {[
                {
                  id: 1,
                  icon: w1,
                  title: "Innovative Approach",
                  text: "We stay ahead of industry trends and leverage the latest technologies to deliver forward-thinking solutions.",
                },
                {
                  id: 2,
                  icon: w2,
                  title: "Tailored Solutions",
                  text: "We understand that every business is unique. Our strategies are customized to meet your specific needs and objectives.",
                },
                {
                  id: 3,
                  icon: w3,
                  title: "Experienced Team",
                  text: "Our team consists of skilled professionals with extensive experience in digital marketing, design, and development.",
                },
                {
                  id: 4,
                  icon: w4,
                  title: "Client-Centric Focus",
                  text: "We prioritize our clients' success and work closely with you to ensure your goals are met and exceeded.",
                },
              ].map(({ id, icon, title, text }) => {
                return (
                  <div key={id} className="grid-card-4">
                    <div className="space-y-4 p-[35px] choose-card-bg">
                      <img src={icon} alt="" />
                      <h4 className="font-inter font-semibold text-[20px] text-[#171B26]">
                        {title}
                      </h4>
                      <p className="para-text">{text}</p>
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

export default WhyChoose
