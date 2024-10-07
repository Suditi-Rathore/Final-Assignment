"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useProvider } from "@/context/context";
import { useState } from "react";

const SearchedQuestion = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { questionsAsked } = useProvider();
  const [activeIndex, setActiveIndex] = useState<number|null>( null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E0E0FF] w-full py-10 md:py-20 mt-10 flex flex-col justify-center px-4 md:px-40">
      <h2 data-aos="fade-up" className="text-center text-3xl py-10 font-semibold mb-4">
        Popular Searched Questions
      </h2>
      <div className="w-full p-4 bg-white rounded-lg shadow">
        {questionsAsked.map((item, index) => (
          <div data-aos="fade-up" key={index} className="border-b py-5">
            <button data-aos="fade-up"
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 flex justify-between items-center"
            >
              {item.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-500">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchedQuestion;
