import React, { useEffect } from "react";
import Buy from "../components/Buy";
import Filter2 from "../components/Filter2";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../Redux/features/PropertySlice";
import {Link } from "react-router-dom";

const Buy2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProperties());
  }, []);

  const properties = useSelector((state) => state.property.properties);
  const rentProperties = properties.filter(property => property.purpose === "rent")
  const filterLocation = useSelector((state) => state.property.filterLocation);

  const filteredProperties =filterLocation ? rentProperties.filter(property => property.location.district === filterLocation) : rentProperties;

  return (
    <>
      <div className="bg-[#F7F7F7]">
        <div className="flex container mx-auto w-[100%] gap-[2rem]">
          <Filter2 />

          <div className="bg-[#F7F7F7] rounded-lg">
            <div className="text-[1.6rem]  font-semibold container w-[90%] mt-[2rem] mx-auto">
              <h2>New York Home For Buy</h2>
            </div>
            <div className="p-6 sm:container sm:grid grid-cols-2 gap-[2.6rem] mx-auto">
              {filteredProperties.map((property, index) => (
               <Link to={`/buyelement/${property?._id}`}>
                <Buy key={index} property={property} />
                </Link> 
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy2;
