import React, { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Slider from "@mui/material/Slider";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../Redux/features/CategorySlice"
import { getProperties } from '../Redux/features/PropertySlice';

const Filter2 = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProperties());
    }, []);

    const properties = useSelector((state) => state.property.properties);

    // const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    const categories = useSelector((state) => state.category.categories);

    const [range, setRange] = React.useState([40000, 100000]);
    function handleChanges(event, newValue) {
        setRange(newValue);
    }
    return (
        <div className="px-3 sm:px-0">
            <div className=" mx-auto px-8 sm:px-4 sm:w-[23rem] rounded-lg py-[2rem] bg-white mt-9">
                <h2 className="font-semibold">Find your home</h2>
                <input
                    type="text"
                    placeholder="search"
                    className="w-full mt-2 mb-5 px-4 py-3 rounded-lg  border-2 border-gray-300"
                />
                <div></div>
                {/* <h2 className="font-semibold pb-2">Listing Status</h2>
                <form className="px-3 leading-[2.3rem]">
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value="All"
                            defaultChecked
                        ></input>
                        All
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="status" value="Buy"></input> Sale
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="status" value="Rent"></input> Rent
                    </label>
                    <br />
                </form> */}
                <h2 className="mt-4 font-semibold pb-2">Property Type</h2>
                <form className="px-3 leading-[2.3rem]">
                    <label>
                        <input
                            type="checkbox"
                            name="status"
                            value="All"
                            defaultChecked
                        ></input>
                        All
                    </label>
                    <br />
                    {categories?.map((cat, index) => (
                        <label>
                            <input type="checkbox" key={index} value={cat?.name} />{cat?.name}<br />
                        </label>
                    ))}


                    <br />
                </form>
                <div className="mt-5" style={{}}>
                    <h3> Price Range </h3>
                    <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto" min={10000} max={300000} />
                    Range ( $ {range[0]} - $ {range[1]} )
                </div>
                <h2 className="mt-6 font-semibold pb-4">Location</h2>
     
                <select className="py-4 w-[100%] rounded-lg px-3 decoration-none border-2 border-gray-300">

                    {properties?.map((cat, index) => (
                        <option key={index} value={cat?.location.tole}>{cat?.location.tole}</option>
                    ))}
                </select>
                <button className="flex py-3 bg-orange-600 px-[5.8rem] sm:px-[7.4rem] mt-8 rounded-lg text-[1.1rem] text-white"><IoSearchOutline className="mt-1 mr-3" />Search</button>

            </div>
        </div>
    );
};

export default Filter2;