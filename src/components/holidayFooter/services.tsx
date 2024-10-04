const Services = () => {
  return (
    <div className="md:absolute md:top-32 md:right-96 z-10 md:w-[60%] mx-auto p-14 flex flex-col md:flex-row bg-[#F8F8F2] rounded-2xl shadow-xl">
      <div className="flex flex-col items-center text-center">
        <div className="w-16"><img src="/images/quality.png" alt="img" /></div>
        <p className="font-bold">Quality Assurance</p>
        <p>
        
        Our bracelets are handcrafted with attention to detail and undergo rigorous quality checks.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
      <div className="w-16"><img src="/images/packing.png" alt="img" /></div>
        <p className="font-bold">Fast Shipping</p>
        <p>
          Enjoy fast and reliable shipping to ensure your gift arrives in time
          for Fathers Day.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
      <div className="w-16"><img src="/images/service.png" alt="img" /></div>
        <p className="font-bold">Fast Shipping</p>
        <p>
          Enjoy fast and reliable shipping to ensure your gift arrives in time
          for Fathers Day.
        </p>
      </div>
    </div>
  );
};


export default Services;
