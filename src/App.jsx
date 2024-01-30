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

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbars />
        <Routes>
          <Route path='/carousel' element={<CarouselWithContent />} />
          <Route path='/' element={<Hero />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/apartmenttype' element={<ApartmentType />} />
          <Route path='/propertybuy' element={<PropertyBuy />} />
          <Route path='/buysell' element={<BuySell />} />
          <Route path='/bestdeal' element={<Bestdeal />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/mainblog' element={<MainBlog /> } />
          <Route path='/contact' element={<Contact />} />
          <Route path='/addproperty' element={<AddProperty />} />
          <Route path='/blogdiscription' element={<BlogDiscription />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
