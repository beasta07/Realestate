import { useState } from 'react';
import { CiClock1 } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCopy } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineGarage } from "react-icons/md";
import { RiPinDistanceFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
// import DiscoverProperties from '../components/DiscoverProperties';

const BuyElement = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="container w-[100%] mx-auto mt-[4rem] leading-[3rem]">
        <div className="sm:flex justify-between sm:px-0 px-1">
          <div>
            <h1 className="text-[2rem] font-semibold">Equestrian Family Home</h1>
            <p>New York City, CA, USA</p>
            <div className="flex ">
              <div className="rounded-full bg-[#EB6753] w-[1rem] h-[1rem] mt-4 mr-2"></div>
              <div className="text-[#EB6753] mr-4 divide-y">For sale</div>
              <div className="mt-4 mr-2"><CiClock1 /></div>
              <div className="text-[black] mr-4">6 years old</div>
              <div className="mt-4 mr-2"><CiShare1 /></div>
              <div className="text-[black] mr-4">8721</div>
            </div>
          </div>
          <div>
            <div className="flex leading-[3rem]">
              <div className="border-2 bg-transparent p-2 mr-2 rounded-md hover:border-black h-9"><CiHeart /></div>
              <div className="border-2 bg-transparent p-2 mr-2 rounded-md hover:border-black h-9"><BsCopy /></div>
              <div className="border-2 bg-transparent p-2 mr-2 rounded-md hover:border-black h-9"><CiShare2 /></div>
              <div className="border-2 bg-transparent p-2 rounded-md hover:border-black h-9"><IoPrintOutline /></div>
            </div>
            <p className="font-semibold text-[1.5rem] sm:text-right mt-3">$14,000</p>
            <p className="sm:text-right">$11.67/sq ft</p>
          </div>
        </div>
        <div className="sm:grid grid-rows-2 grid-flow-col gap-4 mt-[4rem] mb-[4rem] sm:mb-0">
          <div className="row-span-3 ..."><img src="images/buy-element1.jpg" className="rounded-l-xl hover:scale-105 transition-transform duration-300" /></div>
          <div className="col-span-2 ..."><img src="images/buy-element2.jpg" className="hidden sm:block rounded-r-xl hover:scale-105 transition-transform duration-300" /></div>
          <div className=" col-span-2 ..."><img src="images/buy-element3.jpg" className="hidden sm:block rounded-r-xl hover:scale-105 transition-transform duration-300" /></div>
        </div>
        <div className="sm:flex justify-between sm:px-[2rem] px-1 ">
          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><FaBed className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">Bedroom </p>
              <p className="mr-100">1</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><FaShower className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">Bath </p>
              <p className="mr-100">2</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><SlCalender className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">Built </p>
              <p className="mr-100">2008</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><MdOutlineGarage className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">Garage </p>
              <p className="mr-100">2</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><RiPinDistanceFill className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">SqFeet </p>
              <p className="mr-100">1200</p>
            </div>
          </div>
        </div>
        </div>
        <div className="bg-[#F7F7F7] mt-[4rem]">
          <div className='container w-[100%] mx-auto pb-16'>
          <div className="sm:flex p-5">
            <div className="sm:w-[70%]  sm:px-0 rounded-xl shadow-md bg-white mt-[4rem] sm:h-[35rem]">
              <h1 className=' font-semibold p-5 '>Property Description</h1>
              <p className='mx-5 text-[0.85rem] text-justify leading-[1.5rem]'>
                This 3-bed with a loft, 2-bath home in the gated community of The Hideout has it all. From the open floor plan to the abundance of light from the windows, this home is perfect for entertaining. The living room and dining room have vaulted ceilings and a beautiful fireplace. You will love spending time on the deck taking in the beautiful views. In the kitchen, you will ll find stainless steel appliances and a tile backsplash, as well as a breakfast bar.
              </p>
              {showMore && (
                <p className='mx-5 text-[0.85rem] text-justify leading-[1.5rem]'>
                  Placeholder content for this accordion, which is intended to demonstrate the class. This is the first items accordion body you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.
                </p>
              )}
              <button onClick={toggleShowMore} className="text-black font-semibold hover:underline focus:outline-none text-[1rem] mx-5">
                {showMore ? 'Show Less' : 'Show More'}
              </button>

              <div className='p-5 pb-3'>
                <h1 className='font-semibold text-[1.25rem] my-[2rem]'>Property Details</h1>
                <div className='sm:flex gap-[4rem]'>
                  <div>
                <div className='flex gap-[2rem]  pb-3'>
                  <h1 className='font-semibold mr-24'>Property ID</h1>
                  <p>RT48</p>
                </div>
                <div className='flex gap-[2rem]  pb-3 '>
                  <h1 className='font-semibold mr-[9rem]'>Price</h1>
                  <p>$252,000</p>
                </div>
                <div className='sm:flex gap-[2rem] pb-3 hidden '>
                  <h1 className='font-semibold mr-[5rem]'>Property Size</h1>
                  <p>1500 Sq </p>
                </div>
                <div className='flex gap-[2rem] pb-3'>
                  <h1 className='font-semibold mr-[6rem]'>Bathrooms</h1>
                  <p>3</p>
                </div>
                <div className='flex gap-[2rem] pb-3'>
                  <h1 className='font-semibold mr-[6.3rem]'>Bedrooms</h1>
                  <p>4</p>
                </div>
                </div>
                <div>
                <div className='flex gap-[2rem]  pb-3'>
                  <h1 className='font-semibold mr-[8rem]'>Garage</h1>
                  <p>2</p>
                </div>
                <div className='flex gap-[2rem]  pb-3 '>
                  <h1 className='font-semibold mr-[5.8rem]'>Garage Size</h1>
                  <p>200 SqFt</p>
                </div>
                <div className='flex gap-[2rem] pb-3'>
                  <h1 className='font-semibold mr-[6.9rem]'>Year Built</h1>
                  <p>2022</p>
                </div>
                <div className='flex gap-[2rem] pb-3'>
                  <h1 className='font-semibold mr-[4.7rem]'>Property Type</h1>
                  <p>Apartment</p>
                </div>
                <div className='flex gap-[2rem] pb-3'>
                  <h1 className='font-semibold mr-[4rem]'>Property Status</h1>
                  <p>For Sale</p>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] rounded-xl shadow-md bg-white mt-[4rem] ml-[2rem] sm:block hidden">
            <div className="flex mt-5 pl-7">
                <img src="images/reviewImage.jpg" className='w-[5rem]' />
                <div className="ml-4">
                    <h1 className="font-semibold text-[0.85rem] mb-2">Leslie Alexander</h1>
                    <p className="text-[0.85rem]">Nintendo</p>
                    <div className='flex'>
                    <FiPhoneCall  className='mt-2 mr-2'/>
                   <p className='mt-1'>(920) 012-3421</p> 
                    </div>
                    
                </div>
              </div>

              <div className='pl-5 h-[25rem]'>

        <input type='text' placeholder="Enter you Name" className="block   border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 pb-2" id="grid-state" />
        
        <input type='email' placeholder="Abc@gmail.com" className="block   border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 pb-2" id="grid-state" />
        <input type='number'min="0 " placeholder="Enter your Number" className="block   border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 pb-2" id="grid-state" />


        <textarea type='text' placeholder="Any Questions" className="block   border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 pb-2" id="grid-state" />
        <input type="checkbox" className='mr-2' />
  <label className='text-[0.85rem]'> i agree to Terms and conditions on this.</label>
  <button className="text-[white] rounded-md bg-[#EB6753] w-[12rem] p-3 font-semibold hidden sm:block mb-[5.6rem] mt-4 mx-auto">Register Now</button>

          </div>

