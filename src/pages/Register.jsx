// import React from "react";
import { VscAccount } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postRegister } from "../Redux/features/authSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const dispatch = useDispatch();
    // const error = useSelector((state) => state.register.error);

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        username: Yup.string().required('Username is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        address: Yup.string().required('Address is required'),
        password: Yup.string().required('Password is required'),
        confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    });

    // Initial values for the form fields
    const initialValues = {
        firstName: '',
        lastName: '',
        username: '',
        phoneNumber: '',
        email: '',
        address: '',
        password: '',
        confirm: ''
    };

    // Function to handle form submission
    const handleSubmit = async (values) => {
        try {
            dispatch(postRegister(values));
            toast.success("Registration successful!"); // Display success message
        } catch (error) {
            console.log(error); // Output error to console
            if (error.message) {
                toast.error(error.message); // Display error message using toast.error
            } else {
                toast.error("An error occurred during registration."); // Display generic error message
            }
        }
    };

    return (
        <div className="pb-9 container sm:w-[50%] mx-auto">
            {/* {error && <div className="text-red-600">{error}</div>} */}
            <h2 className="text-center mt-9 font-semibold text-[1.4rem] text-orange-900">
                Welcome To Registration Page
            </h2>
            <div className="mx-auto mt-5 justify-center gap-5 flex p-4 shadow-md rounded-lg">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="mt-5 gap-4 grid grid-cols-2">
                        <div>
                            <h3 className="font-semibold text-gray-600">First Name</h3>
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="Enter Name"
                                className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100 border-gray-300"
                            />
                            <ErrorMessage name="firstName" component="div" className="text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-600">Last Name</h3>
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Enter Last Name"
                                className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100 border-gray-300"
                            />
                            <ErrorMessage name="lastName" component="div" className="text-red-600" />
                        </div>
                        <div className="col-span-2 w-[100%]">
                            <h3 className="font-semibold text-gray-600">Username</h3>
                            <Field
                                type="text"
                                name="username"
                                placeholder="Enter Username"
                                className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100 border-gray-300"
                            />
                            <ErrorMessage name="username" component="div" className="text-red-600" />
                        </div>
                        <div className="col-span-2 w-[100%]">
                            <h3 className="font-semibold text-gray-600">Phone Number</h3>
                            <Field
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter Phone Number"
                                className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100 border-gray-300"
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
                        </div>
                        <div className="col-span-2 w-[100%]">
                            <h3 className="font-semibold text-gray-600">Email</h3>
                            <Field
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100 border-gray-300"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-600" />
                        </div>
                        <div className="col-span-2 w-[100%]">
                            <h3 className="font-semibold text-gray-600">Address</h3>
                            <Field
                                type="text"
                                name="address"
                                placeholder="Enter Address"
                                className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100 border-gray-300"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-600">Password</h3>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100 border-gray-300"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-600">Confirm Password</h3>
                            <Field
                                type="password"
                                name="confirm"
                                placeholder="Confirm Password"
                                className="w-full mt-2 mb-2 px-3 py-4 rounded-lg border-2 bg-gray-100 border-gray-300"
                            />
                            <ErrorMessage name="confirm" component="div" className="text-red-600" />
                        </div>
                        <div className="col-span-2 w-[100%] py-6">
                            <button type="submit" className="transition duration-300 text-white text-[1.2rem] font-semibold py-4 rounded-xl bg-orange-900 w-full">
                                <h2 className="flex sm:mx-[15rem]"> <VscAccount className="mt-1 sm:mr-2 sm:ml-0 ml-24" /> Register Account</h2>
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
