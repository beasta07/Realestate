import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { RiPinDistanceFill } from "react-icons/ri";
const ForRent = () => {
  return (
    <div className="container w-[100%] mx-auto py-5 ">
      <div className="rounded-lg overflow-hidden ">
        <img className="w-[20rem] rounded-lg hover:scale-105 transition-transform duration-300" src="images/Sale.jpg" />
        <p className="py-5"><span className="font-bold">$2000 </span>/ mo</p>
        <p className="pb-3 font-semibold">Furnished House in Los Santos</p>
        <p className="pb-2 text-[#8D8D8D] text-[0.8rem]">Cape Town, CA, SA</p>
        <div className="flex">
          <FaBed className="mt-1 text-[1rem]"/> <p className="text-[0.8rem] ml-2 mt-1 w-[2.5rem]">4 Bed</p>
          <FaShower className="mt-1 text-[1rem] ml-4"/> <p className="text-[0.8rem] ml-1 mt-1 w-[5rem]">3 Bathroom</p>
          <RiPinDistanceFill className="mt-1 text-[1rem] ml-4"/> <p className="text-[0.8rem] ml-2 mt-1 w-[4rem]">800 Sqft</p>
        </div>
      </div>
    </div>
  );
};

export default ForRent
