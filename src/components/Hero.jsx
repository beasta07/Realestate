import React from "react";
// import Navbar from "./Navbar";
import { RiListSettingsFill } from "react-icons/ri";
import { GrSearch } from "react-icons/gr";

const Hero = () => {
  return (
    <div>
      <div className="bg-[url('/image/home.jpg')] w-[100%] bg-cover h-[50rem]">
        {/* <Navbar /> */}
        <hr className="h-px bg-gray-100 border-0 w-[30%] sm:w-[100%] mx-auto dark:bg-gray-800" />
        <div className=" text-center text-white font-bold py-[8.5rem]">
          <h2> THE BEST WAY TO</h2>{" "}
          <span className="text-[2.5rem] sm:text-[3.5rem]">
            Find Your Dream Home
          </span>
          <p className="px-[1rem] ">
            We’ve more than 745,000 apartments, place & plot.
          </p>
        </div>
        <div className="">
          <div className="w-[40%] ml-[1.1rem] flex justify-between rounded-t-lg sm:w-[12%] p-3 mx-auto font-bold text-[grey] container sm:ml-[12.6rem] bg-white">
            <h2>Buy</h2>
            <h2>Rent</h2>
            <h2>Sold</h2>
          </div>
          <hr className="h-px bg-gray-400 border-0 w-[15%] mx-auto dark:bg-gray-500" />
          <div className="w-[90%] container h-[11rem] sm:flex sm:gap-[3rem] sm:w-[70%] px-2 rounded-b-lg sm:h-[6rem] p-5 bg-white mx-auto ">
            <input
              type="text"
              placeholder="  Enter an Address, neighborhood,city, or ZIP code for rent"
              className=" bg-[#F7F7F7] w-[87%] h-[4rem] sm:w-[65%] sm:h-[3.5rem] mx-5 rounded-xl"
            />
            <div className="flex gap-5  sm:gap-6">
              <div className="flex gap-3 sm:gap-2 ml-[1.5rem] mt-2">
                <RiListSettingsFill className="mt-3 text-red-500" />
                <h2 className="py-2 font-bold "> Advanced </h2>
              </div>
              <GrSearch className=" bg-red-500 p-3 mt-1 text-white rounded-full text-[3rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
