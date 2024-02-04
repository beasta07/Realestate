import {Link} from "react-router-dom"
const IndivualBlogs = () => {
  return (
    <div>
    <div className="container w-[100%] mx-auto py-5 ">
      <div className="rounded-lg overflow-hidden ">
        <Link to='/blog-description'>
        <img className="w-[25rem] rounded-lg hover:scale-105 transition-transform duration-300" src="images/blog-1.jpg" />
            <p className="pt-5 pb-2 text-[#8D8D8D] text-[0.8rem]">Living Room</p>
            <p className="pb-3 font-semibold w-[100%]">Private Contemporary Home Balancing Openness</p></Link>
          </div>
        </div>
    </div>
  )
}

export default IndivualBlogs
