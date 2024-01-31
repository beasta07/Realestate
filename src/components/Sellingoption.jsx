import React from 'react'
import { TiArrowRightThick } from "react-icons/ti";

const Sellingoption = () => {
  return (
    <div>
        <div className='container w-[93%] sm:w-[85%] mx-auto'>
            <div className='sm:flex'>
                <div className='mt-[6rem]'>
                    <h2 className='sm:w-[70%] w-[90%] text-[1.2rem] font-bold sm:text-[2rem]'>Let’s find the right selling option for you</h2>
                    <p className='mt-3 sm:w-[60%] w-[88%]'>As the complexity of buildings to increase, the field of architecture</p>
                    <ul className=' font-bold mt-4'>
                        <li className='flex'><TiArrowRightThick className='mt-1'/> Find excellent deals</li>
                        <li className='flex'><TiArrowRightThick className='mt-1'/> Friendly host & Fast support</li>
                        <li className='flex'><TiArrowRightThick className='mt-1'/> Friendly host & Fast support</li>
                    </ul>
                    <button className=' mt-5 w-[40%] h-[3.5rem] border-black font-bold border-2 rounded-full'>Learn More</button>    
                </div>
                <div>
                    <img className='w-[100%] mt-7' src='/image/three.png' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sellingoption