import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
// import { IoFilterSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    
     <div>
       <div className="flex sm:bg-[#FFF4F2] bg-[white] sm:justify-center justify-between p-5 sm:gap-6 gap-[10rem]">
        <h1 className="font-semibold text-[1.25rem] sm:pr-[5rem] mt-3 sm:text-center">MyRaz</h1>
        <ul className="sm:flex gap-[4rem] text-[0.85rem] font-semibold mt-4 mr-[3rem] hidden ">
            <li className="text-[black]"> <Link to="/">Home</Link></li>
            <Link to="/about-us"><li className="text-[black]">About</li></Link>
            <li className="text-[black]">  <Link to="/buy-element">Buy</Link></li>
            <li className="text-[black]">  <Link to="/">Sell</Link></li>
            <li className="text-[black]">  <Link to="/">Contact</Link></li>
            <li className="text-[black]">  <Link to="/Blog">Blogs</Link></li>
        </ul>
        <div className="flex pl-[5rem]  mt-4">
        <FaRegUserCircle className="mt-1 mr-2" sm:right left/>
        <p className="font-semibold text-[0.85rem] hidden sm:block">Login / Register</p>
        </div>
        <div>
            <button className="text-[white] rounded-2xl bg-black w-[12rem] p-4 font-semibold hidden sm:block">Add Property</button>
        </div>

        </div> 
     </div>
    
  )
}

export default Navbar
