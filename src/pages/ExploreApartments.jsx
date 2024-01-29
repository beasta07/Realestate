import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import { SiBandsintown } from "react-icons/si";
const ExploreApartments = () => {
  return (
    <div className="bg-[#181A20] text-white  ">
      <div className="container w-[100%] mx-auto p-[2rem] pb-[8rem] ">
        <div>
          <h1 className="text-center text-[1.75rem] font-bold  ">
            Explore Apartment Types
          </h1>
          <p className="text-center text-[0.8rem]">
            Get some Inspirations from 1800+ skills
          </p>
          <div className=" grid grid-cols-5 gap-5 mt-[4rem]">
            <div className="hover:bg-white hover:text-black w-[100%] p-5 rounded-lg ">
              <FaHouse className="rounded-full bg-[#303137] w-[4rem] h-[4rem] p-5 mb-5" />
              <h1 className="font-semibold pb-2 ">Houses</h1>
              <p className="pb-4">22 properties</p>
            </div>

            <div className="hover:bg-white hover:text-black  p-5 rounded-lg w-[100%] ">
              <MdApartment className="rounded-full bg-[#303137] w-[4rem] h-[4rem] p-5 mb-5" />
              <h1 className="font-semibold pb-2 ">Apartments</h1>
              <p className="pb-4">22 properties</p>
            </div>
            <div className="hover:bg-white hover:text-black p-5 rounded-lg w-[100%]">
              <RiHomeOfficeFill className="rounded-full bg-[#303137] w-[4rem] h-[4rem] p-5 mb-5" />
              <h1 className="font-semibold pb-2 ">Offices</h1>
              <p className="pb-4">22 properties</p>
            </div>
            <div className="hover:bg-white hover:text-black p-5 rounded-lg w-[100%]">
              <MdHolidayVillage className="rounded-full bg-[#303137] w-[4rem] h-[4rem] p-5 mb-5" />
              <h1 className="font-semibold pb-2 ">Villa</h1>
              <p className="pb-4">22 properties</p>
            </div>
            <div className="hover:bg-white hover:text-black p-5 rounded-lg w-[100%]">
              <SiBandsintown className="rounded-full bg-[#303137] w-[4rem] h-[4rem] p-5 mb-5" />
              <h1 className="font-semibold pb-2 ">Townhome</h1>
              <p className="pb-4">22 properties</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreApartments;
