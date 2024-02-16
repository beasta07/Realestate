// import React from 'react'
import { useEffect } from 'react';
// import { IoCheckmarkCircleSharp } from "react-icons/io5";
// import Blogs from "../components/Blogs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from "../Redux/features/BlogSlice";

const BlogDiscription = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const [property, setProperty] = useState(null);
    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    const blogs = useSelector((state) => state.blog.blogs);
    const blog = blogs.find(blog => blog._id === id);

    // console.log(id, "ids")

    return (
        <div>
            <div>
                <div className="container w-[100%] mx-auto my-[4rem] px-3 sm:px-0">
                    <h2 className="sm:text-[2rem] text-[1.3rem] font-semibold">{blog?.title}</h2>
                    <div className="flex gap-5 divide-x-2 mt-4">
                        {/* <div><p>Lesile Alexander</p></div> */}
                        {/* <div><p className="pl-5">Home Improvement</p></div> */}
                        <div><p className="pl-0">January 30, 2024</p></div>
                    </div>
                </div>
                <div>
                    <img src="/images/BlogDiscImg/BlogDiscImg1.jpg" className='w-[100%]'/>
                </div>
                <div className="container sm:w-[53%] px-3 sm:px-0 mx-auto">
                    <div className="">
                        <h2 className="font-medium text-[1.3rem] pt-8">{blog?.title}</h2>
                        <p className="text-sm py-5">{blog?.description}</p>
                        <p className="text-sm">{blog?.description}</p>
                    </div>
                    <div className="bg-[#FEF5F2] p-14 border-l-2 border-black my-16">
                        <i>Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.</i>
                        <h3 className="font-medium pt-4">Luis Pickford</h3>
                    </div>

                    <div>
                        {/* <h2 className="font-medium text-[1.3rem] pt-6 pb-5">Choose toys wisely</h2>
                        <div className="sm:flex gap-12">
                            <div className="">
                                <ul className="leading-[3rem] text-sm">
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />Become a UI/UX designer.</li>
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />Learn to design mobile apps & websites.</li>
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />Build a UI project from beginning to end.</li>
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />Work with colors & fonts.</li>
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />You will create your own UI Kit.</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="leading-[3rem] text-sm">
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />Become a UI/UX designer.</li>
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />Learn to design mobile apps & websites.</li>
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />Build a UI project from beginning to end.</li>
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />Work with colors & fonts.</li>
                                    <li className="flex"><IoCheckmarkCircleSharp className="mt-4 mr-2 text-green-200" />You will create your own UI Kit.</li>
                                </ul>
                            </div>
                        </div> */}
                        <div>
                            <img src={`https://api.myraj.au/${blog?.images[2].replace('public/', '')}`} className="rounded-lg mt-[3.5rem] object-cover " />
                        </div>
                        <div>
                            <h2 className="font-medium text-[1.3rem] pt-12 pb-5">{blog?.short_description}</h2>
                            <p className="text-sm py-5">{blog?.description}</p>
                        </div>

                    </div>
                </div>
                {/* <div className="container w-[100%] mx-auto text-center mt-[6rem]">
                            <h2 className="font-semibold text-[1.7rem] ">Related Posts</h2>
                            <p className="text-sm">Aliquam lacinia diam quis lacus euismod</p>
                            <div className="grid sm:grid-cols-3 gap-3 mt-16 ml-2 sm:ml-0">
                                {
                                    [1, 1, 1].map(() => {
                                        return <Blogs />;
                                    })
                                }

                            </div>
                        </div> */}
            </div>
        </div>
    )
}

export default BlogDiscription