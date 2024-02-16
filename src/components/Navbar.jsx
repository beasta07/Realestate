import { useState, useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser, postLogin } from '../Redux/features/authSlice';
import PropTypes from "prop-types";

const Navbars = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.register.user);

    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();

    useEffect(() => {
        dispatch(postLogin());
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isloggedin, setIsloggedin] = useState(false);

    const handleLogin = () => {
        try {
            const loginData = { username, password };
            dispatch(postLogin({ loginData, navigate, setMenuOpen, setIsloggedin }));
            setPassword('');
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () => {
        setIsloggedin(false);
        dispatch(logoutUser());
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const NavLink = ({ to, children }) => {
        const isActive = location.pathname === to;
        return (
            <Link to={to}>
                <li className={isActive ? 'border-b-2 border-orange-900 transition duration-500' : ''}>{children}</li>
            </Link>
        );
    };

    return (
        <>
            <div className={`sm:sticky top-0 z-20 ${scrolling ? 'shadow' : 'shadow-none'}`}>
                <div className='z-20 sm:ml-[0rem]'>
                    <div className="w-[100%] shadow bg-white">
                        <div className=" hidden sm:sticky top-0 container w-[100%] mx-auto sm:flex  justify-between py-5 text-black font-medium bg-transparent">
                            <Link to='/'>
                                <div className="pt-4 flex gap-5">
                                    <img src='/images/logo.jpg' className='h-14 -mt-5' alt="Logo" />
                                    <h2 className='font-semibold'>MyRAJ</h2>
                                </div>
                            </Link>
                            <div className="pt-4">
                                <ul className="flex gap-12">
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/about-us'>About</NavLink>
                                    <NavLink to='/buy'>Rent</NavLink>
                                    <NavLink to='/sell'>Sell</NavLink>
                                    <NavLink to='/blog'>Blog</NavLink>
                                    <NavLink to='/contact'>Contact</NavLink>
                                </ul>
                            </div>
                            <div className="flex items-center">
                                {isloggedin ? (
                                    <>
                                        <div className="relative">
                                            
                                            {menuOpen && (
                                                <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <li><button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full">Logout</button></li>
                                                    {/* Other authenticated user options */}
                                                </ul>
                                            )}
                                            <button onClick={toggleMenu} className="pr-2 focus:outline-none"><FaRegUserCircle className='ml-3 mt-2'/></button>
                                        </div>
                                        <span>{username}</span>
                                    </>
                                ) : (
                                    <>
                                        <button className="pr-2"><FaRegUserCircle /></button>
                                        <button onClick={toggleMenu}>Login/Register</button>
                                        {menuOpen && (
                                            <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                                <div className="bg-white fixed p-8 w-[400px] rounded-lg z-[999]">
                                                    <div className="flex justify-end">
                                                        <button className="text-gray-500" onClick={closeMenu}>
                                                            <span className="text-2xl">&times;</span>
                                                        </button>
                                                    </div>
                                                    <h2 className="text-2xl font-semibold mb-4">Login/Register</h2>
                                                    <form>
                                                        <div className="mb-4">
                                                            <label htmlFor="email" className="block text-gray-600 text-sm font-medium">
                                                                Email:
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                className="w-full border border-gray-300 p-2 rounded-md"
                                                                onChange={(e) => setUsername(e.target.value)}
                                                                value={username}
                                                            />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="password" className="block text-gray-600 text-sm font-medium">
                                                                Password:
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="password"
                                                                className="w-full border border-gray-300 p-2 rounded-md"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                value={password}
                                                            />
                                                        </div>
                                                        <div className='flex gap-4'>
                                                            <button
                                                                type="button"
                                                                className="bg-orange-900 text-white px-4 py-2 rounded-md"
                                                                onClick={handleLogin}
                                                            >
                                                                Sign Up
                                                            </button>
                                                            <Link to='/register'>
                                                                <p className='mt-2 text-gray-600 flex' onClick={closeMenu}>Register here <BsArrowLeftCircleFill className='mt-1 ml-2' /></p>
                                                            </Link>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                                <Link to='/addproperty'>
                                    <button className="flex py-3 px-5 ring-1 ring-gray-600 border-gray-400 rounded-xl text-black ml-8 hover:ring-0 hover:bg-orange-900 hover:text-white transition duration-300">
                                        Add Property<MdOutlineArrowOutward className="ml-2 mt-1" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="h-px border-0 sm:w-[100%] mx-auto dark:bg-gray-800" />

                    <div className="sm:hidden relative z-40 flex justify-between px-5 bg-white text-black py-5 ">
                        <div>
                            <button className="text-[1.4rem]" onClick={toggleMenu}><CgMenuRightAlt /></button>
                            {menuOpen && (
                                <div className="sm:hidden transition ease-in duration-500 fixed top-0 left-0 h-screen w-[80%] bg-white shadow-lg">
                                    <div className='flex justify-between py-7 px-4 w-[100%] mx-auto bg-[#fef5f2] shadow'>
                                        <h2 className='font-semibold text-[1.3rem] mt-2'>Welcome to MyRAJ</h2>
                                        <button onClick={closeMenu}><IoIosCloseCircle className='text-[2.6rem] text-orange-900' /></button>
                                    </div>
                                    <hr />
                                    <ul className="flex flex-col px-5 leading-[3.3rem] pt-9 pb-3">
                                        <NavLink to='/' onClick={closeMenu}>Home</NavLink>
                                        <NavLink to='/aboutus' onClick={closeMenu}>About</NavLink>
                                        <NavLink to='/buy' onClick={closeMenu}>Rent</NavLink>
                                        <NavLink to='/sell' onClick={closeMenu}>Sell</NavLink>
                                        <NavLink to='/mainblog' onClick={closeMenu}>Blog</NavLink>
                                        <NavLink to='/contact' onClick={closeMenu}>Contact</NavLink>
                                    </ul>
                                    <hr className='bg-gray-300 dark:bg-black h-px border-0' />
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
            </div >
        </>
    )
}

Navbars.propTypes = {
    to: PropTypes.object,
};
Navbars.propTypes = {
    children: PropTypes.object,
};

export default Navbars;
