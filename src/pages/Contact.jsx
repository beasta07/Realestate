// import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import Visit from "../components/Visit";

const Contact = () => {
    return (
        <div>
            <div className="mb-[0rem]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776850155!2d85.28493301147012!3d27.70903024180952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1706503916499!5m2!1sen!2snp" width="100%" height="600" style={{ border: 0 }} allowfullscreen="" />
                <div className="container w-[100%] mx-auto">
                    <div className="sm:flex gap-[15rem] mt-14 sm:-mt-[23rem]">
                        <div className="w-[90%] mx-auto sm:mx-0 sm:w-[80%] bg-white p-8 rounded-lg border-2 border-gray-300">
                            <h2 className="text-[1.3rem] font-medium pb-6">Have questions? Get in touch!</h2>
                            <h3 className="font-medium pb-2">First Name</h3>
                            <input className="py-3 w-[100%] px-3 mb-5 border-2 rounded-lg border-gray-300" type="text" placeholder="Your Name" />
                            <h3 className="font-medium pb-2">Laste Name</h3>
                            <input className="py-3 w-[100%] px-3 mb-5 border-2 rounded-lg border-gray-300" type="text" placeholder="Your Name" />
                            <h3 className="font-medium pb-2">Email</h3>
                            <input className="py-3 w-[100%] px-3 mb-5 border-2 rounded-lg border-gray-300" type="text" placeholder="Your Email" />
                            <h3 className="font-medium pb-2">First Name</h3>
                            <textarea className="py-3 w-[100%] px-3 mb-5 border-2 rounded-lg border-gray-300" type="text" placeholder="Your Mesage here" />
                            <button className="flex py-3 bg-orange-900 rounded-lg px-14 text-white">Submit <MdOutlineArrowOutward className="mt-1 ml-2" /></button>
                        </div>
                        <div className="sm:px-0 px-5">
                            <h2 className="font-medium text-[1.3rem] mt-8 sm:text-[2rem] sm:w-[60%] sm:mt-[28rem]">We'd Love To Hear From You.</h2>
                            <p className="text-justify sm:text-left pt-3 sm:pt-0 w-[100%] text-sm">We are here to answer any question you may have. As a partner of corporates, realton has more than 9,000 offices of all sizes and all potential of session.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Visit />

            <div className="w-[100%] bg-[#F6F7F6] py-5">
                <div className="px-4 sm:px-0 container w-full mx-auto sm:flex justify-between mb-[3rem]">
                    <div>
                        <h2 className="font-semibold text-[1.3rem] sm:text-[2rem]">Need help? Talk to our expert.</h2>
                        <p className="text-sm pt-2 sm:pt-5">Talk to our experts or Browse through more properties.</p>
                    </div>
                    <div className="sm:flex mb-9">
                        <button className="mt-4 flex py-3 px-[7.5rem] sm:px-6 rounded-lg border-2 border-black hover:bg-black hover:text-white transition duration-300">Contact Us<MdOutlineArrowOutward className="mt-1 ml-2 hover:rotate-45 transition duration-300" /></button>
                        <button className="mt-4 flex py-3 px-[6.9rem] sm:px-6 rounded-lg border-2 border-black bg-black text-white sm:ml-5 hover:bg-white hover:text-black transition duration-300"><MdOutlineLocalPhone className="mt-1 mr-2" />+61 4100 111 66</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact