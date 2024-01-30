// import React from 'react'
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#181B21] w-[100%]">
            {/* <div className="container w-[100%] mx-auto text-center text-white">
                <h2 className="pt-[4rem] text-[1.3rem] sm:text-[2rem] font-semibold pb-3">Subscribe Our Newsletter</h2>
                <p>We don’t send spam so don’t worry.</p>
                <div className="py-2 px-3 mt-9  bg-white sm:w-[50%] mx-4 sm:mx-auto rounded-lg flex justify-between">
                    <input type="text" placeholder="Your Email" className="px-5 w-[75%] text-black" />
                    <button className="py-3 px-7 bg-orange-600 rounded-lg">Subscribe</button>
                </div>
            </div> */}

            <div className="container w-[100%] mx-auto sm:flex justify-between px-5 pt-16 sm:px-4 mt-[4rem] text-white">
                <div className="pb-12 sm:pb-0"> 
                    <h2 className="font-semibold text-[1.5rem] pb-8 text-orange-600">MyRAJ</h2>
                    <h4 className="text-sm text-[#bebdbd]">Address</h4>
                    <p className="font-medium pb-8">329 Queensberry Street, North<br /> Melbourne VIC 3051, Australia.</p>
                    <h4 className="text-sm text-[#bebdbd]">Total Free Customer Care</h4>
                    <p className="font-medium pb-8">+(0) 123 050 945 02</p>
                    <h4 className="text-sm text-[#bebdbd]">Need Live Support?</h4>
                    <p className="font-medium">hi@MyRAJ.com</p>
                </div>
                <div className="pb-12 sm:pb-0">
                    <h2 className="font-medium text-[1.1rem] pb-8">Popular Search</h2>
                    <ul className="leading-10 text-sm text-[#bebdbd]">
                        <li>Apartment for Rent</li>
                        <li>Apartment Low to Hide</li>
                        <li>Offices for Buy</li>
                        <li>Offices for Rent</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-medium text-[1.1rem] pb-8">Quick Links</h2>
                    <ul className="leading-10 text-sm text-[#bebdbd]">
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Pricing Plans</li>
                        <li>Our Services</li>
                        <li>Contact Support</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
                {/* <hr className="container w-[100%] mx-auto mt-3 dark:bg-gray-800"/> */}
                <hr className="h-px bg-gray-200 border-0 sm:w-[77%] mx-auto dark:bg-gray-700 mt-10" />

            <div className="container w-[100%] mx-auto sm:flex text-white justify-between px-5 sm:px-4 py-8">
                <div>
                    <h2 className="text-sm pb-4 sm:pb-0 text-[#bebdbd]">© Homez 2024 ib-themes - All rights reserved</h2>
                </div>
                <div className="flex gap-5 justify-center">
                    <button className="font-medium">Follow Us</button>
                    <button className="text-[#bebdbd]"><FaFacebookF /></button>
                    <button className="text-[#bebdbd]"><FaXTwitter /></button>
                    <button className="text-[#bebdbd]"><FaInstagram /></button>
                </div>
            </div>

        </div>
    )
}

export default Footer