import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import './App.css'
import DiscoverProperties from './components/DiscoverProperties'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import BuyElement from './components/BuyElement'
import InquiryForm from './components/InquiryForm'
import RealEstate from './components/RealEstate'
import Review from './components/Review'
import WhyChooseUs from './components/WhyChooseUs'
// import ExploreApartments from './components/ExploreApartments'
import Contact from './pages/Contact'
import BlogDiscription from './pages/BlogDiscription'
import AddProperty from "./pages/AddProperty";
import Buy from "./pages/Buy"
import SellElement from "./components/SellElement";
import Sell from "./pages/Sell";
import Register from "./pages/Register"
import { useEffect } from 'react';
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <ScrollToTop/>
      
      <Routes>
        <Route path="/" element={<Hero  />} />
          <Route path="/discoverProperties" element={<DiscoverProperties />} />
          <Route path="/whyChooseUs" element={<WhyChooseUs />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/Blog" element={<Blog />} />
          <Route path="/RealEstate" element={<RealEstate />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />


          <Route path="/register" element={<Register />} />


          <Route path="/buyelement/:id" element={<BuyElement />} />
          <Route path="/InquiryForm" element={<InquiryForm />} />
          {/* <Route path="/ExploreApartments" element={<ExploreApartments />} /> */}
          <Route path="/blog/:id" element={<BlogDiscription />} />
          <Route path="/AddProperty" element={<AddProperty />} />
          <Route path="/for-rent" element={<BuyElement />} />
          <Route path="/sellelement/:id" element={<SellElement />} />
          <Route path="/blogdiscription/:id" element={<BlogDiscription />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
