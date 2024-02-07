import {useEffect} from 'react'
// import Buy from '../components/Buy';
import { useSelector, useDispatch } from 'react-redux';
import BuyComp from '../components/BuyComp';
import Filter2 from '../components/Filter2';
import { getProperties } from '../Redux/features/PropertySlice';

const Buy = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProperties());
    }, []);
  
    const properties = useSelector((state) => state.property.properties);

    const rentProperties = properties.filter(property => property.purpose === 'rent');
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
                            {rentProperties.map((property, index) => (
                                <BuyComp key={index} property={property} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy;