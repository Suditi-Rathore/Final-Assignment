"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useProvider } from "@/context/context";

const HelpDesk = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { helpDesk } = useProvider();
  return (
    <div className="px-5 md:pt-52 md:px-60">
      <h2
        data-aos="fade-up"
        className="text-center text-xl md:text-3xl font-bold px-5 py-10"
      >
        Browse our help desk
      </h2>
      <div className="grid md:grid-cols-3 gap-4 md:gap-8">
        {helpDesk.map((item) => (
          <div
            data-aos="fade-up"
            key={item.id}
            className="flex flex-col gap-3 items-start py-5 px-10 bg-[#F4F4FF]  rounded-lg "
          >
            <div className="w-20">
              <img src={item.img} alt="img" />
            </div>
            <p className="font-semibold text-xl">{item.name}</p>
            <p className="text-gray-500">{item.text}</p>
            <p>View More</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpDesk;
