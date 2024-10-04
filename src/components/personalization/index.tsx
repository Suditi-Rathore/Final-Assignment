"use client";

import Cart from "./cart";
import CartImg from "./cartImg";

const PersonalizeItem = () => {
  return ( 
    <div className="pt-20 md:px-48">
      <h5 className="text-center text-2xl  md:text-3xl p-10 font-bold">PERSONALIZATION OPTIONS</h5>
      <div className="flex flex-col gap-3 md:flex-row justify-around md:p-10 ">
        <CartImg/>
        <Cart />
      </div>
    </div>
  );
};

export default PersonalizeItem;
