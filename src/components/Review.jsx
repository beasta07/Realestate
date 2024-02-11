import { FaStar } from "react-icons/fa";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };
  return (
    <>
     <div className="bg-[#F7F7F7] pb-[4rem]">
     <div className="sm:flex justify-between container w-[100%] mx-auto ">
        <div className="sm:mt-[10rem] mt-[5rem] sm:p-0 p-3">
            <div>
            <h1 className="text-[2rem] font-semibold">People Love Living with Realton</h1>
            <p className="text-[0.85rem]">Aliquam lacinia diam quis lacus euismod</p>
            </div>
            <div className="sm:flex gap-[5rem] mt-[3rem]">
                <div>
                  <h1 className="text-[2.5rem] font-semibold">80%</h1>
                  <p className="text-[0.85rem]">Completed Property</p>
                </div>
                <div className="sm:py-0 py-5">
                  <h1 className="text-[2.5rem] font-semibold">99%</h1>
                  <p className="text-[0.85rem]">Satisfied Customers</p>
                </div>
                <div>
                  <h1 className="text-[2.5rem] font-semibold">50%</h1>
                  <p className="text-[0.85rem]">Home Ownership</p>
                </div>
            </div>
        </div>
        <Slider {...settings} className="sm:w-[30%] w-[24rem]">

        <div className="bg-[white] rounded-xl w-[30%] mt-[6rem] p-5 shadow-lg">
            <h1 className="font-semibold text-[1rem] ">Great Work</h1>
            <p className="text-[0.85rem] font-semibold mt-5 w-[21rem] leading-6">Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance.And we did not on our original designs</p>
              <div className="flex py-5 gap-1">
                  <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819] text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />              
              </div>
              <hr/>
              <div className="flex mt-5">
                <img src="images/reviewImage01.jpg" />
                <div className="ml-4">
                    <h1 className="font-semibold text-[0.85rem] mb-2">Leslie Alexander</h1>
                    <p className="text-[0.85rem]">Nintendo</p>
                </div>
              </div>
        </div>

        <div className="bg-[white] rounded-xl w-[30%] mt-[6rem] p-5 shadow-lg">
            <h1 className="font-semibold text-[1rem] ">Great Work</h1>
            <p className="text-[0.85rem] font-semibold mt-5 w-[21rem] leading-6">Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance.And we did not on our original designs</p>
              <div className="flex py-5 gap-1">
                  <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819] text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />              
              </div>
              <hr/>
              <div className="flex mt-5">
                <img src="images/reviewImage02.jpg" />
                <div className="ml-4">
                    <h1 className="font-semibold text-[0.85rem] mb-2">Katie Smith</h1>
                    <p className="text-[0.85rem]">Waystar RoyCo</p>
                </div>
              </div>
        </div>

        <div className="bg-[white] rounded-xl w-[30%] mt-[6rem] p-5 shadow-lg">
            <h1 className="font-semibold text-[1rem] ">Great Work</h1>
            <p className="text-[0.85rem] font-semibold mt-5 w-[21rem] leading-6">Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance.And we did not on our original designs</p>
              <div className="flex py-5 gap-1">
                  <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819] text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />
              <FaStar className="text-[#E59819]  text-[0.85rem]" />              
              </div>
              <hr/>
              <div className="flex mt-5">
                <img src="images/reviewImage03.jpg" />
                <div className="ml-4">
                    <h1 className="font-semibold text-[0.85rem] mb-2">Floy Miles</h1>
                    <p className="text-[0.85rem]">Bank of America</p>
                </div>
              </div>
        </div>


        </Slider>
     </div>
        </div> 
    </>
  )
}

export default Review
