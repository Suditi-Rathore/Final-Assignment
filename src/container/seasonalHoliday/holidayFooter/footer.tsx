import React from "react";

const Footer = () => {
  return (
    <>
      <img src="/images/bg-ft.webp" alt="img" className="relative opacity-80 object-cover bg-cover w-[100%] h-[80vh]" />
      <div className="absolute bottom-2 left-10 md:bottom-20 md:left-80 w-1/3 flex flex-col gap-4 md:gap-9 text-white">
        <p className="text-2xl md:text-4xl font-bold">Subscribe to our newsletter for special discounts</p>
        <div className="flex md:gap-2 ">
          <input type="text" placeholder="Enter your Email...." className="text-xs md:text-base p-3" />
          <button className=" text-xs md:text-base md:p-3 bg-red-700 text-white">SUBSCRIBE</button>
        </div>
        <div>
          <img src="/images/payment.png" alt="img" />
        </div>
        <div className="flex gap-3">
          <p>Our Story</p>
          <p>Visit Our Store</p>
          <p>Contact Us</p>
          <p>Account</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
