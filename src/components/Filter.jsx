import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../Redux/features/CategorySlice";
import { getProperties, filterProperties, setFilterLocation } from "../Redux/features/propertySlice";

const Filter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProperties());
        dispatch(getCategories());
    }, []);

    const categories = useSelector((state) => state.category.categories);
    const [range, setRange] = useState([40000, 100000]);
    const [searchLocation, setSearchLocation] = useState(""); // State to hold the input location
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [allChecked, setAllChecked] = useState(true); // State to manage the "All" checkbox

    function handleChanges(event, newValue) {
        setRange(newValue);
    }

    function handleSearch() {
        const data = {
            priceRange: range,
            category: selectedCategories,
            populate:'category'
        };

        dispatch(filterProperties(data));
        dispatch(setFilterLocation(searchLocation));
    }

    useEffect(() => {
        const data = {
            location: {
                district: searchLocation,
            },
        };
        dispatch(filterProperties(data));
    }, [searchLocation]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (value === "All") {
            setAllChecked(checked);
            if (checked) {
                setSelectedCategories(categories.map(cat => cat._id));
            } else {
                setSelectedCategories([]);
            }
        } else {
            const newSelectedCategories = checked
                ? [...selectedCategories, value]
                : selectedCategories.filter((category) => category !== value);

            setSelectedCategories(newSelectedCategories);
            setAllChecked(false);
        }
    };

    return (
        <div className="px-3 sm:px-0">
            <div className=" mx-auto px-8 sm:px-4 sm:w-[23rem] rounded-lg py-[2rem] bg-white mt-9">
                <h2 className="font-semibold">Find by Location</h2>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)} // Update searchLocation state on input change
                    className="w-full mt-2 mb-5 px-4 py-3 rounded-lg  border-2 border-gray-300"
                />

                <h2 className="mt-4 font-semibold pb-2">Property Type</h2>
                <form className="px-3 leading-[2.3rem]">
                    <label>
                        <input
                            type="checkbox"
                            name="status"
                            value="All"
                            checked={allChecked}
                            onChange={handleCheckboxChange}
                        />
                        All
                    </label>
                    <br />
                    {categories?.map((cat, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                value={cat?._id}
                                checked={selectedCategories.includes(cat?._id)}
                                onChange={handleCheckboxChange}
                            />
                            {cat?.name}
                            <br />
                        </label>
                    ))}
                    <br />
                </form>
                <div className="mt-0">
                    <h3 className="font-semibold">Price Range</h3>
                    <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto" min={10000} max={300000} />
                    Range ( $ {range[0]} - $ {range[1]} )
                </div>

                <button
                    className="flex py-3 bg-orange-900 px-[5.8rem] sm:px-[7.4rem] mt-8 rounded-lg text-[1.1rem] text-white"
                    onClick={handleSearch} // Call handleSearch on button click
                >
                    <IoSearchOutline className="mt-1 mr-3" />
                    Search
                </button>
            </div>
        </div>
    );
};

export default Filter;