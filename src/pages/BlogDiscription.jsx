// import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
// import Blogs from "../pages/Blog";
import IndivualBlogs from "../components/IndivualBlogs";
import { Link } from "react-router-dom";

const BlogDiscription = () => {
    return (
        <div>
            <Link to="blog-description">
            <div>
                <div className="container w-[100%] mx-auto my-[4rem] px-3 sm:px-0">
                    <h2 className="sm:text-[2rem] text-[1.3rem] font-semibold">Contemporary Home Private Balancing Openness</h2>
                    <div className="flex gap-5 divide-x-2 mt-4">
                        <div><p>Lesile Alexander</p></div>
                        <div><p className="pl-5">Home Improvement</p></div>
                        <div><p className="pl-5">January 30, 2024</p></div>
                    </div>
                </div>
                <div>
                    <img src="/images/BlogDiscImg1.jpg" />
                </div>
                <div className="container sm:w-[53%] px-3 sm:px-0 mx-auto">
                    <div className="">
                        <h2 className="font-medium text-[1.3rem] pt-8">Reduce the clutter</h2>
                        <p className="text-sm py-5">It doesn’t matter how organized you are — a surplus of toys will always ensure your house is a mess waiting to happen. Fortunately, getting kids on board with the idea of ditching their stuff is a lot easier than it sounds.</p>
                        <p className="text-sm">The trick is to make it an opportunity for them to define themselves and their interests. Encourage kids to make a pile of ”baby toys” to donate, and have them set aside any toys that no longer interest them, such as action figures from a forgotten TV show. Separating these toys will help them appreciate how much they’ve grown and rediscover the toys they love.</p>
                    </div>
                    <div className="bg-[#FEF5F2] p-14 border-l-2 border-black my-16">
                        <i>Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.</i>
                        <h3 className="font-medium pt-4">Luis Pickford</h3>
                    </div>

                    <div>
                        <h2 className="font-medium text-[1.3rem] pt-6 pb-5">Choose toys wisely</h2>
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
                        </div>
                        <div>
                            <img src="/images/BlogDiscImg2.jpg" className="rounded-lg mt-[3.5rem]" />
                        </div>
                        <div>
                            <h2 className="font-medium text-[1.3rem] pt-12 pb-5">Leave some toys out of reach</h2>
                            <ul className="list-disc ml-4 leading-[3rem] text-sm">
                                <li>We do not require any previous experience or pre-defined skills to take this course. A great orientation would be enough to master UI/UX design.</li>
                                <li>A computer with a good internet connection.</li>
                                <li>Adobe Photoshop (OPTIONAL)</li>
                            </ul>
                        </div>

                    </div>
                </div>
                        <div className="container w-[100%] mx-auto text-center mt-[6rem]">
                            <h2 className="font-semibold text-[1.7rem] ">Related Posts</h2>
                            <p className="text-sm">Aliquam lacinia diam quis lacus euismod</p>
                            <div className="grid sm:grid-cols-3 gap-3 mt-16">
                                {
                                    [1,1,1 ].map(() => {
                                        return <IndivualBlogs key={null} />;
                                    })
                                }

                            </div>
                        </div>
            </div>
            </Link>
        </div>
    )
}

export default BlogDiscription