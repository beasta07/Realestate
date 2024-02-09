// import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div className="hidden absolute container w-[100%] mx-auto sm:flex  justify-between py-5 text-white font-medium">
            <div className="pt-4">
                <h2>MyRAJ</h2>
            </div>
            <div className="pt-4">
                <ul className="flex gap-12">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/buy'><li>Buy</li></Link>
                    <Link to='/sell'><li>Sell</li></Link>
                    <Link to='/blog'><li>Blog</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            <div className="flex">
                <button className="pr-2"><FaRegUserCircle /></button>
                <button>Login/Register</button>
                <button className="flex py-3 px-5 bg-white rounded-xl text-black ml-8 hover:bg-orange-900 hover:text-white transition duration-300">Add Property<MdOutlineArrowOutward className="ml-2 mt-1"/></button>
            </div>
        </div>  <hr className="h-px border-0 sm:w-[100%] mx-auto dark:bg-gray-800" />

        <div className="sm:hidden relative z-40 flex justify-between px-5 bg-white text-black py-5 ">
            <div>
                <button className="text-[1.4rem]"><CgMenuRightAlt /></button>
            </div>
            <div>
                <h2>MyRAJ</h2>
            </div>
            <div>
                <button className="text-[1.4rem] "><FaRegUserCircle /></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar