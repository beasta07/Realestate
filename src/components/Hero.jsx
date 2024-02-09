import React from "react";
// import Navbar from "./Navbar";
import { RiListSettingsFill } from "react-icons/ri";
import { GrSearch } from "react-icons/gr";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { GetCategories } from "../Redux/features/categorySlice"; 
import Apartment from "../components/Apartment"
import Features from "../components/Features"
import Property from "../components/Property"
import Cities from "../components/Cities"
import Sellingoption from "../components/Sellingoption"
import Popular2 from "../Pages/Popular2"
import Blogs2 from "../Pages/Blogs2"


const Hero = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCategories());
  }, []);

  const categories = useSelector((state) => state.category.categories);

  const [selectedButton, setSelectedButton] = useState("Buy");
  const [searchPlaceholder, setSearchPlaceholder] = useState(
    "Enter an Address, neighborhood,city, or ZIP code for Buy"
  );

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    switch (buttonName) {

      case "Buy":
        setSearchPlaceholder("Enter an Address, neighborhood,city, or ZIP code for Buy");
        break;
      case "Rent":
        setSearchPlaceholder("Enter an Address, neighborhood,city, or ZIP code for Rent");
        break;
      case "Sold":
        setSearchPlaceholder("Enter an Address, neighborhood,city, or ZIP code for Sold");
        break;
      default:
        setSearchPlaceholder("Enter Keyword");
    }
  };

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
          <div className="w-[40%] ml-[1.1rem] flex justify-between rounded-t-lg sm:w-[12%] p-3 mx-auto font-bold text-[grey] container sm:ml-[11.8rem] bg-white">
            <button
              onClick={() => handleButtonClick("Buy")}
              className={`font-medium ${
                selectedButton === "Buy"
                  ? "border-b-2 border-black py-2"
                  : "border-none"
              }`}
            >
              Buy
            </button>

            <button
              onClick={() => handleButtonClick("Rent")}
              className={`font-medium ${
                selectedButton === "Rent"
                  ? "border-b-2 border-black py-2 transition"
                  : "border-none"
              }`}
            >
              Rent
            </button>

            <button
              onClick={() => handleButtonClick("Sold")}
              className={`font-medium ${
                selectedButton === "Sold"
                  ? "border-b-2 border-black py-2 transition"
                  : "border-none"
              }`}
            >
              Sold
            </button>
          </div>

          <hr className="h-px bg-gray-400 border-0 w-[15%] mx-auto dark:bg-gray-500" />
          <div className="w-[90%] container h-[11rem] sm:flex sm:gap-[3rem] sm:w-[70%] px-2 rounded-b-lg sm:h-[6rem] p-5 bg-white mx-auto ">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className=" bg-[#F7F7F7] w-[87%] h-[4rem] sm:w-[65%] sm:h-[3.5rem] mx-5 p-4 rounded-xl"
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
      <Apartment />
      <Features />
      <Property />
      <Cities />
      <Sellingoption/>
      <Popular2/>
      <Blogs2 />
    </div>
  );
};

export default Hero;
