// import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

const DiscoverComp = ({property}) => {
    return (
        <div>
            <div className="rounded-lg shadow inline-block overflow-hidden sm:ml-[1rem]">
                    <img src={`https://api.myraj.au/${property.images[0]}`} className="rounded-t-lg hover:scale-105 sm:h-[15rem] sm:w-[23rem] transition duration-500 cursor-pointer object-cover" />
                    <h2 className="font-medium text-md p-3">{property?.name}</h2>
                    <p className="text-orange-900 font-medium px-3 pb-3">Rs. {property?.price}</p>
            </div>
        </div>
    )
}
DiscoverComp.propTypes = {
    property: PropTypes.object,
  };

export default DiscoverComp;