import React from 'react'
import Buy from '../components/Buy';

const Buy2 = () => {
  return (
    <div className="bg-[#F7F7F7] ">
        <div className="text-[2rem]  font-bold container w-[85%] mt-[9rem] mx-auto">
            <h2>New York Home For Buy</h2>
        </div>
      <div className="p-6 sm:container sm:grid grid-cols-3 gap-[1.5rem] mx-auto">
        {[1, 1, 1, 1, 1, 1].map(() => {
          return <Buy />;
        })}
      </div>
    </div>
  )
}

export default Buy2