"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HelpCenter = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <img
        src="/images/ecom-no-replace-2RgmJOxbvBbg-hr-search (1).png"
        alt="img"
        className="relative bg-cover h-[50vh] w-full object-cover"
      />

      <div data-aos="fade-up" className="absolute top-40 left-20 md:top-56 md:left-[680px] flex flex-col gap-5 items-center text-center text-white">
        <h1 className="text-2xl md:text-6xl font-bold ">HELP CENTER</h1>
        <p>Let us know how we may help you?</p>
        <div className="flex px-2 py-2 md:py-2 md:px-5 bg-white rounded-full md:mt-5 ">
          <input
            type="text "
            placeholder="Search for answers...."
            className="md:w-80 w-32 text-xs md:text-base"
          />
          <button className="bg-black md:py-2 p-2 md:px-5 rounded-full text-xs md:text-base">
            Search
          </button>
        </div>
      </div>
    
      <div data-aos="fade-up" className=" md:absolute md:bottom-48  flex md:flex-row flex-col justify-center gap-5 md:w-full">
        <div className="p-5 rounded-xl shadow-xl flex flex-col bg-white justify-center items-center text-center gap-5 md:w-1/4">
          <div className="w-10 ">
            <img
              src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png?v=1724405573"
              alt=""
            />
          </div>
          <p className="text-lg font-semibold">Order Tracking</p>
          <p>Log in to check the status of your order</p>
          <button className="bg-black py-2 px-5 rounded-full text-white">
            Track your orders<i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
        <div className="p-5 rounded-xl shadow-xl flex bg-white flex-col justify-center items-center text-center gap-5 md:w-1/4">
          <div className="w-10 ">
            <img
              src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png?v=1724405681"
              alt=""
            />
          </div>
          <p className="text-lg font-semibold">Return & Exchange</p>
          <p>We make it easy to return and exchange styles.</p>
          <button className="bg-black py-2 px-5 rounded-full text-white">
            Start a return<i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
