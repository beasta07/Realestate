import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getProperties } from '../Redux/features/PropertySlice';
import BuyComp from '../components/BuyComp';
import Filter2 from '../components/Filter2';
import { getCategories } from "../Redux/features/CategorySlice";

const Buy = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const locationParams = new URLSearchParams(location.search);

    const filterLocation = locationParams.get('location');
    const filterCategory = locationParams.get('category');

    console.log(locationParams, "loation params", filterCategory)

    useEffect(() => {
        dispatch(getProperties());
        dispatch(getCategories());
    }, []);

    const categories = useSelector((state) => state.category.categories);
    const properties = useSelector((state) => state.property.properties);
    const rentProperties = properties.filter(property => property.purpose === 'rent');

    // Filter properties based on location and category
    const filteredProperties = rentProperties.filter(property => {
        if (filterLocation && filterCategory) {
            return property.location.district === filterLocation && categories.name === filterCategory;
        } else if (filterLocation) {
            return property.location.district === filterLocation;
        } else if (filterCategory) {
            return categories.name === filterCategory;
        }
        return true; // Return all properties if no filter applied
    });

    return (
        <>
            <div className='bg-[#F7F7F7] px-3 sm:px-0'>
                <div className='sm:flex container mx-auto w-[100%] gap-[3.2rem] pt-10'>
                    <Filter2 />

                    <div className="bg-[#F7F7F7] rounded-lg">
                        <div className="text-[1.3rem] sm:text-[1.8rem] font-semibold container w-[90%] mt-[2rem] ">
                            <h2 className='pb-5'>For Rent</h2>
                        </div>
                        <div className="container grid sm:grid-cols-2 gap-[1.7rem] mx-auto">
                            {filteredProperties.map((property, index) => (
                                <Link key={index} to={`/buyelement/${property?._id}`}>
                                    <BuyComp property={property} />
                                </Link>
                            ))}
                            {filteredProperties.map((categories, index) => (
                                <Link key={index} to={`/buyelement/${categories?._id}`}>
                                    <BuyComp categories={categories} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy;
