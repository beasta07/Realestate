import React from 'react'
import Buy from '../components/Buy';
import Filter2 from '../components/Filter2';

const Buy2 = () => {
  return (
    <>
    <div className='bg-[#F7F7F7]'>
  <div className='flex container mx-auto w-[100%] gap-[9rem]'>
      <Filter2/>

    <div className="bg-[#F7F7F7] rounded-lg">
        <div className="text-[1.6rem]  font-semibold container w-[90%] mt-[2rem] mx-auto">
            <h2>New York Home For Buy</h2>
        </div>
      <div className="p-6 sm:container sm:grid grid-cols-2 gap-[2.6rem] mx-auto">
        {[1, 1, 1, 1, 1, 1].map(() => {
          return <Buy />;
        })}
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Buy2