"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OtherQuestions = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col gap-5 pt-20 justify-center m-4 items-center">
      <p data-aos="fade-up" className="text-xl md:text-3xl font-bold">Any other questions?</p>
      <p data-aos="fade-up">
        We are here to help. You can contact us: Weekdays: 6am to 6pm PT,
        Weekends: 6am to 6pm PT.
      </p>
      <div data-aos="fade-up" className="border-2 md:w-[60%] border-gray-200 rounded-2xl grid grid-cols-2 md:grid-cols-4 p-5">
        <div className="flex flex-col gap-1 md:gap-5  items-center border-r-2 p-1 md:p-5 ">
          <img className="w-8 md:w-16" src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892" alt="img" />
          <p className="font-semibold md:text-lg">CALL</p>
          <p className="underline md:text-lg">012-345-6789</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-5 items-center  md:border-r-2 p-1 md:p-5">
          <img className="w-8 md:w-16" src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png?v=1724639488" alt="img" />
          <p className="font-semibold md:text-lg">EMAIL</p>
          <p className="underline md:text-lg">Contact us</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-5 justify-center items-center  border-r-2 p-1 md:p-5">
          <img className="w-8 md:w-16" src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-nXKveOYRkzicon-lc-3.png?v=1724639522" alt="img" />
          <p className="font-semibold md:text-lg">CHAT</p>
          <p className="underline md:text-lg">Chat now</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-5 justify-center items-center p-1 md:p-5 ">
          <img className="w-8 md:w-16" src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qX7d2R8frVicon-lc-4.png?v=1724639557" alt="img" />
          <p className="font-semibold md:text-lg">MESSAGE</p>
          <p className="underline md:text-lg">Support Now</p>
        </div>
      </div>
    </div>
  );
};

export default OtherQuestions;
