"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ItemQuality = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full flex justify-center items-center md:px-36 bg-[#2d394b]">
      <div className="w-full flex flex-col md:flex-row md:gap-10  text-white md:py-20  justify-between items-center md:p-20">
        <div data-aos="fade-up" className="block md:hidden p-5">
          <img src="/images/bracelet.webp" alt="bracelet" />
        </div>

        <div className="flex flex-col gap-8 md:gap-10 pb-8 md:pb-0 p-5 md:p-0">
          <div className="flex flex-col text-center md:text-left gap-3 md:flex-row md:gap-5">
            <div className=" border-white">
              <i className="bi bi-arrows-expand text-3xl text-white "></i>
            </div>
            <div className="flex flex-col gap-3">
              <p className="md:text-2xl">MAXIMUM FIT</p>
              <p className="text-sm">
                Set customized feeding schedules to ensure your cat gets the
                right amount of food at the right time.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left  gap-3 md:flex-row md:gap-5">
            <div className=" border-white">
              <i className="bi bi-emoji-smile text-3xl text-white "></i>
            </div>
            <div className="flex flex-col gap-3">
              <p className="md:text-2xl">CAN ADD MORE NAMES IN THE FUTURE</p>
              <p className="text-sm">
                Rest assured that the bracelet is completely easy for adding
                names later on.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img data-aos="zoom-in" src="/images/bracelet.webp" alt="bracelet" />
        </div>

        <div className="flex flex-col gap-8 md:gap-10 p-5 md:p-0">
          <div className="flex flex-col text-center md:text-left  gap-3 md:flex-row md:gap-5">
            <div className=" border-white">
              <i className="bi bi-people text-3xl text-white "></i>
            </div>
            <div className="flex flex-col gap-3">
              <p className="md:text-2xl">ENGRAVING UPTO 12 NAMES</p>
              <p className="text-sm">
                A bracelet that can add up to 12 names you care about, that is
                wonderful.
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left  gap-3 md:flex-row md:gap-5">
            <div className=" border-white">
              <i className="bi bi-droplet text-3xl text-white "></i>
            </div>
            <div className="flex flex-col gap-3">
              <p className="md:text-2xl">WATERPROOF</p>
              <p className="text-sm">
                The water resistance and rust resistance are excellent, so you
                dont have to worry about your daily activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemQuality;
