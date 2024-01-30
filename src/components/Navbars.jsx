import { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbars = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='z-20 sm:ml-[0rem]'>
            <div className="w-[100%] shadow">
                <div className=" hidden sm:sticky top-0 container w-[100%] mx-auto sm:flex  justify-between py-5 text-black font-medium bg-transparent">
                    <div className="pt-4">
                        <h2 className='font-semibold'>MyRAJ</h2>
                    </div>
                    <div className="pt-4">
                        <ul className="flex gap-12">
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/aboutus'><li>About</li></Link>
                            <Link to='/buy'><li>Buy</li></Link>
                            <Link to='/sell'><li>Sell</li></Link>
                            <Link to='/mainblog'><li>Blog</li></Link>
                            <Link to='/contact'><li>Contact</li></Link>
                        </ul>
                    </div>
                    <div className="flex">
                        <button className="pr-2"><FaRegUserCircle /></button>
                        <button>Login/Register</button>
                        <Link to='/addproperty'><button className="flex py-3 px-5 border-2 border-gray-400 rounded-xl text-black ml-8 hover:bg-orange-600 hover:text-white transition duration-300">Add Property<MdOutlineArrowOutward className="ml-2 mt-1" /></button></Link>
                    </div>
                </div>
            </div>  <hr className="h-px border-0 sm:w-[100%] mx-auto dark:bg-gray-800" />

            <div className="sm:hidden relative z-40 flex justify-between px-5 bg-white text-black py-5 ">
                <div>
                    <button className="text-[1.4rem]" onClick={toggleMenu}><CgMenuRightAlt /></button>
                    {menuOpen && (
                        <div className="sm:hidden transition ease-in duration-500 fixed top-0 left-0 h-screen w-[80%] bg-white shadow-lg">
                            <div className='flex justify-between py-7 px-4 w-[100%] mx-auto bg-[#fef5f2] shadow'>
                            <h2 className='font-semibold text-[1.3rem] mt-2'>Welcome to MyRAJ</h2>
                            <button onClick={closeMenu}><IoIosCloseCircle className='text-[2.6rem] text-orange-600'/></button>
                            </div> <hr />
                            <ul className="flex flex-col px-5 leading-[3.3rem] pt-9 pb-3">
                                <Link to='/' onClick={closeMenu}><li>Home</li></Link>
                                <Link to='/aboutus' onClick={closeMenu}><li>About</li></Link>
                                <Link to='/buy' onClick={closeMenu}><li>Buy</li></Link>
                                <Link to='/sell' onClick={closeMenu}><li>Sell</li></Link>
                                <Link to='/mainblog' onClick={closeMenu}><li>Blog</li></Link>
                                <Link to='/contact' onClick={closeMenu}><li>Contact</li></Link>
                            </ul>
                            <hr className='bg-gray-300 dark:bg-black h-px border-0'/>
                            <div className='p-8 leading-[3.3rem]'>
                                <p className='text-sm'>Total Free Customer Care</p>
                                <number className='font-semibold'>+977-980-6521436</number>
                                <p className='text-sm'>Need Live Support?</p>
                                <p className='font-semibold'>myRAJ@gmail.com</p>
                            </div>
                        </div> 
                    )}
                </div>
                <div>
                    <h2>MyRAJ</h2>
                </div>
                <div>
                    <button className="text-[1.4rem] "><FaRegUserCircle /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbars

// import { useEffect, useState } from 'react';
// import { FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import { CgMenuRightAlt } from "react-icons/cg";
// import { Link } from "react-router-dom";

// const Navbars = () => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 80) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`sm:sticky top-0 z-20 ${scrolling ? 'shadow-lg' : 'shadow-none'}`}>
//       <div>
//         <div className={`absolute w-[100%] ${scrolling ? 'bg-white shadow-md' : 'bg-transparent text-white'}`}>
//             <div className={`hidden z-40 container w-[100%] mx-auto sm:flex justify-between py-5  font-medium ${scrolling ? 'text-black' : 'text-white'}`}>
//           <div className="pt-4">
//             <h2>MyRAJ</h2>
//           </div>
//           <div className="pt-4">
//             <ul className="flex gap-12">
//               <Link to='/'><li>Home</li></Link>
//               <Link to='/about'><li>About</li></Link>
//               <Link to='/buy'><li>Buy</li></Link>
//               <Link to='/sell'><li>Sell</li></Link>
//               <Link to='/blog'><li>Blog</li></Link>
//               <Link to='/contact'><li>Contact</li></Link>
//             </ul>
//           </div>
//           <div className="flex">
//             <button className="pr-2"><FaRegUserCircle /></button>
//             <button>Login/Register</button>
//             <button className={`flex py-3 px-5 bg-white rounded-xl text-black ml-8 hover:bg-orange-600 hover:text-white transition duration-300 ${scrolling ? 'border-2 border-black' : '' }`}>Add Property<MdOutlineArrowOutward className="ml-2 mt-1"/></button>
//           </div>
//         </div>
//         </div>
//       </div>
//       <hr className="h-px border-0 sm:w-[100%] mx-auto  dark:bg-gray-800" />

//       <div className="sm:hidden relative z-40 flex justify-between px-5 bg-white text-black py-5 ">
//         <div>
//           <button className="text-[1.4rem]"><CgMenuRightAlt /></button>
//         </div>
//         <div>
//           <h2>MyRAJ</h2>
//         </div>
//         <div>
//           <button className="text-[1.4rem] "><FaRegUserCircle /></button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbars;