import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24 hero">
      <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-1 max-w-[600px]  px-4 md:px-0">
        <div className="flex items-center justify-center text-center  flex-col gap-4 ">
          <h1 className=" md:text-6xl text-5xl font-semibold ml-8 animate-slide">
            Elevate Your Presence with&nbsp;
            <span className="text-purple-500 text">
           Seamless Design &nbsp;
               </span>
             and&nbsp;
            <span className="text-purple-500 text1">Innovation.</span> 
          </h1>
          <p className="py-2 text-lg text-gray-600 animate-slide">
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </p>

          <button className="px-8 py-3 rounded-md bg-purple-500 text-white font-bold mr-10 animate-slide " >
            <a href="#pricing">View Pricing</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
