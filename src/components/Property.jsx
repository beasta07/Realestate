// import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const PropertyBuy = () => {
  return (
    <div>
      <div className="container w-[100%] mx-auto text-center mt-[3rem] sm:mt-[5rem] mb-[7rem]">
        <h2 className="text-[1.2rem] sm:text-[2rem] font-medium pt-5 ">
          See How Homez Can Help
        </h2>
        <p>Aliquam lacinia diam quis lacus euismod</p>
        <div className="sm:flex gap-5 px-4 sm:px-0">
          <div className="bg-white rounded-lg mt-[4rem] py-2 sm:py-0">
            <img
              src="/image/propertyBuy.svg"
              className="w-[55%] mt-5 p-8 mx-auto"
            />
            <h2 className="font-medium text-[1.3rem]">Buy a property</h2>
            <p className="text-sm px-5 py-5">
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus
              ultricies auctor.
            </p>
            <Link to="/">
              <button className="flex mx-auto mb-8 border-gray-500 py-4 px-7 border-2 rounded-xl font-medium hover:bg-black hover:text-white transition duration-300">
                Fond a home
                <MdOutlineArrowOutward className="mt-1 mx-2" />
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg mt-[4rem] py-2 sm:py-0">
            <img
              src="/image/propertyBuy.svg"
              className="w-[55%] mt-5 p-8 mx-auto"
            />
            <h2 className="font-medium text-[1.3rem]">Sell a property</h2>
            <p className="text-sm px-5 py-5">
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus
              ultricies auctor.
            </p>
            <Link to="/addproperty">
              <button className="flex mx-auto mb-8 border-gray-500 py-4 px-7 border-2 rounded-xl font-medium hover:bg-black hover:text-white transition duration-300">
                Place an ad
                <MdOutlineArrowOutward className="mt-1 mx-2" />
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg mt-[4rem] py-2 sm:py-0">
            <img
              src="/image/propertyBuy.svg"
              className="w-[55%] mt-5 p-8 mx-auto"
            />
            <h2 className="font-medium text-[1.3rem]">Rent a property</h2>
            <p className="text-sm px-5 py-5">
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus
              ultricies auctor.
            </p>
            <Link to="/buy">
              <button className="flex mx-auto mb-8 border-gray-500 py-4 px-7 border-2 rounded-xl font-medium hover:bg-black hover:text-white transition duration-300">
                
                Fond a rental
                <MdOutlineArrowOutward className="mt-1 mx-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBuy;
