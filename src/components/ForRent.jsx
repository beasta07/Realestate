import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
// import { RiPinDistanceFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux'
// import { getProperties } from "../Redux/features/propertySlice";
// import { useEffect } from "react";
import PropTypes from "prop-types"

const ForRent = ({property}) => {

    // Get the first image from the images array
    const firstImageUrl = property?.images[0];
    // Append base URL before the first image path
    const imageUrl = `https://api.myraj.au/${firstImageUrl}`;
  
  
  
    // const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(getProperties())
  // }, [])

  // const properties = useSelector((state) => state.property.properties)
  // const rentProperties = properties.filter(property => property.purpose === 'rent');
  return (
    
    <div className="container w-[100%] mx-auto py-5 ">
      <div className="rounded-lg overflow-hidden ">
        <img className="w-[18rem] h-[12rem] rounded-lg hover:scale-105 transition-transform duration-300" src={imageUrl} />
        <p className="py-5"><span className="font-bold">Rs {property?.price} </span>/ mo</p>
        <p className="pb-3 font-semibold">{property.name}</p>
        <p className="pb-2 text-[#8D8D8D] text-[0.8rem]">{property.location.tole},{property.location.district}</p>
        <div className="flex">
          <FaBed className="mt-1 text-[1rem]"/> <p className="text-[0.8rem] ml-2 mt-1 w-[5rem]">{property.room} rooms</p>
          <FaShower className="mt-1 text-[1rem] ml-4"/> <p className="text-[0.8rem] ml-1 mt-1 w-[7rem]">{property.bathroom} bathrooms</p>
          {/* <RiPinDistanceFill className="mt-1 text-[1rem] ml-4"/> <p className="text-[0.8rem] ml-2 mt-1 w-[7rem]">{property.area} Sqft</p> */}
        </div>
        
      </div>
    </div>
  );
};
ForRent.propTypes ={
  property: PropTypes.object,}
export default ForRent
