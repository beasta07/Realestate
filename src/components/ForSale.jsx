// import React from 'react'
import { CiHeart } from "react-icons/ci";
import PropTypes from "prop-types";

const ForSale = ({property}) => {
    return (
        <div>
            <div className="shadow-md rounded-xl my-[2rem] sm:my-[5rem] mb-[4rem] ">
                <img src={`https://api.myraj.au/${property.images[0]}`} className="rounded-t-xl h-[12rem] w-[22.3rem] sm:w-[18rem] object-cover" />
                <h2 className="font-medium mt-4 px-3 line-clamp-1">{property?.name}</h2>
                <p className="text-sm text-gray-500 py-2 px-3">{property?.location.tole}, {property?.location.district}</p>
                <hr />
                <div className="flex justify-between px-3 py-2">
                    <div><p>For {property?.purpose}</p></div>
                    <div><button><CiHeart className="mt-1" /></button></div>
                </div>
            </div>
        </div>
    )
}
ForSale.propTypes = {
    property: PropTypes.object, // Define the prop type for blog
  };

export default ForSale