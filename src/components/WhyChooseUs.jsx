import { TbUserPentagon } from "react-icons/tb";
import { VscKey } from "react-icons/vsc";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
const WhyChooseUs = () => {
  return (
    <>
      <div className="sm:flex sm:gap-[10] mt-[8rem] container w-[100%] mx-auto p-3 sm:p-0  ">
        <div className="">
          <img
            src="image/WhyChooseUs.jpg"
            className="rounded-lg w-[50rem] sm:mt-[4rem] mb-[8rem]"
          />
        </div>
        <div className="sm:ml-[7rem] sm:mt-[7rem] mt-[4rem]">
          <div>
            <h1 className="font-semibold text-[2rem]">Why Choose Us</h1>
            <p className="sm:w-[70%]">
              As the complexity of buildings to increase, the field of
              architecture.
            </p>
          </div>
          <div className="flex  mt-[4rem] gap-6">
            <TbUserPentagon className=" text-[#EB6C59]  rounded-full bg-[#FEF4F3] sm:w-[4.5rem] sm:h-[4.5rem] h-[5rem] w-[7rem] p-5 " />
            <div>
              <h1 className="font-semibold pb-2">Property Management</h1>
              <p className="">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus
                ultricies auctor.
              </p>
            </div>
          </div>

          <div className="flex  mt-[2rem] gap-6">
            <VscKey className=" text-[#EB6C59] rounded-full bg-[#FEF4F3] sm:w-[4.5rem] sm:h-[4.5rem] h-[5rem] w-[7rem] p-5 " />
            <div>
              <h1 className="font-semibold pb-2">Mortgage Services</h1>
              <p className="">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus
                ultricies auctor.
              </p>
            </div>
          </div>

          <div className="flex  mt-[2rem] gap-6">
            <HiOutlineCurrencyRupee className=" text-[#EB6C59] rounded-full bg-[#FEF4F3]  sm:w-[4.5rem] sm:h-[4.5rem] h-[5rem] w-[7rem] p-5 " />
            <div>
              <h1 className="font-semibold pb-2">Currency Services</h1>
              <p className="">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus
                ultricies auctor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
