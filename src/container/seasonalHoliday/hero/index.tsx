"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index-module.css";
import CountdownTimer from "./timer";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const targetDate = "2024-10-10T00:00:00";
  return (
    <div className="w-full container">
      <div className=" image-container">
        <img
          src="/images/bg-hero.webp"
          alt="Background"
          className="background-img"
        />
        <img
          data-aos="fade-up"
          src="/images/hero-fd-layer.webp"
          alt="Overlay"
          className="overlay-img"
        />
        <img
          data-aos="fade-up"
          src="/images/best-seller.png"
          alt="Overlay"
          className="tag-img"
        />
        <img
          data-aos="fade-up"
          src="/images/rating.png"
          alt="Overlay"
          className="rating-img"
        />

        <div
          data-aos="fade-up"
          className="timer-hero flex flex-col gap-2 md:gap-5 "
        >
          <p className="font-semibold text-xs">Hurry up, Deals end soon !</p>
          <div className="countdown-wrapper">
            <CountdownTimer targetDate={targetDate} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            PERFECT GIFT FOR FATHERS DAY
          </h2>
          <p className="font-semibold text-xs md:text-sm">
            Celebrate Dad with Personalized Daddy Bracelets
          </p>
          <button className="p-1 md:p-3 md:w-[120px] w-fit text-sm rounded-sm bg-black text-white">
            SHOP NOW
          </button>
        </div>
      </div>
      <div data-aos="fade-up" className="video-container">
        <video autoPlay muted loop className="overlay-video">
          <source src="/images/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
