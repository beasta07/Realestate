import React, { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { GetCategories } from "../Redux/features/categorySlice";
import { getProperties } from "../Redux/features/PropertySlice";


const Filter2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategories());
  }, []);

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  const categories = useSelector((state) => state.category.categories);
  const properties = useSelector((state) => state.property.properties);
  

  const [range, setRange] = React.useState([1000, 3000]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <div>
      <div className="container mx-auto px-8 sm:px-5 sm:w-[100%] ml-[6rem] rounded-lg py-[2rem] bg-white mt-9">
        <h2 className="font-semibold">Find your home</h2>
        <input
          type="text"
          placeholder="search"
          className="w-full mt-2 mb-5 px-3 py-4 rounded-lg  bg-gray-100 border-2 border-gray-300"
        />
        <div></div>
        <h2 className="font-semibold">Listing Status</h2>
        <form className="px-3 ">
          <label>
            <input
              type="radio"
              name="status"
              value="All"
              defaultChecked
            ></input>{" "}
            All
          </label>
          <br />
          <label>
            <input type="radio" name="status" value="Buy"></input> Buy
          </label>
          <br />
          <label>
            <input type="radio" name="status" value="Rent"></input> Rent
          </label>
          <br />
        </form>
        <h2 className="mt-4 font-semibold">Property Type</h2>
        <form className="px-3 ">
          {/* <label> */}
          {/* <input
              type="radio"
              name="status"
              value="All"
              defaultChecked
            ></input>{" "}
            All
          </label>
          <br />
          <label>
            <input type="radio" name="status" value="Houses"></input> Houses
          </label>
          <br />
          <label>
            <input type="radio" name="status" value="Apartment"></input>{" "}
            Apartment
          </label>
          <br />
          <label>
            <input type="radio" name="status" value="Office"></input> Office
          </label>
          <br />
          <label>
            <input type="radio" name="status" value="Villa"></input> Villa
          </label> */}
          <select className="py-2 w-[100%] rounded-lg px-3 bg-gray-100 border-2 border-gray-300">
            {categories?.map((cat, index) => (
              <option key={index} value={cat?.name}>
                {cat?.name}
              </option>
            ))}
          </select>
          <br />
        </form>
        <div className="mt-5" style={{}}>
          <h3> Price Range </h3>
          <Slider
            value={range}
            onChange={handleChanges}
            valueLabelDisplay="auto"
          />
          Range ( {range[0]} - {range[1]} )
        </div>
        <h2 className="mt-6 font-semibold">Location</h2>
        {/* <input type='text' placeholder='All Citie' className='w-full mt-2 mb-5 px-3 py-4 rounded-lg  bg-gray-100 border-2 border-gray-300'/> */}
        <select className="py-2 w-[100%] rounded-lg px-3 bg-gray-100 border-2 border-gray-300">
          {properties?.map((cat, index) =>(
            <option  key={index} value={cat?.location.tole}>{cat?.location.tole}</option>
          ))}

        </select>
        <button
          className="py-4 px-3 w-[50%] rounded-lg mt-5 text-white bg-orange-600"
        >
          {/* <IoSearchOutline className='pt-2'/> */}
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter2;
