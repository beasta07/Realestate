// import React from 'react'

import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"


Blogs.propTypes = {
  data: PropTypes.object
}

export default function Blogs({ data }) {

  console.log(data?._id, 'data', data)
  return (
    <div>
      <div className="text-left mb-[5rem] overflow-hidden rounded-xl">
        <Link to={`/blog/${data?._id}`}>
          <img src="images/blog1.jpg" className="rounded-xl hover:scale-105 transition duration-500 cursor-pointer object-cover" />
          <p className="text-sm text-gray-500 pt-5">Living Room</p>
          <h2 className="font-medium pt-2">Private Contemporary Home Balancing Openness</h2>
        </Link>
      </div>
    </div>
  )
}

