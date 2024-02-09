import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import Newaccount from "./Newaccount";

const Loginpage = () => {
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

  const handleToggleAccount = () => {
    setIsNewAccount(!isNewAccount);
  };
  const closeMenu = () => {
    setMenuOpen(false);
};

  return (
    <div className="pb-8">
      <div className="sm:w-[100%] justify-center mx-auto h-[35rem] rounded-xl ">
        <div className=" mt-8 ">
          <div className="flex justify-between font-semibold">
            <h2 className="text-[1.3rem] mt-[1.6rem]">Welcome To Realton</h2>
            <RxCross1
              className="text-[2.2rem] mt-[1.8rem] rounded-full bg-[#F7F7F7] hover:bg-oranFge-200 p-2"
              onClick={closeMenu}
            />
          </div>
          <hr className="h-px bg-gray-200 mt-6 border-0 w-[100%] mx-auto dark:bg-gray-700" />
          <h2 className="font-semibold mt-[2rem] text-[1.1rem]">
            {isNewAccount ? "Create Account" : "Sign In"}
            <span className="ml-[2rem]" onClick={handleToggleAccount}>
              {isNewAccount ? "Sign In" : "New Account"}
            </span>
            {isNewAccount ? <Newaccount /> : null}
          </h2>
          <h3 className="mt-4 font-semibold">Email</h3>
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full mt-2 mb-5 px-3 py-4 rounded-lg  bg-gray-100 border-2 border-gray-200"
          />
          <br />
          <h2 className="font-semibold">Password</h2>
          <input
            type="Password"
            placeholder="Enter Password"
            className="w-full mt-2 px-3 py-4 rounded-lg mb-5 bg-gray-100 border-2 border-gray-200"
          />
          <div>Forget Your Password?</div>
          <button className="flex bg-orange-600 mt-4 text-white text-[1.2rem] font-semibold  justify-center  w-[100%] rounded-xl py-3">
            <VscAccount className="mt-1 mr-3 text-[1.4rem]" />
            Sign In
          </button>
          <p className="w-[70%] mx-auto text-center mt-5 text-[#181A20]">
            Not signed up?
            <span className="font-semibold hover:text-red-500">
              {" "}
              Create an account.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
