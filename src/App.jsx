import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import DiscoverProperties from './components/DiscoverProperties'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import BuyElement from './pages/BuyElement'
import InquiryForm from './components/InquiryForm'
import RealEstate from './components/RealEstate'
import Review from './components/Review'
import WhyChooseUs from './components/WhyChooseUs'
// import ExploreApartments from './components/ExploreApartments'
import Contact from './pages/Contact'
import BlogDiscription from './pages/BlogDiscription'
import AddProperty from "./pages/AddProperty";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Hero  />} />
          <Route path="/discoverProperties" element={<DiscoverProperties />} />
          <Route path="/whyChooseUs" element={<WhyChooseUs />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/Blog" element={<Blog />} />
          <Route path="/RealEstate" element={<RealEstate />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/buy-element" element={<BuyElement />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          {/* <Route path="/ExploreApartments" element={<ExploreApartments />} /> */}
          <Route path="/blog/:id" element={<BlogDiscription />} />
          <Route path="/AddProperty" element={<AddProperty />} />
          <Route path="/for-rent" element={<BuyElement />} />
          <Route path="/for-sale" element={<BuyElement />} />
          <Route path="/blog-description" element={<BlogDiscription />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
