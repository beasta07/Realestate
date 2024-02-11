import { Link } from "react-router-dom"
import IndivualBlogs from "../components/IndivualBlogs"

const Blog = () => {
  return (
    <>
      {/* <div className="container w-[100%] mx-auto pt-[5rem] sm:p-0 p-3">
        <div className="text-center">
          <h1 className="text-center text-[1.75rem] font-semibold">From our Blog</h1>
          <p>Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className="grid sm:grid-cols-3  grid-cols-3  py-[4rem] gap-[2rem] ">
          <Link to="/blog-description">
        <IndivualBlogs/>
        <IndivualBlogs/>
        <IndivualBlogs/>

        </Link>

      </div>
      </div>      */}   
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
    </>
  )
}

export default Blog
