import React from "react";

const Property = () => {
  return (
    <div>
      <div className="text-center mt-[5rem] ">
        <h2 className="font-bold text-[1.3rem]  sm:text-[2rem]">See How Realton Can Help</h2>
        <p className="text-gray-400">Aliquam lacinia diam quis lacus euismod</p>
      </div>
      <div className="w-[60%] h-[25rem] gap-[4rem] mt-[4rem] mx-auto container  grid sm:grid-cols-3">
        <div className=" rounded-md ">
          <img src="/image/property.png" />
          <h2 className="mt-4 font-bold text-[1.4rem]">Buy a property</h2>
          <p className="">
            Nullam sollicitudin blandit eros eu pretium. Nullam maximus
            ultricies auctor.
          </p>
          <button className="w-[60%] mt-6 h-[3rem] rounded-full border-2 bg-sky-500 hover:bg-blue-900 ">
            Find a home
          </button>
        </div>
        <div className=" rounded-md ">
          <img src="/image/property.png" />
          <h2 className="mt-4 font-bold  text-[1.4rem]">Buy a property</h2>
          <p>
            Nullam sollicitudin blandit eros eu pretium. Nullam maximus
            ultricies auctor.
          </p>
          <button className="w-[60%] mt-6 h-[3rem] rounded-full border-2 bg-sky-500 hover:bg-blue-900">
            Find a home
          </button>
        </div>
        <div className=" rounded-md ">
          <img src="/image/property.png" />
          <h2 className="mt-4 font-bold text-[1.4rem]">Buy a property</h2>
          <p>
            Nullam sollicitudin blandit eros eu pretium. Nullam maximus
            ultricies auctor.
          </p>
          <button className="w-[60%] mt-6 h-[3rem] rounded-full border-2 bg-sky-500 hover:bg-blue-900">
            Find a home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
