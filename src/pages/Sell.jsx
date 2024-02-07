import SellComp from '../components/SellComp';
import Filter2 from '../components/Filter2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProperties } from '../Redux/features/PropertySlice';

const Sell = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getProperties());
    }, []);

    const properties = useSelector((state)=> state.property.properties);

    const saleProperties = properties.filter(properties => properties.purpose === 'sale');

    return (
        <>
            <div className='bg-[#F7F7F7]  px-3 sm:px-0'>
                <div className='sm:flex container mx-auto w-[100%] gap-[3.2rem] pt-10'>
                    <Filter2 />

                    <div className="bg-[#F7F7F7] rounded-lg">
                        <div className="text-[1.8rem] font-semibold container w-[90%] mt-[2rem] ">
                            <h2 className='pb-5'>For Sell</h2>
                        </div>
                        <div className="container grid sm:grid-cols-2 gap-[1.7rem] mx-auto">
                            {saleProperties.map((property, index) => (
                                 <SellComp key={index} property={property} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sell;