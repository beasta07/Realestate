import React from 'react'

const Features = ({property}) => {
  return (
    <div className=''>
        {/* <div className='container mx-auto w-full ml-[5.5rem] pt-[6rem] px-8'>
            <h2 className='font-bold text-[1.4rem] sm:text-[2rem] '>Discover Our Featured Listings</h2>
            <p >Aliquam lacinia diam quis lacus euismod</p>
        </div> */}
        <div className=' mt-[4rem]  gap-[4rem] rounded-lg  container mx-auto '>
            <div className='bg-white  rounded-lg relative transition duration-300 ease-in-out hover:scale-110 alt="Louvre" max-w-xs overflow-hidden bg-cover bg-no-repeat'>
                <img src={`https://api.myraj.au/${property.images[0]}`} className='rounded-t-lg h-[13rem] w-[20rem] max-w-xs' />
                <h2 className='font-bold px-5 mt-3 text-[1.2rem] line-clamp-1'>{property.name}</h2>
                <p className='text-gray-400 px-5'> {property.location.district}, {property.location.tole} </p>
            </div>
        </div>
    </div>
  )
}

export default Features