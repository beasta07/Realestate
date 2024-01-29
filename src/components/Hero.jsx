import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";

export default function Hero() {
  const [searchType, setSearchType] = useState("buy");

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  const getPlaceholderText = () => {
    switch (searchType) {
      case "buy":
        return "Enter property to be bought";
      case "rent":
        return "Enter property to be rented";
      case "sold":
      default:
        return "Enter property to be sold";
    }
  };

  return (
    <>
      <div className="bg-[url('/images/home.jpg')] w-screen bg-cover h-screen flex mx-auto">
        <div className="sm:pl-[10rem] sm:pr-[4rem] mx-2 sm:mx-0">
          <h1 className="sm:text-[2.5rem] font-semibold sm:w-[80%] w-[25rem] text-[2rem] sm:mt-[7rem] mt-[5rem] px-2 sm:px-0">
            Find the Perfect Place to Live With Your Family
          </h1>
          <div className="z-40">
            <div className="mt-[2rem] bg-[white] sm:w-[35%] w-[55%] p-6 rounded-t-2xl ">
              <ul className="flex gap-9 text-[#727272] font-bold">
                <li onClick={() => handleSearchTypeChange("buy")} className={`cursor-pointer ${searchType === "buy" ? "border-b-2 border-black" : ""}`}>Buy</li>
                <li onClick={() => handleSearchTypeChange("rent")} className={`cursor-pointer ${searchType === "rent" ? "border-b-2 border-black" : ""}`}>Rent</li>
                <li onClick={() => handleSearchTypeChange("sold")} className={`cursor-pointer ${searchType === "sold" ? "border-b-2 border-black" : ""}`}>Sold</li>
              </ul>
            </div>
            <div className="bg-[rgb(255,255,255)] sm:w-[50%] w-[100%] rounded-b-2xl rounded-tr-2xl p-5 sm:p-8 sm:flex absolute z-2">
              <form className="w-[70%] z-40 flex gap-5">
                <input
                  type="text"
                  placeholder={getPlaceholderText()}
                  className="bg-gray-200 text-[0.9rem] text-black sm:w-[65%] w-[20rem] rounded-2xl sm:p-4 p-5 mb-4 sm:mb-0  "
                />
                <select className="block appearance-none bg-gray-200 border w-[45%] border-gray-200 rounded-2xl text-gray-700 py-3 px-4 pr-8 mr-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option className="hover:bg-[#EB6753] hover:text-white">Apartments</option>
                  <option>Bunglow</option>
                  <option>Houses</option>
                  <option>Office</option>
                  <option>Villa</option>
                </select>
              </form>
              <div className="flex mt-4 sm:mt-0">
                <IoFilterSharp className="mt-5 mr-2" />
                <p className="font-semibold mr-8 mt-4">Advanced</p>
                <CiSearch className="text-[3rem] bg-[#EB6753] text-[white] rounded-md mt-1 p-2" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="images/firstHouse.png" className="w-[65rem] -ml-[10rem] mt-[5rem] r-0" />
        </div>
      </div>
    </>
  );
}
