import React from "react";
import Sale from "../components/Sale";
import Filter2 from "../components/Filter2";

const Sale2 = () => {
  return (
    <>
    <div className="bg-[#F7F7F7]">
      <div className="flex container mx-auto w-[100%] gap-[9rem]">
        <Filter2/>
    <div className="bg-[#F7F7F7] ">
        <div className="text-[1.5rem]  font-semibold container w-[95%] mt-[2rem] mx-auto">
            <h2>New York Home For Sale</h2>
        </div>
      <div className="p-6 sm:container sm:grid grid-cols-2 gap-[3rem] mx-auto">
        {[1, 1, 1, 1, 1, 1].map(() => {
          return <Sale />;
        })}
      </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Sale2;
