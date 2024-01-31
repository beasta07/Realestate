import React from "react";
import Blogs from "../components/Blogs";

const Blogs2 = () => {
  return (
    <div>
      <div className="mx-auto container mt-[5rem] text-center">
        <h2 className="font-bold text-[1.8rem]">From Our Blogs</h2>
        <p>Aliquam lacinia diam quis lacus euismod</p>
      </div>
      <div>
      <div className="p-6 sm:container sm:grid grid-cols-3 gap-6 mx-auto pb-9">
            {[1, 1, 1].map(() => {
              return <Blogs/>;
            })}
          </div>
      </div>
    </div>
  );
};

export default Blogs2;
