import React, { useEffect } from "react";
import Features from "../components/features";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../Redux/features/PropertySlice";
import { Link } from "react-router-dom";
// import BuyElement from "./BuyElement";


const Featuresmain = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProperties())
    }, []);
    
    const properties = useSelector((state) => state.property.properties);
  return (
    <div className="bg-[#F7F7F7] pb-[4rem]  sm:mt-[6rem] mt-[4rem]">
      <div className="container w-[100%] mx-auto">
        <div className="sm:flex justify-between  p-7">
          <div>
            <h2 className="font-bold text-[1.4rem] sm:text-[2rem]">
            Discover Our Featured Listings
            </h2>
            <p>Aliquam lacinia diam quis lacus euismod</p>
          </div>
        </div>
        <div>
          <div className="p-6 sm:container sm:grid grid-cols-3 gap-6 mx-auto pb-9">
            {properties.map((property,index) => (
              <Link key={index} to={`/BuyElement/${property?._id}`}> 
              <Features property={property} />
              </Link>
            ))}

          </div>
          {/* </div> */}
        </div>

      </div>
    </div>
  );
};

export default Featuresmain;
