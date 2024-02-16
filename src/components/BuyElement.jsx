import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineGarage } from "react-icons/md";
import { RiPinDistanceFill } from "react-icons/ri";
import { getProperties } from '../Redux/features/propertySlice';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const BuyElement = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    subject: '',
    textarea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('First Name is required'),
    number: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    subject: Yup.string().required('Subject is required'),
    textarea: Yup.string().required('Message is required')
  });

  const initialValues = {
    name: '',
    number: '',
    email: '',
    subject: '',
    textarea: ''
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  const properties = useSelector((state) => state.property.properties);
  const property = properties.find(property => property._id === id);

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container w-[100%] mx-auto mt-[4rem] leading-[3rem]">
        <div className="sm:flex justify-between sm:px-0 px-1">
          <div>
            <h1 className="text-[2rem] font-semibold">{property?.name}</h1>
            <p>{property?.location.tole}, {property?.location.district}</p>
            <div className="flex ">
              <div className="rounded-full bg-[#EB6753] w-[1rem] h-[1rem] mt-4 mr-2"></div>
              <div className="text-[#EB6753] mr-4 divide-y">For {property?.purpose}</div>
            </div>
          </div>
          <div>
            <div className="flex leading-[3rem]">
              <div className="border-2 bg-transparent p-2 ml-12 rounded-md hover:border-black h-9"><CiHeart /></div>
              <div className="border-2 bg-transparent p-2 ml-2 rounded-md hover:border-black h-9"><CiShare2 /></div>
            </div>
            <p className="font-semibold text-[1.5rem] sm:text-right mt-3">Rs. {property?.price}</p>
          </div>
        </div>
        <div className="sm:grid grid-rows-2 grid-flow-col gap-4 mt-[3rem] mb-[4rem] sm:mb-0">
          <div className="row-span-3 ..."><img src={`https://api.myraj.au/${property?.images[0]}`} className="rounded-l-xl hover:scale-105 transition-transform duration-300 sm:h-[34.3rem] sm:w-[50rem] object-cover" /></div>
          <div className="col-span-2 ..."><img src={`https://api.myraj.au/${property?.images[1]}`} className="hidden sm:block rounded-r-xl hover:scale-105 transition-transform duration-300 sm:h-[16.6rem] sm:w-[25rem] object-cover" /></div>
          <div className=" col-span-2 ..."><img src={`https://api.myraj.au/${property?.images[2]}`} className="hidden sm:block rounded-r-xl hover:scale-105 transition-transform duration-300 sm:h-[16.6rem] sm:w-[25rem] object-cover" /></div>
        </div>
        <div className="sm:flex justify-between sm:px-[2rem] px-1 sm:mt-[2rem]">
          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><FaBed className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">Bedroom</p>
              <p className="mr-100">1</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><FaShower className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">Bath</p>
              <p className="mr-100">2</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><SlCalender className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">Built</p>
              <p className="mr-100">2008</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><MdOutlineGarage className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">Garage</p>
              <p className="mr-100">2</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-transparent  mr-5 hover:border-black "><RiPinDistanceFill className="p-3 border-2 text-[3.5rem] rounded-md" /></div>
            <div>
              <p className="mt-2 w-[5%] leading-3">SqFeet </p>
              <p className="mr-100">1200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] mt-[0rem]">
        <div className='container w-[100%] mx-auto pb-16'>
          <div className="sm:flex p-5">
            <div className="sm:w-[70%] sm:px-3 rounded-xl shadow-md bg-white mt-[2rem] py-6">
              <h1 className='font-semibold p-5 text-[1.3rem]'>Property Description</h1>
              <p className='mx-5 text-[0.85rem] text-justify leading-[1.5rem]'>
                {property?.description}
              </p>
              {showMore && (
                <p className='mx-5 text-[0.85rem] text-justify leading-[1.5rem]'>
                  Placeholder content for this accordion, which is intended to demonstrate the class. This is the first items accordion body you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.
                </p>
              )}
              <button onClick={toggleShowMore} className="text-black font-semibold hover:underline focus:outline-none text-[1rem] mx-5">
                {showMore ? 'Show Less' : 'Show More'}
              </button>

              <div className='p-5 pb-3'>
                <h1 className='font-semibold text-[1.25rem] my-[2rem]'>Property Details</h1>
                <div className='sm:flex gap-[4rem]'>
                  <div>
                    <div className='flex gap-5  justify-between pb-3'>
                      <h1 className='font-semibold '>Property ID: </h1>
                      <p className='text-left'>{property?._id}</p>
                    </div>
                    <div className='flex gap-3 justify-between pb-3'>
                      <h1 className='font-semibold '>Bathrooms: </h1>
                      <p className='text-left'>3</p>
                    </div>
                    <div className='flex gap-3 justify-between pb-3'>
                      <h1 className='font-semibold '>Bedrooms: </h1>
                      <p className='text-left'>4</p>
                    </div>
                  </div>
                  <div>
                    <div className='flex gap-3 justify-between  pb-3 '>
                      <h1 className='font-semibold '>Price: </h1>
                      <p className='text-left'>{property?.price}</p>
                    </div>
                    <div className='flex gap-3 justify-between pb-3'>
                      <h1 className='font-semibold mr-[4.7rem]'>Property Type</h1>
                      <p>Apartment</p>
                    </div>
                    <div className='flex gap-3 justify-between pb-3'>
                      <h1 className='font-semibold mr-[4rem]'>Property Status</h1>
                      <p>{property?.purpose}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] rounded-xl shadow-md bg-white mt-[2rem] ml-[2rem] py-12 sm:block hidden">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                <Form>
                  <h1 className='text-center text-bold text-[1.25rem] mt-4'>Inquiry Form</h1>
                  <div className='px-5 h-[25rem]'>
                    <input
                      type='text'
                      placeholder="Enter your Name"
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className="block border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white hover:border-blue-600 pb-2"
                    />
                    <input
                      type='email'
                      placeholder="Abc@gmail.com"
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className="block border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white hover:border-blue-600 pb-2"
                    />
                    <input
                      type='number'
                      placeholder="Enter your Number"
                      name='number'
                      value={formData.number}
                      onChange={handleChange}
                      className="block border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white hover:border-blue-600 pb-2"
                    />
                    <input
                      type='text'
                      placeholder="Enter your Subject"
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      className="block border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white hover:border-blue-600 pb-2"
                    />
                    <textarea
                      placeholder="Any Questions"
                      name='textarea'
                      value={formData.textarea}
                      onChange={handleChange}
                      className="block border w-[18rem] mt-6 mb-5 border-gray-300 rounded-md text-black py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white hover:border-blue-600 pb-2"
                    />
                    <button
                      type='Submit'
                      className="text-[white] rounded-md bg-[#EB6753] w-[12rem] p-3 font-semibold hidden sm:block mb-[5.6rem] mt-4 mx-auto px-0"
                    >
                      Register Now
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="sm:w-[66%] rounded-xl px-1 sm:px-0 shadow-md bg-white mt-[rem] ml-5 ">
            <div className='p-5 pb-3 '>
              <h1 className='font-semibold text-[1.25rem] my-[2rem]'>Address</h1>
              <div className='sm:flex gap-[4rem]'>
                <div >
                  <div className='flex gap-[5.9rem]  pb-3'>
                    <h1 className='font-semibold '>Province: </h1>
                    <p className='text-'>{property?.location.province}</p>
                  </div>
                  <div className='hidden  sm:flex gap-[6.7rem]  pb-3 '>
                    <h1 className='font-semibold '>District: </h1>
                    <p className='text-'>{property?.location.district}</p>
                  </div>
                  <div className='hidden  sm:flex gap-[4rem] pb-3'>
                    <h1 className='font-semibold '>Municipality: </h1>
                    <p className='text- l'>{property?.location.municipality}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyElement;
