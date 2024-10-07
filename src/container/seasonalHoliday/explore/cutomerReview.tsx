"use client"

import { useProvider } from "@/context/context";

const Review = () => {
    const {review}=useProvider();
  return (
    <div className="relative px-2 md:px-72">
        <div className="md:px-20 px-1 md:w-1/2 flex gap-5 md:pb-16 md:text-justify text-center flex-col">
        <p className="text-3xl font-bold">CUSTOMER REVIEW</p>
        <p>Read testimonials from satisfied customers who have found the 
            perfect Fathers Day gift with us.</p>

      </div>
      <div className="md:absolute md:-top-40 md:right-72  bg-[#FFCC49] md:w-1/3 rounded-xl shadow-md flex flex-col gap-5 p-8 ">
        <div>
          {" "}
          <img src="/images/stars.png" alt="img" />
        </div>

        <p className="font-bold">Exactly what I needed</p>
        <p className="text-sm">
          I purchased a Daddy Bracelet for my husband for Fathers Day and he
          absolutely loves it! The personalized engraving made it such a special
          gift, and the quality is outstanding. Thank you for helping me make
          his day extra special!
        </p>
        <div className="flex gap-4">
          <div className="w-16">
            <img src="/images/lady.webp" alt="img" className="rounded-full" />
          </div>

          <div className="flex flex-col">
            <div className="w-5">
              {" "}
              <img src="/images/flag.png" alt="img" />
            </div>

            <p>Maika C.</p>
            <p>
              <i className="bi bi-check-circle-fill"></i>
              Verified Buyer
            </p>
          </div>
        </div>
      </div>
      

      <div className="grid md:grid-cols-4 gap-4">
        {review.map((item)=>(
            <div key={item.key} className="p-3 bg-gray-100 rounded-md ">
                <img src={item.img} alt="img" className="rounded-md pb-2"/>
                <div className="flex flex-col gap-2">
                    <div><img src="/images/red-star.png" alt="img" /></div>
                    
                    <p>{item.text}</p>
                    <p className="font-semibold">{item.name}</p>
                    <p><i className="bi bi-check-circle-fill text-green-700"></i>Verified Buyer</p>
                </div>

            </div>
        ))}

      </div>
      
    </div>
  );
};

export default Review;
