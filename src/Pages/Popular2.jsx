import React from "react";
import Popular from "../components/Popular";
import { MdArrowOutward } from "react-icons/md";

const Popular2 = () => {
  return (
    <div className="bg-[#181A20] mt-[5rem] pb-5">
      <div className="container w-[100%] mx-auto">
        <div className="sm:flex justify-between  p-7">
          <div className="text-white ">
            <h2 className="font-bold text-[1.4rem] sm:text-[2rem]">
              Discover Popular Properties
            </h2>
            <p>Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <div className="flex-cols gap-5  mt-7">
            <button className="bg-white px-[2rem]  py-3 rounded-md">
              For Rent
            </button>
            <button className="bg-[#282A30] ml-4 text-white px-[2rem] py-3 rounded-md">
              {" "}
              For Sell
            </button>
          </div>
        </div>
        <div>
          {/* <div className="flex pb-6  "> */}
          <div className="p-6 sm:container sm:grid grid-cols-4 gap-6 mx-auto pb-9">
            {[1, 1, 1, 1].map(() => {
              return <Popular />;
            })}
          </div>
          {/* </div> */}
        </div>
        <button className="w-[20%] flex ml-[30rem] h-[3rem] mt-2 text-white rounded-full border-2">
          <h2 className="px-9 py-2">See all Properties</h2>
          <MdArrowOutward className="mt-2 text-[1.5rem]" />
        </button>
      </div>
    </div>
  );
};

export default Popular2;
