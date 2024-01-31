import React from "react";
import { CiHeart } from "react-icons/ci";

const Popular = () => {
  return (
    <div className="pb-5 ">
      <div className="bg-white sm:w-[90%] m-1 h-[22rem] sm:h-[18rem] rounded-xl">
        <img className="rounded-xl" src="/image/p1.jpg" />
        <h2 className="font-bold mt-5 ml-4">Luxuary villa in Rego Park</h2>
        <p className="text-gray-400 ml-4">Los Angeles City, CA, USA</p>
        <hr className="h-px bg-gray-200 mt-3 border-0 w-[100%] mx-auto dark:bg-gray-700" />
        <div className="flex mt-3 justify-between ">
          <p className="ml-4">For rent</p>
          <CiHeart className="mt-1 mr-4" />
        </div>
      </div>
    </div>
  );
};

export default Popular;
