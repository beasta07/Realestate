// import React from 'react'

import ApartmentType from "./ApartmentType";
import Discover from "./Discover";
import Filter from "./Filter";
// import Navbar from "./Navbar"
import { MdOutlineArrowOutward } from "react-icons/md";
import PropertyBuy from "./PropertyBuy";
import BuySell from "./BuySell";
import Bestdeal from "../pages/Bestdeal";
import Blog from "../pages/Blog";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
        <div className="bg-[url('/images/homeImg2.jpg')] backdrop-brightness-100  w-[100%] bg-cover bg-center before:bg-[#181a2099] sm:h-[52rem] text-white">
            {/* <Navbar /> */}
          <div className="absolute inset-0 bg-[#181a2099] opacity-80"></div>
            <div className="container text-left w-[100%] mx-auto sm:pt-[15rem] pt-[7rem] px-4 sm:px-0 pb-12 sm:pb-0 relative z-10">
                <h3 className="text-[1.7rem] sm:text-[2.3rem] font-semibold pb-3 z-40">$980,00</h3>
                <h2 className="text-[2rem] sm:text-[3.3rem] font-semibold">Studio on Grand Avenue</h2>
                <p className="pb-8">32 Beds - 91 Baths - 1500 sq ft</p>
                <Link to='/buyelement'>
                <button className="flex text-black font-medium bg-white py-4 px-7 rounded-xl hover:bg-orange-900 hover:text-white transition duration-300">View Details<MdOutlineArrowOutward className="ml-2 mt-1"/></button>
                </Link>
            </div>
            <Filter />
        </div>
            <Discover />
            <ApartmentType />
            <PropertyBuy />
            <BuySell />
            <Bestdeal />
            <Blog />
    </div>
  )
}

export default Hero