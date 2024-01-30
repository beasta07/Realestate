// import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Discover = () => {
    return (
        <div>
            <div className="container w-[100%] mx-auto mt-[38rem] sm:mt-[8rem] px-4 sm:px-0 sm:pb-[0rem]">
                <div className="sm:flex justify-between sm:py-8 mb-6">
                    <div>
                        <h2 className="font-medium sm:text-[2rem] text-[1.3rem] pb-2 sm:pb-0 pt-8">Discover Our Featured Listings</h2>
                        <h2>Lorem ipsum dolor sit sit amet.</h2>
                    </div>
                    <div className="">
                        <button className="flex sm:mt-[5rem] mt-9 font-medium">See All Properties <MdOutlineArrowOutward className="mt-1 ml-2" /></button>
                    </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-12 mb-14">
                    <div className="rounded-lg shadow inline-block overflow-hidden">
                        <Link to='/buyelement'>
                        <img src="/images/discover1.jpg" className="rounded-t-lg hover:scale-105 transition duration-500 cursor-pointer object-cover" />
                        <h2 className="font-medium text-md p-3">Luxury villa in Rego Park</h2>
                        <p className="text-orange-600 font-medium px-3 pb-3">$82,000 / mo</p>
                        </Link>
                    </div>
                    <div className="rounded-lg shadow inline-block overflow-hidden">
                        <Link to='/buyelement'>
                        <img src="/images/discover1.jpg" className="rounded-t-lg hover:scale-105 transition duration-500 cursor-pointer object-cover" />
                        <h2 className="font-medium text-md p-3">Luxury villa in Rego Park</h2>
                        <p className="text-orange-600 font-medium px-3 pb-3">$82,000 / mo</p>
                        </Link>
                    </div>
                    <div className="rounded-lg shadow inline-block overflow-hidden">
                        <Link to='/buyelement'>
                        <img src="/images/discover1.jpg" className="rounded-t-lg hover:scale-105 transition duration-500 cursor-pointer object-cover" />
                        <h2 className="font-medium text-md p-3">Luxury villa in Rego Park</h2>
                        <p className="text-orange-600 font-medium px-3 pb-3">$82,000 / mo</p>
                        </Link>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Discover