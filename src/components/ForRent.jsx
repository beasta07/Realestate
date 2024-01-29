import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { RiPinDistanceFill } from "react-icons/ri";
const ForRent = () => {
  return (
    <div className="container w-[100%] mx-auto py-5 ">
      <div className="rounded-lg overflow-hidden ">
        <img className="w-[20rem] rounded-lg hover:scale-105 transition-transform duration-300" src="images/Villa.jpg" />
        <p className="py-5"><span className="font-bold">$82000 </span>/ mo</p>
        <p className="pb-3 font-semibold">Luxury villa in Rega Park</p>
        <p className="pb-2 text-[#8D8D8D] text-[0.8rem]">Los Angeles City, CA, USA</p>
        <div className="flex">
          <FaBed className="mt-1 text-[1rem]"/> <p className="text-[0.8rem] ml-2 mt-1 w-[2.5rem]">2 Bed</p>
          <FaShower className="mt-1 text-[1rem] ml-4"/> <p className="text-[0.8rem] ml-1 mt-1 w-[5rem]">1 Bathroom</p>
          <RiPinDistanceFill className="mt-1 text-[1rem] ml-4"/> <p className="text-[0.8rem] ml-2 mt-1 w-[4rem]">1200 Sqft</p>
        </div>
      </div>
    </div>
  );
};

export default ForRent
