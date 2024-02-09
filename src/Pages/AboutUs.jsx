// import Navbar from "../components/Navbar"
import { MdOutlineHolidayVillage } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import WhyChooseUs from "../components/WhyChooseUs";
// import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <img
        src="/image/About-us.jpg"
        className="sm:w-[100%] sm:h-[auto] h-[15rem] "
      />
      <div className="container w-[100%] mx-auto  ">
        <div className=" absolute  sm:top-[25%] top-[18%] pl-2 sm:pl-0 leading-[3rem]">
          <h1 className="font-semibold sm:text-[2rem] text-[1.25rem]">
            About us
          </h1>
          <p>Home/About</p>
        </div>

        <div className="mt-[6rem] sm:flex sm:gap-[7rem] sm:px-0 px-2">
          <div className="sm:w-[55%]">
            <h1 className="font-semibold  sm:text-[2rem]">
              We are on a Mission to Change View of Real Estate Field.
            </h1>
          </div>
          <div className="sm:w-[55%]">
            <p className="text-[0.9rem] leading-[1.5rem] text-justify">
              It doesn’t matter how organized you are — a surplus of toys will
              always ensure your house is a mess waiting to happen. Fortunately,
              getting kids on board with the idea of ditching their stuff is a
              lot easier than it sounds.
            </p>
            <br />
            <p className="text-[0.9rem] leading-[1.5rem] text-justify">
              Maecenas quis viverra metus, et efficitur ligula. Nam congue augue
              et ex congue, sed luctus lectus congue. Integer convallis
              condimentum sem. Duis elementum tortor eget condimentum tempor.
              Praesent sollicitudin lectus ut pharetra pulvinar.
            </p>
            <div className="sm:flex">
              <div className="mt-[3rem]">
                <div className="rounded-full bg-[#F7F7F7] w-[3.5rem] mb-4">
                  <MdOutlineHolidayVillage className="text-[3rem] text-center px-2" />
                </div>
                <h1 className="font-semibold">Modern Villa</h1>
                <p className="text-[0.9rem] w-[70%]">
                  Nullam sollicitudin blandit Nullam maximus.
                </p>
              </div>

              <div className="mt-[3rem]">
                <div className="rounded-full bg-[#F7F7F7] w-[3.5rem] mb-4">
                  <MdOutlinePayment className="text-[3rem] text-center px-2" />
                </div>
                <h1 className="font-semibold">Secure Payment</h1>
                <p className="text-[0.9rem] w-[70%]">
                  Nullam sollicitudin blandit Nullam maximus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[8rem]">
          <img src="image/about-house.jpg" />
          <div className="sm:flex justify-between mt-[4rem] px-20">
            <div>
              <h1 className="text-[2.5rem] font-semibold text-center">4M</h1>
              <p className="text-center">Award Winning</p>
            </div>

            <div>
              <h1 className="text-[2.5rem] font-semibold text-center">12K</h1>
              <p className="text-center">Property Ready</p>
            </div>

            <div>
              <h1 className="text-[2.5rem] font-semibold text-center">20M</h1>
              <p className="text-center">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
