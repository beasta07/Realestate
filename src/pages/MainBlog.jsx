// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Blogs from "../components/Blogs"
import { useEffect } from "react";
import {getBlogs} from "../Redux/features/BlogSlice";
import { Link } from 'react-router-dom';

const MainBlog = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getBlogs());
    }, []);

    const blogs = useSelector((state)=> state.blog.blogs);

    return (
        <div>
            <div className="container w-[100%] mx-auto sm:text-center sm:px-0 px-3 mt-[4rem]">
                <h2 className="font-semibold text-[1.8rem]">From Our Blog</h2>
                <p className="pb-14">Aliquam lacinia diam quis lacus euismod</p>
                <div className="grid sm:grid-cols-3 gap-3">
                    {blogs.map((blog, index) => (
                        <Link key={index} to={`/blogdiscription/${blog?._id}`}>
                         <Blogs blog={blog} />
                         </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default MainBlog