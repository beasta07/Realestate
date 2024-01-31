import React from "react";
import Sale from "../components/Sale";

const Sale2 = () => {
  return (
    <div className="bg-[#F7F7F7] ">
        <div className="text-[1.5rem]  font-bold container w-[85%] mt-[9rem] mx-auto">
            <h2>New York Home For Sale</h2>
        </div>
      <div className="p-6 sm:container sm:grid grid-cols-3 gap-[1.5rem] mx-auto">
        {[1, 1, 1, 1, 1, 1].map(() => {
          return <Sale />;
        })}
      </div>
    </div>
  );
};

export default Sale2;
