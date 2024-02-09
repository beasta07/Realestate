// import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getBlogs } from "../Redux/features/BlogSlice";

function Blogs({ blog }) {
  // const dispatch = useDispatch();
  // // const { id } = useParams();
  // // const [property, setProperty] = useState(null);
  // useEffect(() => {
  //   dispatch(getBlogs());
  // }, [dispatch]);

  // const blog = useSelector((state)=> state.blog.blogs);

  if (!blog) {
    return null; // Return null or a loading indicator if blog is undefined
  }

  return (
    <div>
      <div className="text-left mb-[5rem] overflow-hidden rounded-xl">
        <Link to={`/blogdiscription/${blog?._id}`}>
          {blog?.images && blog.images.length > 0 ? (
            <img
              src={`https://api.myraj.au/${blog?.images[0].replace('public/', '')}`}  // Display the first image from the array
              className="rounded-lg h-[17rem] w-[25rem] object-cover hover:scale-105 transition duration-500"
              alt="Blog Image"
            />
          ) : (
            <img src="/images/blog2.jpg" className="rounded-xl hover:scale-105 transition duration-500 cursor-pointer object-cover" alt="Blog Cover" />
          )}

          <p className="text-sm text-gray-500 pt-5 ">Living Room</p>
          <h2 className="font-medium pt-2 ">{blog?.title}</h2>
        </Link>
      </div>
    </div>
  );
}

Blogs.propTypes = {
  blog: PropTypes.object, // Define the prop type for blog
};

export default Blogs;
