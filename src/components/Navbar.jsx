import { FaRegUserCircle } from "react-icons/fa";
// import { IoFilterSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    
     <div>
       <div className="flex sm:bg-[#FFF4F2] bg-[white] justify-center p-5 gap-6">
        <h1 className="font-semibold text-[1.25rem] pr-[5rem] mt-3 text-center">MyRaz</h1>
        <ul className="sm:flex gap-[4rem] text-[0.85rem] font-semibold mt-4 mr-[3rem] hidden ">
            <li className="text-[black]">Home</li>
            <li className="text-[black]">About</li>
            <li className="text-[black]">Buy</li>
            <li className="text-[black]">Sell</li>
            <li className="text-[black]">Blog</li>
            <li className="text-[black]">Contact</li>
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
