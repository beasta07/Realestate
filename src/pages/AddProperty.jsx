// import React from 'react'
import { FaFileUpload } from "react-icons/fa";

const AddProperty = () => {
  return (
    <div>
        <div className="container w-[100%] px-4 sm:px-0 mx-auto">
            <h2 className="font-semibold text-[1.8rem] pt-[4rem]">Add New Property</h2>
            <p className="text-sm pb-[3rem]">We are glad to see you again!</p>
            <div className="p-10 border-2 border-gray-300 shadow rounded-lg">
                <h3 className="font-medium text-[1.1rem] pb-7">Property Discription</h3>
                <h2 className="font-medium pb-2">Title</h2>
                <input type="text" placeholder="Your Name" className="py-3 px-3 w-[100%] rounded-lg border-2 border-gray-300 mb-5"/>
                <h2 className="font-medium pb-2">Discription</h2>
                <textarea type="text" placeholder="Your Name" className="py-3 px-3 w-[100%] rounded-lg border-2 border-gray-300 mb-6"/>
                <div className="sm:flex leading-[2.5rem] sm:leading-[0rem] sm:gap-[2rem] justify-around mb-7">
                    <div>
                        <h2 className="sm:mb-5">Select Category</h2>
                        <select className="py-3 px-4 w-full sm:w-[22rem] rounded-lg border-2 border-gray-300 mb-5 sm:mb-0">
                            <option value="">Home</option>
                            <option value="">Office</option>
                            <option value="">Loft</option>
                            <option value="">Bungalow</option>
                        </select>
                    </div>
                    <div>
                        <h2 className="sm:mb-5">Listed In</h2>
                        <select className="py-3 px-4 w-full sm:w-[22rem] rounded-lg border-2 border-gray-300 mb-5 sm:mb-0">
                            <option value="">Home</option>
                            <option value="">Office</option>
                            <option value="">Loft</option>
                            <option value="">Bungalow</option>
                        </select>
                    </div>
                    <div>
                        <h2 className="sm:mb-5">Property Status</h2>
                        <select className="py-3 px-4 w-full sm:w-[22rem] rounded-lg border-2 border-gray-300 mb-5 sm:mb-0">
                            <option value="">Home</option>
                            <option value="">Office</option>
                            <option value="">Loft</option>
                            <option value="">Bungalow</option>
                        </select>
                    </div>
                </div>

                <div className="sm:flex justify-center gap-[2rem]">
                    <div>
                        <h2 className="pb-2">Price in $</h2>
                        <input type="text" placeholder="Your Name" className="p-3 mb-5 sm:mb-0 w-[17.3rem] sm:w-[22rem] rounded-lg border-2 border-gray-300" />
                    </div>
                    <div>
                        <h2 className="pb-2">Yearly Tax Rate</h2>
                        <input type="text" placeholder="Your Name" className="p-3 mb-5 sm:mb-0 w-[17.3rem] sm:w-[22rem] rounded-lg border-2 border-gray-300" />
                    </div>
                    <div>
                        <h2 className="pb-2">After Price Label</h2>
                        <input type="text" placeholder="Your Name" className="p-3 mb-5 sm:mb-0 w-[17.3rem] sm:w-[22rem] rounded-lg border-2 border-gray-300" />
                    </div>
                </div>

                <div>
                    <h2 className="mt-7 font-medium mb-[1.7rem] sm:mb-3">Upload photos of your property</h2>
                    <div className="outline-dashed outline-red-300 rounded-lg p-5 text-center">
                        <i><FaFileUpload className="text-[8rem] text-gray-400 mx-auto my-8"/></i>
                        <h2 className="font-semibold mb-4">Upload/Drag photos of your property</h2>
                        <p className="text-sm mb-7">Photos must be JPEG or PNG format and at least 2048x768</p>
                        <input type="file" name="Browse File" placeholder="Browse File" className="py-3 px-5 w-full sm:w-[26%] border-2 border-black rounded-lg my-4" />
                    </div>
                </div>


            </div>
                <div className="flex justify-end gap-5 py-7 text-white">
                    <button className="py-3 px-10 border-gray-600 border-2 text-black rounded-lg">Clear</button>
                    <button className="py-3 px-10 bg-orange-600 rounded-lg">Save</button>
                </div>
        </div>
    </div>
  )
}

export default AddProperty