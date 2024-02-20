import './App.css'
import AboutUs from './Pages/AboutUs'
import Blogs2 from './Pages/Blogs2'
import Buy2 from './Pages/Buy2'
import Popular2 from './Pages/Popular2'
import Sale2 from './Pages/Sale2'
import Apartment from './components/Apartment'
// import Blogs from './components/Blogs'
import Cities from './components/Cities'
import Featuresmain from './Pages/Featuresmain'
import Filter2 from './components/Filter2'
import Footer from './components/Footer'
import Hero from './components/Hero'
// import Loginpage from './components/Loginpage'
import Navbar from './components/Navbar'
// import Navbar from './components/Navbar'
// import Newaccount from './components/Newaccount'
// import Popular from './components/Popular'
import Property from './components/Property'
// import Register from './components/Register'
import Sellingoption from './components/Sellingoption'
import ReactDOM from 'react-dom'
import BuyElement from "./Pages/BuyElement"
import Login from "./Pages/Register"
import Contact from './Pages/Contact'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import BlogDiscription from './Pages/BlogDiscription'
import Register from './Pages/Register'

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
    <Navbar/>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Hero/>} /> 
      <Route path='/apartment' element={<Apartment/>} /> 
      <Route path='/property' element={<Property/>} /> 
      <Route path='/featuresmain' element={<Featuresmain/>} /> 
      <Route path='/cities' element={<Cities/>} /> 
      <Route path='/popular2' element={<Popular2/>} /> 
      <Route path='/blogs2' element={<Blogs2/>} /> 
      {/* <Route path='/loginpage' element={<Loginpage/>} />  */}
      {/* <Route path='/newaccount' element={<Newaccount/>} />  */}
      <Route path='/sale2' element={<Sale2/>} /> 
      <Route path='/buy2' element={<Buy2/>} /> 
      <Route path='/filter2' element={<Filter2/>} /> 
      <Route path='/aboutus' element={<AboutUs/>} /> 
      <Route path='/buyelement/:id' element={<BuyElement/>} /> 
      <Route path='/contact' element={<Contact/>} /> 
      <Route path='/blogdiscription/:id' element={<BlogDiscription/>} /> 
      <Route path='/register' element={<Register />} />
      {/* <Route path='/register' element={<Register />} /> */}
      
    {/* <Login /> */}
    </Routes>
      <Footer/>
    </BrowserRouter>
    {/* <Login /> */}
    </>
  )
}

export default App
