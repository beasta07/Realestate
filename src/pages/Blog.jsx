// import React from 'react'

import Blogs from "../components/Blogs"

const Blog = () => {
    const blogData = [{
        location: {
            "ward": 4,
            "province": "Bagmati",
            "district": "Kathmandu",
            "municipality": "Kathmandu",
            "tole": "Thamel"
        },
        contactInfo: {
            "email": "commercial@realestate.com",
            "phone": "9876543210"
        },
        _id: "657564b40fa7f4914d3968c3",

    }]
    return (
        <div>
            <div className="container w-[100%] mx-auto sm:text-center sm:px-0 px-3 mt-[4rem]">
                <h2 className="font-semibold text-[1.8rem]">From Our Blog</h2>
                <p className="pb-14">Aliquam lacinia diam quis lacus euismod</p>
                <div className="grid sm:grid-cols-3 gap-3">
                    {
                        blogData?.map((data, index) => {
                            return <Blogs key={index} data={data} />;
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Blog