// import React from 'react'

const ApartmentType = () => {
    return (
        <div className="bg-white pb-[1px] sm:pb-[1rem]">
            <div className="container w-[100%] mx-auto pt-[4rem] sm:pt-[5rem] my-[7rem] text-center">
                <h2 className="font-medium sm:text-[2rem] text-[1.3rem]">Explore Apartment Types</h2>
                <p className="pb-14">Get some Inspirations from 1800+ skills</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-7 px-3 sm:px-0 gap-x-5 sm:gap-x-0">
                    <div className="col-span-2 overflow-hidden rounded-lg relative">
                        <div className="absolute p-7 leading-8 z-10">
                            <h2 className=" text-white font-semibold">Los Angeles</h2>
                            <p className="text-white text-sm">12 Properties</p>
                        </div>
                        <img src="/images/AppartmentType/Appartment1.png" className='hover:scale-105 transition duration-500 cursor-pointer object-cover' />
                    </div>
                    <div className="overflow-hidden rounded-lg relative">
                        <div className="absolute p-7 leading-8 z-10">
                            <h2 className=" text-white font-semibold">Miami</h2>
                            <p className="text-white text-sm">12 Properties</p>
                        </div>
                        <img src="/images/AppartmentType/Appartment2.png" className='hover:scale-105 transition duration-500 cursor-pointer object-cover' />
                    </div>
                    <div className="overflow-hidden rounded-lg relative">
                        <div className="absolute p-7 leading-8 z-10">
                            <h2 className=" text-white font-semibold">New York</h2>
                            <p className="text-white text-sm">12 Properties</p>
                        </div>
                        <img src="/images/AppartmentType/Appartment3.png" className='hover:scale-105 transition duration-500 cursor-pointer object-cover' />
                    </div>
                    <div className="overflow-hidden rounded-lg relative">
                        <div className="absolute p-7 leading-8 z-10">
                            <h2 className=" text-white font-semibold">Chicago</h2>
                            <p className="text-white text-sm">12 Properties</p>
                        </div>
                        <img src="/images/AppartmentType/Appartment2.png" className='hover:scale-105 transition duration-500 cursor-pointer object-cover' />
                    </div>
                    <div className="overflow-hidden rounded-lg relative">
                        <div className="absolute p-7 leading-8 z-10">
                            <h2 className=" text-white font-semibold">Los Angeles</h2>
                            <p className="text-white text-sm">12 Properties</p>
                        </div>
                        <img src="/images/AppartmentType/Appartment2.png" className='hover:scale-105 transition duration-500 cursor-pointer object-cover' />
                    </div>
                    <div className="col-span-2 overflow-hidden rounded-lg relative">
                        <div className="absolute p-7 leading-8 z-10">
                            <h2 className=" text-white font-semibold">Los Angeles</h2>
                            <p className="text-white text-sm">12 Properties</p>
                        </div>
                        <img src="/images/AppartmentType/Appartment1.png" className='hover:scale-105 transition duration-500 cursor-pointer object-cover' /></div>
                </div>
            </div>
        </div>
    )
}

export default ApartmentType