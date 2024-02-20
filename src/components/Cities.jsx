import React from "react";
import { TiArrowRightThick } from "react-icons/ti";

const Cities = () => {
  return (
    <div className="container w-[100%] mx-auto mt-[5rem]">
      <div className="container w-[80%] mx-auto pb-[4rem]">
        <div>
          <h2 className="font-bold text-[1.2rem] sm:text-[2rem]">Properties by Cities</h2>
          <p>Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className="grid sm:grid-cols-3 w-[100%] mx-auto">
          <div className="mt-[3rem] relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
            <img className="h-[22rem]" src="/image/city-1.png" alt="City" />
            <div className="absolute top-0  bottom-0 px-4 right-0 left-0 w-[85%] rounded-xl overflow-hidden bg-gray-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
              <div>
                <h1 className="text-white font-semibold mt-4 text-[1.2rem]">
                  Los Angeles
                </h1>
                <p className="text-white">12 Properties</p>
              </div>
            </div>
          </div>
          <div className="mt-[3rem] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img className="h-[22rem]" src="/image/city-1.png" alt="City" />
            <div className="absolute top-0  bottom-0 px-4 right-0 left-0 w-[85%] rounded-xl overflow-hidden bg-gray-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
              <div>
                <h1 className="text-white font-semibold mt-3 text-2">
                  Los Angeles
                </h1>
                <p className="text-white">12 Properties</p>
              </div>
            </div>
          </div>
          <div className="mt-[3rem] relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img className="h-[22rem]" src="/image/city-1.png" alt="City" />
            <div className="absolute top-0  bottom-0 px-4 right-0 left-0 w-[85%] rounded-xl overflow-hidden bg-gray-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
              <div>
                <h1 className="text-white font-semibold mt-3 text-2">
                  Los Angeles
                </h1>
                <p className="text-white">12 Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
