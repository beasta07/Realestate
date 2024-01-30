// import React from 'react'

import { Link } from "react-router-dom"

const Blogs = () => {
  return (
    <div>
        <div className="text-left mb-[5rem] overflow-hidden rounded-xl">
          <Link to='/blogdiscription'>
            <img src="images/blog1.jpg" className="rounded-xl hover:scale-105 transition duration-500 cursor-pointer object-cover" />
            <p className="text-sm text-gray-500 pt-5">Living Room</p>
            <h2 className="font-medium pt-2">Private Contemporary Home Balancing Openness</h2>
            </Link>
        </div>
    </div>
  )
}

export default Blogs