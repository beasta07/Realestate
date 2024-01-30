// import React from 'react'
import { CiHeart } from "react-icons/ci";

const ForRent = () => {
    return (
        <div>
            <div className="shadow-md rounded-xl my-[2rem] sm:my-[5rem] mb-[6rem] ">
                <img src="/images/BestdealImg.jpg" className="rounded-t-xl" />
                <h2 className="font-medium mt-4 px-3">Luxury villa in Rego Park</h2>
                <p className="text-sm text-gray-500 py-2 px-3">Los Angeles Ciy, USA</p>
                <hr />
                <div className="flex justify-between px-3 py-2">
                    <div><p>For Rent</p></div>
                    <div><button><CiHeart className="mt-1" /></button></div>
                </div>
            </div>
        </div>
    )
}

export default ForRent