
const RealEstate = () => {
  return (
    <div className="bg-[#FEF7F6]">
      <div className="flex justify-between container w-[100%] mx-auto mt-[5rem] ">
        <div className="pt-[5rem]">
            <h1 className="text-[2rem] font-semibold">Become a Real Estate Agent</h1>
            <p className="py-4 text-[0.85rem] pb-[2rem]">We only work with the best companies around the globe to survey</p>
            <button className="text-[white] rounded-md bg-[#EB6753] w-[12rem] p-3 font-semibold hidden sm:block mb-[5.6rem]">Register Now</button>
        </div>
        <div>
            <img src="/images/estate.png" className="absolute -ml-[25rem] -mt-[5rem] hidden sm:block"/>
        </div>


      </div>
    </div>
  )
}

export default RealEstate
