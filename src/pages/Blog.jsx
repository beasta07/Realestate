import IndivualBlogs from "../components/IndivualBlogs"

const Blog = () => {
  return (
    <>
      <div className="container w-[100%] mx-auto pt-[5rem]">
        <div className="text-center">
          <h1 className="text-center text-[1.75rem] font-semibold">From our Blog</h1>
          <p>Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <div className="grid sm:grid-cols-3  grid-cols-1 py-[4mmrem] gap-[2rem] ">
        <IndivualBlogs/>
        <IndivualBlogs/>

        <IndivualBlogs/>

      </div>
      </div>
    </>
  )
}

export default Blog
