
const InquiryForm = () => {
  return (
    <div className=" flex justify-between pt-[5rem] container w-[100%] mx-auto mb-[4rem]">
      <div>
        <h1 className="font-semibold text-[2rem]">Real Estate Inquiry Form</h1>
        <p>As Complexity starts to increase</p>
        <div className="py-8">
            <p className=" font-semibold">Inquiry type</p>
        <form className="w-[70%] z-40">
        <select className="block bg-transparent    border w-[30rem] mt-6 mb-10 border--200 rounded-xl text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 " id="grid-state">
          <option>Apartments</option>
          <option>Bunglow</option>
          <option>Houses</option>
          <option>Office</option>
          <option>Villa</option>

        </select>
        <div className="flex gap-5">
          <div>
        <p className="font-semibold">Personel Role</p>

        <select className="block  bg-transparent   border w-[15rem] mt-6 mb-10 border-gray-300 rounded-xl text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 " id="grid-state">
        <option>Mr</option>
          <option>Mrs</option> </select>
          </div>
          <div>
        <p className=" font-semibold">Personel Name</p>

        <input type='text' placeholder="Enter you Name" className="block   border w-[15rem] mt-6 mb-10 border-gray-300 rounded-xl text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 " id="grid-state" />
        
          </div>

        </div>
        <div>
        <p className=" font-semibold">Email</p>

        <input type='email' placeholder="Enter you Email" className="block   border w-[30rem] mt-6 mb-10 border-gray-300 rounded-xl text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 " id="grid-state" /></div>
        <div className="flex gap-5">
          <div>
        <p className="font-semibold">Max Price</p>

        
        <input type='number' min="0" placeholder="$90" className="block appearance-none   border w-[15rem] mt-6 mb-10 border-gray-300 rounded-xl text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 " id="grid-state" />
          </div>
          <div>
        <p className=" font-semibold">Min Size</p>

        <input type='text' placeholder="20" className="block   border w-[15rem] mt-6 mb-10 border-gray-300 rounded-xl text-black py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white  hover:border-blue-600 " id="grid-state" />
        
          </div>


        </div>

        <button className="text-[white] rounded-md bg-[#EB6753] w-[12rem] p-3 font-semibold hidden sm:block mb-[5.6rem]">Register Now</button>



 </form>
                  </div>
      </div>
      <div>
        <img src="images/inquiry.jpg" />
      </div>
    </div>
  )
}

export default InquiryForm
