"use client";

import { useProvider } from "@/context/context";

const Recomendations = () => {
  const { recomended } = useProvider();
  return (
    <div className=" bg-[#F8F8F2] clip-custom  md:px-60 md:pb-60 md:pt-28">
      <p className="font-semibold text-xl p-8 md:text-3xl text-center md:px-48 md:pb-10">
        Explore our top recommendations guaranteed to put a smile on Dads face.
      </p>

      <div className="flex flex-col md:flex-row gap-2 md:px-16">
        {recomended.map((item) => (
          <div
            key={item.key}
            className="p-3 flex flex-col rounded-xl shadow-xl  gap-8 bg-white"
          >
            <img src={item.img} alt="img" className="rounded-xl" />

            <div className="text-center pb-5">
              <p>{item.name}</p>
              <p className="font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Recomendations;
