import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Slider from "@mui/material/Slider";
const Filter2 = () => {
    const [range, setRange] = React.useState([40000, 100000]);
    function handleChanges(event, newValue) {
        setRange(newValue);
    }
    return (
        <div className="px-3 sm:px-0">
            <div className=" mx-auto px-8 sm:px-5 sm:w-[23rem] rounded-lg py-[2rem] bg-white mt-9">
                <h2 className="font-semibold">Find your home</h2>
                <input
                    type="text"
                    placeholder="search"
                    className="w-full mt-2 mb-5 px-3 py-4 rounded-lg  border-2 border-gray-300"
                />
                <div></div>
                <h2 className="font-semibold pb-2">Listing Status</h2>
                <form className="px-3 leading-[2.3rem]">
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
                <h2 className="mt-4 font-semibold pb-2">Property Type</h2>
                <form className="px-3 leading-[2.3rem]">
                    <label>
                        <input
                            type="checkbox"
                            name="status"
                            value="All"
                            defaultChecked
                        ></input>{" "}
                        All
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="status" value="Houses"></input> Houses
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="status" value="Apartment"></input>{" "}
                        Apartment
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="status" value="Office"></input> Office
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="status" value="Villa"></input> Villa
                    </label>
                    <br />
                </form>
                <div className="mt-5" style={{}}>
                    <h3> Price Range </h3>
                    <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto"  min={10000} max={300000}  />
                    Range ( $ {range[0].toLocaleString()} - $ {range[1].toLocaleString()} )
                </div>
                <h2 className="mt-6 font-semibold pb-4">Location</h2>
                {/* <input type='text' placeholder='All Citie' className='w-full mt-2 mb-5 px-3 py-4 rounded-lg  bg-gray-100 border-2 border-gray-300'/> */}
                <select className="py-4 w-[100%] rounded-lg px-3 decoration-none border-2 border-gray-300">
                    <option>All Cities</option>
                    <option>California</option>
                    <option>Los Angel</option>
                    <option>New York</option>
                    <option>New Jersey</option>
                </select>
                <button className="flex py-3 bg-orange-600 px-[5.8rem] sm:px-[7.4rem] mt-8 rounded-lg text-[1.1rem] text-white"><IoSearchOutline className="mt-1 mr-3" />Search</button>

            </div>
        </div>
    );
};

export default Filter2;