</div>
          </div>
        
          <div className="sm:w-[66%] rounded-xl px-1 sm:px-0 shadow-md bg-white mt-[rem] ml-5 ">
             

              <div className='p-5 pb-3 '>
                <h1 className='font-semibold text-[1.25rem] my-[2rem]'>Address</h1>
                <div className='sm:flex gap-[4rem]'>
                  <div>
                <div className='flex gap-[2rem]  pb-3'>
                  <h1 className='font-semibold mr-24'>Address</h1>
                  <p>10425 Tabor St</p>
                </div>
                <div className='hidden  sm:flex gap-[2rem]  pb-3 '>
                  <h1 className='font-semibold mr-[9rem]'>City</h1>
                  <p>Los Angeles</p>
                </div>
                <div className='hidden  sm:flex gap-[2rem] pb-3'>
                  <h1 className='font-semibold mr-[5rem]'>State/county</h1>
                  <p>California</p>
                </div>
                
                </div>
                <div>
                <div className='flex gap-[2rem]  pb-3'>
                  <h1 className='font-semibold mr-24'>Address</h1>
                  <p>10 Downing Street</p>
                </div>
                <div className='flex gap-[2rem]  pb-3 '>
                  <h1 className='font-semibold mr-[8.2rem]'>City</h1>
                  <p>London</p>
                </div>
                <div className='flex gap-[2rem] pb-3'>
                  <h1 className='font-semibold mr-[3.5rem]'>State/county</h1>
                  <p>Greater London</p>
                </div>
                
                </div>
                </div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14134.395666697252!2d85.32008!3d27.6678783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c82b81d77d%3A0x879326313b815595!2sApp%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1706590703142!5m2!1sen!2snp" width="100%" height="300" style={{border:0, }} allowfullscreen="" loading="lazy" className=' p-4 rounded-lg pb-5  sm:w-[100%]  ' ></iframe>
            </div>
            
            </div>

        </div>
        {/* <DiscoverProperties /> */}
        
     
    </>
  );
};

export default BuyElement;