import React from "react";
import { VscAccount } from "react-icons/vsc";

const Login = () => {
  return (
    <div className="pb-9">
      <h2 className="text-center mt-9 font-semibold text-[1.4rem] text-indigo-400">
        Welcome To Registration Page
      </h2>
      <div className=" mt-5  justify-center gap-5 flex  w-full ">
        <img className="rounded-l-2xl mt-6 h-[20rem]" src="/image/p1.jpg" />

        <div className="mt-5 gap-4 grid grid-cols-2">
          <div>
            <h3 className=" font-semibold text-gray-600">First Name</h3>
            <input
              type="text"
              placeholder="Enter Name "
              className=" -full  mt-2 mb-2 px-3 py-4 rounded-lg  bg-gray-100  border-gray-200"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">Last Name</h3>
            <input
              type="text"
              placeholder="Enter Lastname "
              className=" -full mt-2  px-3 py-4 rounded-lg  bg-gray-100  border-gray-200"
            />
          </div>
          <div className="col-span-2 w-[100%]">
            <h3 className="font-semibold text-gray-600">Username</h3>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full mt-2 mb-2 px-3 py-4 rounded-lg  bg-gray-100  border-gray-200"
            />
          </div>
          <div className="col-span-2 w-[100%]">
            <h3 className="font-semibold text-gray-600">Phone Number</h3>
            <input
              type="number"
              placeholder="Enter Number "
              className="w-full mt-2 mb-2 px-3 py-4 rounded-lg  bg-gray-100  border-gray-200"
            />
          </div>
          <div className="col-span-2 w-[100%]">
            <h3 className="font-semibold text-gray-600">Email</h3>
            <input
              type="text"
              placeholder="Enter Email "
              className="w-full mt-2 mb-2 px-3 py-4 rounded-lg  bg-gray-100  border-gray-200"
            />
          </div>
          <div className="col-span-2 w-[100%]">
            <h3 className="font-semibold text-gray-600">Address</h3>
            <input
              type="text"
              placeholder="Enter Address"
              className="w-full mt-2 mb-2 px-3 py-4 rounded-lg  bg-gray-100  border-gray-200"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">Password</h3>
            <input
              type="Password"
              placeholder="Enter Password "
              className="w-full mt-2 mb-2 px-3 py-4 rounded-lg  bg-gray-100  border-gray-200"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">Conform Password</h3>
            <input
              type="text"
              placeholder="Conform your Password "
              className="w-full mt-2  px-3 py-4 rounded-lg  bg-gray-100  border-gray-200"
            />
          </div>
          <div className="col-span-2 w-[100%]">
            <button className="bg-sky-500 hover:bg-sky-700 transition duration-300 text-white text-[1.2rem] font-semibold w-full py-4 rounded-xl">
              <div className="flex justify-center gap-2">
                <VscAccount className="mt-[0.4rem] " />
                <h2>Register Account</h2>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
