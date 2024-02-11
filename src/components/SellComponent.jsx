import { CiHeart } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { RiPinDistanceFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SellComponent = ({ property }) => {
  // Get the first image from the images array
  const firstImageUrl = property?.images[0];

  // Append base URL before the first image path
  const imageUrl = `https://api.myraj.au/${firstImageUrl}`;

  return (
    <>
      <div className="pb-5 ">
        <div className="bg-white sm:w-[100%]  rounded-xl pb-6 shadow-md hover:scale-105 transition-transform duration-300 ">
          <img className="rounded-t-lg h-[13rem] w-[28rem] " src={imageUrl}  alt=""/> {/* Modified line */}
          <Link to="/buy-element">
            <h2 className="font-semibold mt-5 ml-4 line-clamp-1">{property.name}</h2>
          </Link>
          <p className="text-gray-700 ml-4 text-[0.85rem] py-3">{property.location.tole},{property.location.district} </p>
          <div className="flex ml-5">
            <FaBed className="mt-1 text-[1rem] text-grey" /> <p className="text-[0.8rem] ml-2 mt-1 w-[2.5rem]">{property.room} Bed</p>
            <FaShower className="mt-1 text-[1rem] ml-4" /> <p className="text-[0.8rem] ml-1 mt-1 w-[6rem]">{property.bathroom} bathrooms</p>
            <RiPinDistanceFill className="mt-1 text-[1rem] ml-4" /> <p className="text-[0.8rem] ml-2 mt-1 w-[5rem]">{property.area} Sqft</p>
          </div>
          <hr className="h-px bg-gray-200 mt-3 border-0 w-[100%] mx-auto dark:bg-gray-700" />

          <div className="flex mt-3 justify-between ">
            <p className="ml-4 text-[0.85rem]">{property.purpose}</p>
            <CiHeart className="mt-1 mr-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SellComponent;
