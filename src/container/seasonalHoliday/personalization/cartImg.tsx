"use client";
import { useProvider } from "@/context/context";

const CartImg = () => {
  const { cartImage, handleCartImg, url } = useProvider();
  return (
    <div className="md:w-[50%] md:pl-5 ">
      <div className="w-full md:h-3/4 md:pb-4  md:gap-3 flex flex-col-reverse md:flex-row justify-center">
        <div className="flex flex-row md:flex-col md:w-1/6 md:h-full gap-1 ">
          {cartImage.map((item) => (
            <button key={item.url} onClick={() => handleCartImg(item.id, item.url)}>
              <img
                src={item.url}
                key={item.id}
                alt="img"
                className="rounded-xl w-full h-20 my-2 md:my-0  md:h-auto"
              />
            </button>
          ))}
        </div>
        <div className="md:w-4/5 md:h-full relative">
          <img src={url} alt="img" className="w-full h-full rounded-2xl " />
          <div className="bg-yellow-300 rounded-full  text-black px-2 absolute z-10 right-6 top-8">
            <i className="bi bi-globe-americas pr-2 font-semibold"></i> 8k sold
          </div>
          <img
            src="/images/america-logo.png"
            alt="img"
            className="absolute top-16 right-8 z-10"
          />
        </div>
      </div>
      <div className="relative h-1/6 ">
        <img
          src="/images/ecom-no-replace-KciEziG9nrbg-ft.png"
          alt="img"
          className="w-full h-full rounded-xl"
        />
        <div className="absolute flex items-center  gap-5 top-0 left-0 right-0 h-full md:p-5">
          <img
            src="/images/ecom-no-replace-XkWdb7h4IRbg-ft-img.webp"
            alt="img"
            className=" h-full rounded-xl"
          />
          <div className="text-left text-white">
          <p className="md:text-xl font-bold ">GIFT PACKAGING</p>
          <p className="text-xs md:text-sm">
            All bracelets come beautifully packaged, ready to be presented to
            Dad on Fathers Day.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartImg;
