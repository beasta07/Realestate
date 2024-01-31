import React from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { GiVillage } from "react-icons/gi";
import { MdBungalow } from "react-icons/md";
import { LuTent } from "react-icons/lu";

const Apartment = () => {
  return (
    <div className=''>
        <div className='w-[100%] container mx-auto px-7 sm:px-[4rem] mt-[5rem]'>
            <h2 className='font-bold text-[1.5rem] sm:text-[2rem] '>Explore Apartment Types</h2>
            <p>Get some Inspirations from 1800+ skills</p>
        </div>
        <div className='grid grid-cols-2 w-[90%] sm:w-[80%] sm:pb-[6rem] mt-8 pb-[47rem] sm:mt-[7rem] h-[16rem]  container mx-auto sm:grid-cols-5 gap-3'>
          <div className='rounded-lg hover:bg-gray-900 px-8   p-4 bg-[#F7F7F7] '>
          <HiOutlineHome className='rounded-full mt-4 p-3  text-[4rem] bg-white ' />
            <h2 className='mt-[5.5rem]'>Houses</h2>
            <p>22 Properties</p>
          </div>
          <div className=' rounded-lg px-8 container hover:bg-gray-900  p-4 bg-[#F7F7F7] '>
          <MdApartment  className='rounded-full mt-4 p-3  text-[4rem] bg-white ' />
            <h2 className='mt-[5.5rem]'>Houses</h2>
            <p>22 Properties</p>
          </div>
          <div className=' rounded-lg px-8 container hover:bg-gray-900  p-4 bg-[#F7F7F7] '>
          <ImOffice className='rounded-full mt-4 p-3  text-[4rem] bg-white ' />
            <h2 className='mt-[5.5rem]'>Houses</h2>
            <p>22 Properties</p>
          </div>
          <div className=' rounded-lg px-8 container hover:bg-gray-900  p-4 bg-[#F7F7F7] '>
          <MdOutlineHolidayVillage className='rounded-full mt-4 p-3  text-[4rem] bg-white ' />
            <h2 className='mt-[5.5rem]'>Houses</h2>
            <p>22 Properties</p>
          </div>
          <div className=' rounded-lg px-8 container hover:bg-gray-900  p-4 bg-[#F7F7F7] '>
          <GiVillage className='rounded-full mt-4 p-3  text-[4rem] bg-white ' />
            <h2 className='mt-[5.5rem]'>Houses</h2>
            <p>22 Properties</p>
          </div>
        </div>
    </div>
  )
}

export default Apartment