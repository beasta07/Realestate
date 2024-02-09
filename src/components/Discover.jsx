// import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DiscoverComp from "./DiscoverComp";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProperties } from '../Redux/features/PropertySlice';

const Discover = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProperties());
    }, []);

    const properties = useSelector((state) => state.property.properties);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // screen width at which the settings will change
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>

            <div className="container w-[100%] mx-auto mt-[38rem] sm:mt-[8rem] px-4 sm:px-0 sm:pb-[0rem]">
                <div className="sm:flex justify-between sm:py-8 mb-6">
                    <div>
                        <h2 className="font-medium sm:text-[2rem] text-[1.3rem] pb-2 sm:pb-0 pt-8">Discover Our Featured Listings</h2>
                        <h2>Lorem ipsum dolor sit sit amet.</h2>
                    </div>
                    <div className="">
                        <Link to='/buy'>
                            <button className="flex sm:mt-[5rem] mt-9 font-medium">See All Properties <MdOutlineArrowOutward className="mt-1 ml-2" /></button>
                        </Link>
                    </div>
                </div>

                <div className="grid sm:grid-cols-3 grid-cols-1  mb-14">
                    <Slider {...settings} className="sm:w-[74rem] w-[20rem] ml-[1rem] sm:ml-[0rem]">

                        {properties.map((property, index) => (
                            <Link key={index} to={`/buyelement/${property?._id}`} >
                            <DiscoverComp property={property}/>
                        </Link>
                        ))
                        }

                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Discover