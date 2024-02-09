import React from "react";
import { CiHeart } from "react-icons/ci";
import Filter2 from "./Filter2";

const Buy = ({ property }) => {
  const firstImageUrl = property.images[0];
  const imageUrl = `https://api.myraj.au/${firstImageUrl}`;

  return (
    <>
      <div className="pb-5 ">
        <div className="bg-white sm:w-[100%]  h-[20rem] transition duration-300 ease-in-out hover:scale-110 rounded-xl">
          <img className="rounded-t-xl h-[12rem] w-[100%] " src={imageUrl} />
          <h2 className="font-bold mt-5 ml-4 line-clamp-1">{property?.name}</h2>
          <p className="text-gray-400 ml-4">
            {property.location.tole}, {property?.location.district}{" "}
          </p>
          <hr className="h-px bg-gray-200 mt-3 border-0 w-[100%] mx-auto dark:bg-gray-700" />
          <div className="flex mt-3 justify-between ">
            <p className="ml-4">{property.purpose} </p>
            <CiHeart className="mt-1 mr-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
