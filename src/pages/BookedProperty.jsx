// import  { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getBookedProperties } from '../Redux/features/PropertySlice';
// import BookedPropertyComp from '../components/BookedPropertyComp';

// const BookedProperty = () => {
//     const dispatch = useDispatch();
//     const bookedProperties = useSelector(state => state.property.bookedProperties);

//     useEffect(() => {
//         // Dispatch an action to fetch the booked properties when the component mounts
//         dispatch(getBookedProperties());
//     }, [dispatch]);

//     return (
//         <div className='container w-full mx-auto'>
//             <h2 className='font-semibold text-[1.5rem] py-[2rem]'>Recently Booked Properties</h2>
//             <div>
//                 {/* Map through the booked properties and render each one */}
//                 {bookedProperties.map(property => (
//                     <BookedPropertyComp key={property._id} property={property} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookedProperty;


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookedProperties, getProperties } from '../Redux/features/PropertySlice';
import { Link } from 'react-router-dom';
import BookedPropertyComp from "../components/BookedPropertyComp"

const BookedProperty = () => {
    const dispatch = useDispatch();
    const userID = localStorage.getItem('userId');

    useEffect(() => {
        dispatch(getBookedProperties({ userId: userID }));
        dispatch(getProperties());
    }, [dispatch, userID]);

    const properties = useSelector((state) => state.property.properties);
    const bookedProperties = useSelector((state) => state.property.bookedProperties);
    const currentUserBookedProperties = bookedProperties.filter(property => property.user === userID);

    // Get details of properties booked by the current user
    const bookedPropertyDetails = currentUserBookedProperties.map(property => {
        const matchedProperty = properties.find(prop => prop._id === property.property);
        return matchedProperty;
    }).filter(Boolean); // Filter out undefined values

    return (
        <div className='container w-full mx-auto'>
            <h2 className='font-semibold text-[1.5rem] py-[2rem]'>Booked Properties</h2>
            <div className="container grid sm:grid-cols-3 gap-5 mx-auto">
                {bookedPropertyDetails.map((property, index) => (
                    <Link key={index} to={`/buyelement/${property._id}`}>
                        {/* <p className='font-medium '>User Id: {property.user}</p> */}
                        <BookedPropertyComp property={property} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BookedProperty;
