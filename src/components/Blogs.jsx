import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Blogs({ blog }) {
  if (!blog) {
    return null; // Return null or a loading indicator if blog is undefined
  }

  return (
    <div>
      <div className="text-left mb-[5rem] overflow-hidden rounded-xl">
        <Link to={`/blog/${blog._id}`}>
          {blog.images.length > 0 ? (
            <img
              src={`https://api.myraj.au/${blog.images[0]}`} // Display the first image from the array
              className="rounded-lg h-[13rem] w-[100%] object-cover"
              alt="Blog Image"
            />
          ) : (
            <img src="images/blog1.jpg" className="rounded-xl hover:scale-105 transition duration-500 cursor-pointer object-cover" alt="Blog Cover" /> // Display a placeholder if no images
          )}

          <p className="text-sm text-gray-500 pt-5">Living Room</p>
          <h2 className="font-medium pt-2">{blog.title}</h2>
        </Link>
      </div>
    </div>
  );
}

Blogs.propTypes = {
  blog: PropTypes.object, // Define the prop type for blog
};

export default Blogs;
