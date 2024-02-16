// import React from 'react'

// import BuyComponent from '../components/BuyComponent';
import Filter from '../components/Filter';
import { useDispatch, useSelector } from 'react-redux'
import { getProperties } from "../Redux/features/propertySlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SellComponent from '../components/SellComponent';

const Sell = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProperties())
  }, [])

  const properties = useSelector((state) => state.property.properties)
  const rentProperties = properties.filter(property => property.purpose === 'sale');
  const filterLocation = useSelector((state) => state.property.filterLocation);
  const filteredProperties = filterLocation ? rentProperties.filter(property => property.location.district === filterLocation) : rentProperties;
  return (
    <>
      <div className='bg-[#F7F7F7]'>
        <div className='sm:flex container mx-auto w-[100%] gap-[2rem]'>
          <Filter />

          <div className="bg-[#F7F7F7] rounded-lg">
            <div className="text-[1.6rem]  font-semibold container w-[90%] mt-[2rem] mx-auto">

              <h2>New York Home For Rent</h2>
            </div>
            <div className="p-6 sm:container sm:grid grid-cols-2 gap-[2.6rem] mx-auto">
              {filteredProperties.map((property, index) => (
                <Link to={`/sellelement/${property?._id}`} key={index} >
                  <SellComponent property={property} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sell