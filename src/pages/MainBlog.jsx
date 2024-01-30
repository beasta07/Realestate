// import React from 'react'
import Blogs from "../components/Blogs"

const MainBlog = () => {
    return (
        <div>
            <div className="container w-[100%] mx-auto sm:text-center sm:px-0 px-3 mt-[4rem]">
                <h2 className="font-semibold text-[1.8rem]">From Our Blog</h2>
                <p className="pb-14">Aliquam lacinia diam quis lacus euismod</p>
                <div className="grid sm:grid-cols-3 gap-3">
                    {
                        [1,1,1,1,1,1].map(() => {
                            return <Blogs />;
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default MainBlog