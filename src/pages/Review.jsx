import { FaStar } from "react-icons/fa";const Review = () => {
  return (
    <>
     <div className="bg-[#F7F7F7] pb-[4rem]">
     <div className="flex justify-between container w-[100%] mx-auto ">
        <div className="mt-[10rem]">
            <div>
            <h1 className="text-[2rem] font-semibold">People Love Living with Realton</h1>
            <p className="text-[0.85rem]">Aliquam lacinia diam quis lacus euismod</p>
            </div>
            <div className="flex gap-[5rem] mt-[3rem]">
                <div>
                  <h1 className="text-[2.5rem] font-semibold">80%</h1>
                  <p className="text-[0.85rem]">Completed Property</p>
                </div>
                <div>
                  <h1 className="text-[2.5rem] font-semibold">99%</h1>
                  <p className="text-[0.85rem]">Satisfied Customers</p>
                </div>
                <div>
                  <h1 className="text-[2.5rem] font-semibold">50%</h1>
                  <p className="text-[0.85rem]">Home Ownership</p>
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
                <img src="images/reviewImage.jpg" />
                <div className="ml-4">
                    <h1 className="font-semibold text-[0.85rem] mb-2">Leslie Alexander</h1>
                    <p className="text-[0.85rem]">Nintendo</p>
                </div>
              </div>
        </div>
     </div>
        </div> 
    </>
  )
}

export default Review
