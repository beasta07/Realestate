import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import { SiBandsintown } from "react-icons/si";
import { MdBungalow } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ExploreApartments = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
   responsive:[
    {
      breakpoint:768 ,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
   ]
  };
  


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
          <Slider {...settings} className="sm:w-[550%] w-[20rem]">
            <div className="hover:bg-white hover:text-black  p-5 rounded-lg ">
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
            <div className="hover:bg-white hover:text-black p-5 rounded-lg w-[100%]">
              <MdBungalow className="rounded-full bg-[#303137] w-[4rem] h-[4rem] p-5 mb-5" />
              <h1 className="font-semibold pb-2 ">Bungalow</h1>
              <p className="pb-4">22 properties</p>
            </div>
            <div className="hover:bg-white hover:text-black p-5 rounded-lg w-[100%]">
              <FaWarehouse className="rounded-full bg-[#303137] w-[4rem] h-[4rem] p-5 mb-5" />
              <h1 className="font-semibold pb-2 ">Loft</h1>
              <p className="pb-4">22 properties</p>
            </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreApartments;
