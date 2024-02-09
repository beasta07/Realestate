// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ApartmentType from './components/ApartmentType'
import BuySell from './components/BuySell'
import Discover from './components/Discover'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PropertyBuy from './components/PropertyBuy'
import Bestdeal from './pages/Bestdeal'
import Blog from './pages/Blog'
import { CarouselWithContent } from './pages/CarouselWithContent'
import Navbars from './components/Navbars'
import Contact from './pages/Contact'
import MainBlog from './pages/MainBlog'
import AddProperty from './pages/AddProperty'
import BlogDiscription from './pages/BlogDiscription'
import AboutUs from './pages/AboutUs'
import BuyElement from './components/BuyElement'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import LoginModal from './components/LoginModal'
import SellElement from './components/SellElement'
import DiscoverComp from './components/DiscoverComp'
import Register from './pages/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbars />
        
        <Routes>
          <Route path='/carousel' element={<CarouselWithContent />} />
          <Route path='/' element={<Hero />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/discovercomp/:id' element={<DiscoverComp />} />
          <Route path='/apartmenttype' element={<ApartmentType />} />
          <Route path='/propertybuy' element={<PropertyBuy />} />
          <Route path='/buysell' element={<BuySell />} />
          <Route path='/bestdeal' element={<Bestdeal />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/mainblog' element={<MainBlog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/addproperty' element={<AddProperty />} />
          <Route path='/blogdiscription/:id' element={<BlogDiscription />} />
          <Route path='/buyelement/:id' element={<BuyElement />} />
          <Route path='/sellelement/:id' element={<SellElement />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <LoginModal />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
