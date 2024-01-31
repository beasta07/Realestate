import React from 'react'

const Features = () => {
  return (
    <div className='bg-[#F7F7F7] pb-[4rem]  sm:mt-[6rem] mt-[66rem]'>
        <div className='container mx-auto pt-[6rem] px-8'>
            <h2 className='font-bold text-[1.4rem] sm:text-[2rem] '>Discover Our Featured Listings</h2>
            <p>Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className='w-[90%] mt-[4rem] grid sm:grid-cols-3 gap-[4rem] rounded-lg sm:h-[21rem] container mx-auto '>
            <div className='bg-white rounded-lg relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
                <img src="/image/p1.jpg" className='rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110' alt="Louvre"/>
                <h2 className='font-bold px-5 mt-6 text-[1.2rem]'>Equestrian Family Home</h2>
                <p className='text-gray-400 px-5'> New York City, CA, USA</p>
            </div>
            <div className='bg-white rounded-lg relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
                <img src="/image/p1.jpg" className='rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110' alt="Louvre"/>
                <h2 className='font-bold px-5 mt-6 text-[1.2rem]'>Equestrian Family Home</h2>
                <p className='text-gray-400 px-5'> New York City, CA, USA</p>
            </div>
            <div className='bg-white rounded-lg relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
                <img src="/image/p1.jpg" className='rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110' alt="Louvre"/>
                <h2 className='font-bold px-5 mt-6 text-[1.2rem]'>Equestrian Family Home</h2>
                <p className='text-gray-400 px-5'> New York City, CA, USA</p>
            </div>
        </div>
    </div>
  )
}

export default Features