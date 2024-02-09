import React, { useEffect } from "react";
import Blogs from "../components/Blogs"
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../Redux/features/blogSlice"

const Blogs2 = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getBlogs());
  }, []);

  const blogs = useSelector((state) => state.blog.blogs);


  return (
    <div>
      <div className="mx-auto container mt-[5rem] text-center">
        <h2 className="font-bold text-[1.8rem]">From Our Blogs</h2>
        <p>Aliquam lacinia diam quis lacus euismod</p>
      </div>
      <div>
      <div className="p-6 sm:container sm:grid grid-cols-3 gap-6 mx-auto pb-9">
            {blogs.map((blog, index) => (
              <Blogs key={index} blog={blog} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Blogs2;
