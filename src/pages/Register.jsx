// import React from "react";
import { VscAccount } from "react-icons/vsc";

const Register = () => {
    return (
        <div className="pb-9 containter sm:w-[50%] mx-auto">
            <h2 className=" text-center mt-9 font-semibold text-[1.4rem] text-orange-900">
                Welcome To Registration Page
            </h2>
            <div className=" mx-auto  mt-5  justify-center gap-5 flex p-4 shadow-md rounded-lg">
                {/* <img className="rounded-l-2xl mt-6 h-[20rem]" src="/image/p1.jpg" /> */}

                <div className="mt-5 gap-4 grid grid-cols-2">
                    <div>
                        <h3 className=" font-semibold text-gray-600">First Name</h3>
                        <input
                            type="text"
                            placeholder="Enter Name "
                            className=" w-full  mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100  border-gray-300"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Last Name</h3>
                        <input
                            type="text"
                            placeholder="Enter Lastname "
                            className=" w-full mt-2  px-3 py-4 rounded-lg border-2 bg-gray-100  border-gray-300"
                        />
                    </div>
                    <div className="col-span-2 w-[100%]">
                        <h3 className="font-semibold text-gray-600">Username</h3>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100  border-gray-300"
                        />
                    </div>
                    <div className="col-span-2 w-[100%]">
                        <h3 className="font-semibold text-gray-600">Phone Number</h3>
                        <input
                            type="number"
                            placeholder="Enter Number "
                            className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100  border-gray-300"
                        />
                    </div>
                    <div className="col-span-2 w-[100%]">
                        <h3 className="font-semibold text-gray-600">Email</h3>
                        <input
                            type="text"
                            placeholder="Enter Email "
                            className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100  border-gray-300"
                        />
                    </div>
                    <div className="col-span-2 w-[100%]">
                        <h3 className="font-semibold text-gray-600">Address</h3>
                        <input
                            type="text"
                            placeholder="Enter Address"
                            className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100  border-gray-300"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Password</h3>
                        <input
                            type="Password"
                            placeholder="Enter Password "
                            className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100  border-gray-300"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Conform Password</h3>
                        <input
                            type="text"
                            placeholder="Conform your Password "
                            className="w-full mt-2  px-3 py-4 rounded-lg border-2 bg-gray-100  border-gray-300"
                        />
                    </div>
                    <div className="col-span-2 w-[100%] py-6">
                        <button className="transition duration-300 text-white text-[1.2rem] font-semibold py-4 rounded-xl bg-orange-900 w-full">
                            <h2 className="flex sm:mx-[15rem]"> <VscAccount className="mt-1 sm:mr-2 sm:ml-0 ml-24" /> Register Account</h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;