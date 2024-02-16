import { useEffect, useState } from 'react'

// import Bestdealcomp from "../components/Bestdealcomp";
import ForRent from '../components/ForRent';
import ForSale from '../components/ForSale';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../Redux/features/PropertySlice';
import { Link } from 'react-router-dom';

const Bestdeal = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProperties());
    }, []);

    const [selectedButton, setSelectedButton] = useState("sale");
    const properties = useSelector((state) => state.property.properties);
    const rentProperties = properties.filter(property => property.purpose === 'rent');
    const sellProperties = properties.filter(property => property.purpose === 'sale');
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName === selectedButton ? "" : buttonName); // Toggle selected button
    };

    return (
        <div className="bg-white">
            <div className="container w-[100%] mx-auto pt-[5.5rem] px-4 sm:px-0">
                <div className="sm:flex justify-between ">
                    <div className="">
                        <h2 className="text-[1.4rem] sm:text-[2rem] font-semibold">Discover Our Best Deals</h2>
                        <p className="text-sm font-medium">Aliquam lacinia diam quis lacus euismod</p>
                    </div>
                    <div className="mt-8 sm:mt-5">
                        <button onClick={() => handleButtonClick("rent")} className={`py-2 px-4   border-2 border-orange-600 rounded-lg mr-3 sm:mr-4 ${selectedButton === "rent" ? "bg-orange-900 text-white" : "bg-white border-gray-800 border-2  text-black"}`}>For Rent</button>
                        <button onClick={() => handleButtonClick("sale")} className={`py-2 px-4 border-2 border-orange-600 bg-orange-600 rounded-lg ${selectedButton === "sale" ? "bg-orange-900 text-white" : "bg-white  border-2 border-gray-800 text-black"}`}>For Sale</button>
                    </div>
                </div>

                <div className="hidden sm:grid grid-cols-4 grid-rows-1 gap-5">
                    {selectedButton === 'rent' ? (
                        rentProperties.map((property, index) => (
                            <Link key={index} to={`/buyelement/${property?._id}`}>
                                <ForRent property={property} />
                            </Link>
                        ))
                    ) : (sellProperties.map((property, index) => (
                        <Link key={index} to={`/buyelement/${property?._id}`}>
                            <ForSale property={property} />
                        </Link>
                    ))
                    )}
                </div>

                <div className="sm:hidden grid grid-cols-1 grid-rows-1 gap-5">
                    {selectedButton === 'rent' ? (
                        rentProperties.map((property, index) => (
                            <Link key={index} to={`/buyelement/${property?._id}`}>
                                <ForRent property={property} />
                            </Link>
                        ))
                    ) : (sellProperties.map((property, index) => (
                        <Link key={index} to={`/buyelement/${property?._id}`}>
                            <ForSale property={property} />
                        </Link>
                    ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Bestdeal