"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ItemDesign = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full flex flex-col items-center mt-10 px-5 gap-5 md:px-20 md:py-10 md:mt-96 ">
      <div className="flex flex-col  md:flex-row gap-5 md:items-center md:gap-5">
        <img data-aos="fade-up" src="/images/item1.webp" alt="item 1" />
        <div data-aos="fade-up" className="text-center md:text-left">
          <h3 className="font-bold text-xl pb-2 md:text-4xl  md:pb-5">
            CUSTOMISABLE DESIGN
          </h3>
          <p className="text-wrap  ">
            Explore our range of bracelet designs that can be personalized with
            Dads name, initials, or special message.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-5 md:items-center md:gap-5">
        <div data-aos="fade-up" className="text-center md:text-left">
          <h3 className="font-bold text-xl pb-2 md:text-4xl  md:pb-5">
            MEANINGFUL SYMBOLS
          </h3>
          <p>
            Each bracelet features meaningful symbols or charms that symbolize
            the bond between father and child.
          </p>
        </div>
        <img data-aos="fade-up" src="/images/item2.webp" alt="item 2" />
      </div>
    </div>
  );
};

export default ItemDesign;
