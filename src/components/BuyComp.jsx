// import React from 'react'
import { CiHeart } from "react-icons/ci";

const BuyComp = () => {
    return (
        <>
            <div className="rounded-lg w-[23.2rem] bg-white shadow">
                <img src="/images/buy1.jpg" className="rounded-lg h-[13rem] w-[100%]" />
                <h2 className="px-5 font-medium pt-5 pb-1">Luxuary villa in Rego Park</h2>
                <p className="px-5 text-sm">Los Angeles City, CA, USA</p> <hr className="px-5 my-3" />
                <div className="flex px-5 justify-between pb-4">
                    <p className="text-sm">For Rent</p>
                    <i><CiHeart className="mt-1 mr-4" /></i>
                </div>
            </div>
        </>
    )
}

export default BuyComp