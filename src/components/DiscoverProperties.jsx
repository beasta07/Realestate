import { useState } from "react";

import ForRent from "./ForRent";
import ForSales from "./ForSales"; // Import ForSale component

const DiscoverProperties = () => {
  const [selectedButton, setSelectedButton] = useState("rent"); // Default selected button is 'rent'

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName === selectedButton ? "" : buttonName); // Toggle selected button
  };

  return (


    <div className="container w-full mx-auto mt-20 p-5 sm:p-0">
      <div className="sm:flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">
            Discover Popular Properties
          </h1>
          <p className="text-sm pb-4 sm:pb-2">Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleButtonClick("rent")}
            className={`border-2 rounded-lg sm:px-5 sm:py-0 px-3 py-3 my-1 text-sm  ${
              selectedButton === "rent" ? "bg-black text-white"  : "bg-white text-black"
            }`}
          >
            For Rent
          </button>
          <button
            onClick={() => handleButtonClick("sale")}
            className={`border-2 rounded-lg sm:px-5 sm:py-0 px-3 py-3 my-1 text-sm ${
              selectedButton === "sale"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            For Sale
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-4  grid-cols-1 pb-[8rem] gap-[2rem]">
        {selectedButton === 'rent' ? (
          // Render ForRent component when selectedButton is 'rent'
          [1, 1, 1, 1, 1, 1].map((_, index) => <ForRent key={index} />)
        ) : (
          // Render ForSale component when selectedButton is 'sale'
          [1, 1, 1, 1, 1, 1].map((_, index) => <ForSales key={index} />)
        )}
      </div>
    </div>
  );
};

export default DiscoverProperties;
