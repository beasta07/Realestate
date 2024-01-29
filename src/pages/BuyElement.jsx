import Navbar from "../components/Navbar"

const BuyElement = () => {
  return (
    <>
    <Navbar/>
      <div className="container w-[100%] mx-auto mt-[4rem] leading-[3rem]">
        <div className="flex">
            <div>
                <h1 className="text-[2rem] font-semibold">Equestrian Family Home</h1>
                <p>New York City, CA, USA</p>
                <div className="flex">
                <div className="rounded-full bg-[#EB6753] w-[1rem] h-[1rem] mt-1"></div>
                <div className="text-[#EB6753]">For sale</div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BuyElement
