import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="hidden sm:flex w-[100%] py-4 justify-center mx-auto container bg-transparent  gap-[8rem]">
        <div className="font-bold text-[2rem]">
          <h2>homez</h2>
        </div>
        <div>
          <ul className="flex mt-3 gap-[1.5rem] font-medium">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>About</li>
            </Link>
            <Link to="/buy2/filter2">
              <li>Buy</li>
            </Link>
            <Link to="/sale2">
              <li>Sell</li>
            </Link>
            <Link to="/blogs2">
              <li>Blogs</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-1  font-medium text-[1rem] mt-0">
          <FaRegUserCircle className="mt-4" />
          <h3 className="mt-3">Login / Register</h3>
          <button className="px-7 font-semibold py-2  ml-[2rem] hover:bg-red-600 flex  rounded-full border-2">
            Add Property
            <MdArrowOutward className="mt-1 ml-2 text-[1.5rem]" />
          </button>
        </div>
      </div>
      <div className="sm:hidden flex justify-between font-medium text-[2rem] bg-white">
        <div className="px-3 py-3">
          <GrMenu />
        </div>
        <div>
          <h2>homez</h2>
        </div>
        <div className="px-3 py-3">
          <FaRegUserCircle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
