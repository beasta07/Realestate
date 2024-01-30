import { useState } from 'react'

// import Bestdealcomp from "../components/Bestdealcomp";
import ForRent from '../components/ForRent';
import ForSale from '../components/ForSale';

const Bestdeal = () => {
    const [selectedButton, setSelectedButton] = useState("sale");

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName === selectedButton ? "" : buttonName); // Toggle selected button
    };

    return (
        <div className="bg-white">
            <div className="container w-[100%] mx-auto pt-[5.5rem] px-4 sm:px-0">
                <div className="sm:flex justify-between ">
                    <div className="">
                        <h2 className="text-[1.4rem] sm:text-[2rem] font-semibold">Discover Our Best Deals</h2>
                        <p className="text-sm font-medium">Aliquam lacinia diam quis lacus euismod</p>
                    </div>
                    <div className="mt-8 sm:mt-5">
                        <button onClick={() => handleButtonClick("rent")} className={`py-2 px-4   border-2 border-orange-600 rounded-lg mr-3 sm:mr-4 ${selectedButton === "rent" ? "bg-orange-600 text-white" : "bg-white border-gray-800 border-2  text-black"}`}>For Rent</button>
                        <button onClick={() => handleButtonClick("sale")} className={`py-2 px-4 border-2 border-orange-600 bg-orange-600 rounded-lg ${selectedButton === "sale" ? "bg-orange-600 text-white" : "bg-white  border-2 border-gray-800 text-black"}`}>For Sale</button>
                    </div>
                </div>

                <div className="hidden sm:grid grid-cols-4 gap-5">
                    {selectedButton === 'rent' ? (
                        // Render ForRent component when selectedButton is 'rent'
                        [1, 1, 1, 1].map((_, index) => <ForRent key={index} />)
                    ) : (
                        // Render ForSale component when selectedButton is 'sale'
                        [1, 1, 1, 1].map((_, index) => <ForSale key={index} />)
                    )}
                </div>

                <div className="sm:hidden grid grid-cols-1 gap-5">
                {selectedButton === 'rent' ? (
                        // Render ForRent component when selectedButton is 'rent'
                        [1].map((_, index) => <ForRent key={index} />)
                    ) : (
                        // Render ForSale component when selectedButton is 'sale'
                        [1].map((_, index) => <ForSale key={index} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Bestdeal