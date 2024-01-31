import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Filter2 = () => {
  return (
    <div>
        <div className="container mx-auto px-8 sm:px-5 sm:w-[40%] rounded-lg py-[2rem] bg-[#F7F7F7]">
            <h2 className='font-semibold'>Find your home</h2>
            <input type='text' placeholder='search' className='w-full mt-2 mb-5 px-3 py-4 rounded-lg  bg-gray-100 border-2 border-gray-200'/>
        <div>
        </div>
            <h2 className='font-semibold'>Listing Status</h2>
            <form className='px-3 '>
                <label><input  type="radio" name="status" value="All" defaultChecked></input> All</label><br/>
                <label><input type="radio" name="status" value="Buy" ></input> Buy</label><br/>
                <label><input type="radio" name="status" value="Rent" ></input> Rent</label>
                <br/>
            </form>
            <h2 className='mt-4 font-semibold'>Property Type</h2>
            <form className='px-3 '>
                <label><input type="radio" name="status" value="All" defaultChecked></input> All</label><br/>
                <label><input type="radio" name="status" value="Houses" ></input> Houses</label><br/>
                <label><input type="radio" name="status" value="Apartment" ></input> Apartment</label><br/>
                <label><input type="radio" name="status" value="Office" ></input> Office</label><br/>
                <label><input type="radio" name="status" value="Villa" ></input> Villa</label><br/>
            </form>
            <h2 className='mt-6 font-semibold'>Location</h2>
            {/* <input type='text' placeholder='All Citie' className='w-full mt-2 mb-5 px-3 py-4 rounded-lg  bg-gray-100 border-2 border-gray-200'/> */}
            <select className='py-2 w-[100%] rounded-lg px-3'>
                <option>All Cities</option>
                <option>California</option>
                <option>Los Angel</option>
                <option>New York</option>
                <option>New Jersey</option>
            </select>
            <button className='py-4 px-3 w-[50%] 
             rounded-lg mt-5 text-white bg-orange-600'>
            {/* <IoSearchOutline className='pt-2'/> */}
                Search
            </button>
        </div>
    </div>
  )
}

export default Filter2