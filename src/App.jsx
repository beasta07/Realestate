import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import DiscoverProperties from './components/DiscoverProperties'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import BuyElement from './pages/BuyElement'
import InquiryForm from './pages/InquiryForm'
import RealEstate from './pages/RealEstate'
import Review from './pages/Review'
import WhyChooseUs from './pages/WhyChooseUs'
import ExploreApartments from './pages/exploreApartments'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="/discoverProperties" element={<DiscoverProperties />} />
          <Route path="/whyChooseUs" element={<WhyChooseUs />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/RealEstate" element={<RealEstate />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/buy-element" element={<BuyElement />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          <Route path="/ExploreApartments" element={<ExploreApartments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
