import { CiHeart } from "react-icons/ci";
import PropTypes from "prop-types";

const BuyComp = ({ property }) => {
  if (!property) {
    return null; // Return null or a loading indicator if blog is undefined
  }

  return (
    <>
      <div className="rounded-lg bg-white shadow hover:scale-105 transition duration-500">

        {property.images.length > 0 ? (
          <img
            src={`https://api.myraj.au/${property.images[0]}`} // Display the first image from the array
            className="rounded-lg h-[13rem] w-[100%] object-cover"
            alt="Property Image"
          />
        ) : (
          <img
            src="/images/buy1.jpg"
            className="rounded-lg h-[13rem] w-[100%] object-cover"
            alt="Property Image"
          /> // Display a placeholder if no images
        )}
        <h2 className="px-5 font-medium pt-5 pb-1 line-clamp-1">{property?.name}</h2>
        <p className="px-5 text-sm">{property?.location.tole}, {property?.location.district}</p>
        <hr className="px-5 my-3" />
        <div className="flex px-5 justify-between pb-4">
          <p className="text-sm">{property?.purpose}</p>
          <i>
            <CiHeart className="mt-1 mr-4" />
          </i>
        </div>
      </div>
    </>
  )
}

BuyComp.propTypes = {
  property: PropTypes.object, // Define the prop type for blog
};

export default BuyComp

// {properties?.map((cat, index) => (
//     <option key={index} value={cat?.name}>{cat?.name}</option>
// ))}