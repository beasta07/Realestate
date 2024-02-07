import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const BuyComp = ({property}) => {


    return (
        <>
    <div className="rounded-lg bg-white shadow hover:scale-105 transition duration-500">
      <Link to="/buyelement">

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
        <h2 className="px-5 font-medium pt-5 pb-1 line-clamp-1">{property.name}</h2>
        <p className="px-5 text-sm">{property.location.district}</p>
        <hr className="px-5 my-3" />
      </Link>
      <div className="flex px-5 justify-between pb-4">
        <p className="text-sm">{property.purpose}</p>
        <i>
          <CiHeart className="mt-1 mr-4" />
        </i>
      </div>
    </div>
        </>
    )
}

export default BuyComp

// {properties?.map((cat, index) => (
//     <option key={index} value={cat?.name}>{cat?.name}</option>
// ))}