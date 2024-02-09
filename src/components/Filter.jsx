import { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../Redux/features/CategorySlice"
import { getProperties } from "../Redux/features/PropertySlice"

const Filter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProperties());
    dispatch(getCategories());
  }, []);

  const properties = useSelector((state) => state.property.properties);
  const categories = useSelector((state) => state.category.categories);

  const [selectedButton, setSelectedButton] = useState('Buy');
  const [searchPlaceholder, setSearchPlaceholder] = useState('Enter Keyword for Buy');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    switch (buttonName) {
      case 'Buy':
        setSearchPlaceholder('Enter Keyword for Buy');
        break;
      case 'Rent':
        setSearchPlaceholder('Enter Keyword for Rent');
        break;
      case 'Sold':
        setSearchPlaceholder('Enter Keyword for Sold');
        break;
      default:
        setSearchPlaceholder('Enter Keyword');
    }
  };

  return (
    <div>
      <div className="absolute sm:relative container w-[100%] mx-auto sm:mt-[12rem] mt-[3rem] px-4 sm:px-0">
        <div className="flex text-black bg-white gap-9 px-6 py-5 rounded-t-xl w-[62%] sm:w-[19%]">
          <button
            onClick={() => handleButtonClick('Buy')}
            className={`font-medium ${selectedButton === 'Buy' ? 'border-b-2 border-black py-2' : 'border-none'
              }`}
          >
            Buy
          </button>
          <button
            onClick={() => handleButtonClick('Rent')}
            className={`font-medium ${selectedButton === 'Rent' ? 'border-b-2 border-black py-2 transition' : 'border-none'
              }`}
          >
            Rent
          </button>
          <button
            onClick={() => handleButtonClick('Sold')}
            className={`font-medium ${selectedButton === 'Sold' ? 'border-b-2 border-black py-2 transition' : 'border-none'
              }`}
          >
            Sold
          </button>
        </div>
        <hr className="w-[62%] sm:w-[19%]" />

        <div className="bg-white grid sm:grid-cols-4 sm:divide-y-0 divide-y sm:divide-x gap-[1rem] sm:gap-[5rem] rounded-r-lg rounded-bl-lg shadow py-4 text-black">
          <div>
            <h2 className="font-medium px-4 py-2">Search</h2>
            <input
              className="px-4 py-2 mx-3"
              type="search"
              placeholder={searchPlaceholder}
            />
          </div>
          <div>
            <h2 className="font-medium px-4 py-2">Looking For</h2>
            <div className='px-4'> <select className="block w-full  border border-white text-gray-700 py-2 px-1 rounded leading-tight focus:outline-none">

              {categories?.map((cat, index) => (
                <option key={index} value={cat?.name}>{cat?.name}</option>
              ))}

            </select></div>
          </div>
          <div>
            <h2 className="font-medium px-4 py-2">Location</h2>
            <div className="px-0">
              <select className="block w-full border border-white text-gray-700 py-2 px-1 sm:mx-4 rounded leading-tight focus:outline-none " id="grid-state">

                {properties?.map((cat, index) => (
                  <option key={index} value={cat?.location.tole}>{cat?.location.tole}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-[5rem] pt-4 sm:pt-0">
            <button className="py-4 sm:py-0 my-0 sm:my-4 px-4 ml-5 sm:ml-16 bg-orange-900 rounded-lg text-white text-[1.5rem] mt-3"><IoSearchOutline /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter