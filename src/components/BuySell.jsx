// import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const BuySell = () => {
  return (
    <div className="bg-[url('/images/propertyImg.jpg')] mb-[0rem] bg-fixed bg-cover">
      <div className="container w-[100%] mx-auto text-center text-white">
        <h3 className="pt-[7rem] sm:pt-[10rem] pb-5">BUY OR SELL</h3>
        <h2 className="text-[1.9rem] sm:text-[2rem] font-semibold pb-8 sm:w-[80%] mx-auto ">Looking to Buy a new property or sell an existing one? Realton provides an awesome solution!</h2>
        <div className="sm:flex justify-center gap-7 pb-[10rem]">
          <Link to='/buy'><button className="mx-auto sm:mx-0 text-center flex py-4 sm:py-4 px-5 sm:px-7 bg-orange-900 rounded-lg sm:mb-0 mb-3">Rent Property <MdOutlineArrowOutward className="mt-1 mx-2" /></button></Link>
          <Link to='/sell'><button className="mx-auto sm:mx-0 text-center flex py-4 sm:py-4 px-5 sm:px-7 bg-white text-black rounded-lg hover:bg-orange-900 hover:text-white transition duration-300">Browse Properties <MdOutlineArrowOutward className="mt-1 mx-2" /></button></Link>
        </div>
      </div>
    </div>
  )
}

export default BuySell