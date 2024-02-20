import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Blogs = ({ blog }) => {
  return (
    // const firstImageUrl = blog.images[0];

    <div className="pb-7">
      <div className="container w-[100%] mx-auto m-6 mt-[4rem] ">
        <div className="w-[100%] h-[15rem] ">
          <Link to={`/blogdiscription/${blog?._id}`}>
            {blog?.images && blog.images.length > 0 ? (
              <img
                className="rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
                alt="Blog image"
                src={`https://api.myraj.au/${blog?.images[0].replace(
                  "public/",
                  ""
                )}`}
              />
            ) : (
              <img
                src="/images/blog2.jpg"
                className="rounded-xl hover:scale-105 transition duration-500 cursor-pointer object-cover"
                alt="Blog Cover"
              />
            )}
            <p className="mt-4 text-gray-500">Living Room</p>
            <h2 className="font-bold">{blog?.title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
Blogs.propTypes = {
  blog: PropTypes.object, // Define the prop type for blog
};

export default Blogs;
