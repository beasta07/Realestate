import React from "react";
import { CiHeart } from "react-icons/ci";

const Popular = ({property}) => {
  return (
    <div className="pb-5 ">
      <div className="bg-white sm:w-[85%] m-1 h-[22rem] transition duration-300 ease-in-out hover:scale-110 alt='Louvre'  sm:h-[18rem] rounded-xl">
        <img className="rounded-t-xl h-[10rem] w-[20rem] " src={`https://api.myraj.au/${property.images[0]}`}/>
        <h2 className="font-bold mt-5 ml-4 line-clamp-1">{property?.name}</h2>
        <p className="text-gray-400 ml-4">{property.location.district},{property.location.tole}</p>
        <hr className="h-px bg-gray-200 mt-3 border-0 w-[100%] mx-auto dark:bg-gray-700" />
        <div className="flex mt-3 justify-between ">
          <p className="ml-4">{property.purpose}</p>
          <CiHeart className="mt-1 mr-4" />
        </div>
      </div>
    </div>
  );
};

export default Popular;
