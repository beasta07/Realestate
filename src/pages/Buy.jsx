import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProperties } from '../Redux/features/PropertySlice';
import BuyComp from '../components/BuyComp';
import Filter2 from '../components/Filter2';

const Buy = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProperties());
    }, []);

    const properties = useSelector((state) => state.property.properties);
    const rentProperties = properties.filter(property => property.purpose === 'rent');
    const filterLocation = useSelector((state) => state.property.filterLocation); // Change this to get filterLocation from Redux store

    const filteredProperties = filterLocation ? rentProperties.filter(property => property.location.district === filterLocation) : rentProperties;
    
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy;
