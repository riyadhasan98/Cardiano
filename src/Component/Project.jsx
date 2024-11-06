import React from 'react'
import icon1 from '../icons/icon1.svg';
import icon2 from "../icons/icon2.svg";
import icon3 from "../icons/icon3.svg";
import icon4 from "../icons/icon4.svg";

function Project() {
  return (
    <>
      <section className="mt-10 lg:mt-16">
        <div className="cus-container">
          <div className="">
            <div className="grid-res-cols">
              {[
                {
                  id: 1,
                  icon: icon1,
                  text: "500+",
                  text2: "Project Completed",
                },
                {
                  id: 2,
                  icon: icon2,
                  text: "500+",
                  text2: "Ongoing Project",
                },
                {
                  id: 3,
                  icon: icon3,
                  text: "3000+",
                  text2: "Customer Reviews",
                },
                {
                  id: 4,
                  icon: icon4,
                  text: "1000+",
                  text2: "Regular Customer",
                },
              ].map(({ id, icon, text, text2 }) => {
                return (
                  <div key={id} className="grid-card-4">
                    <div className="flex items-center space-x-4 card-bg w-full py-6 px-12 md:px-8">
                      <img src={icon} alt="" />
                      <h3 className="font-inter font-semibold text-[18] text-[#171B26]">
                        {text} <br />
                        {text2}
                      </h3>
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

export default Project
