import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { RiPinDistanceFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const ForSale = ({property}) => {
      // Get the first image from the images array
      const firstImageUrl = property?.images[0];
      // Append base URL before the first image path
      const imageUrl = `https://api.myraj.au/${firstImageUrl}`;
    
  return (
    <div className="container w-[100%] mx-auto py-5 ">
      <div className="rounded-lg overflow-hidden ">
        <Link to="/for-sale">
        <img className="w-[18rem] h-[12rem] rounded-lg hover:scale-105 transition-transform duration-300" src={imageUrl} />
        <p className="py-5"><span className="font-bold">{property.price} </span></p>
        <p className="pb-3 font-semibold line-clamp-1">{property?.name}</p>
        <p className="pb-2 text-[#8D8D8D] text-[0.8rem]">{property.location.tole},{property.location.district}</p>
        <div className="flex">
          <FaBed className="mt-1 text-[1rem]"/> <p className="text-[0.8rem] ml-2 mt-1 w-[2.5rem]">4 Bed</p>
          <FaShower className="mt-1 text-[1rem] ml-4"/> <p className="text-[0.8rem] ml-1 mt-1 w-[5rem]">3 Bathroom</p>
          <RiPinDistanceFill className="mt-1 text-[1rem] ml-4"/> <p className="text-[0.8rem] ml-2 mt-1 w-[4rem]">800 Sqft</p>
        </div>
        </Link>
      </div>
      
    </div>
  );
};
ForSale.propTypes ={
  property: PropTypes.object,}
export default ForSale
