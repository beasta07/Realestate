import './App.css'
import Blogs2 from './Pages/Blogs2'
import Buy2 from './Pages/Buy2'
import Popular2 from './Pages/Popular2'
import Sale2 from './Pages/Sale2'
import Apartment from './components/Apartment'
// import Blogs from './components/Blogs'
import Cities from './components/Cities'
import Features from './components/Features'
import Filter2 from './components/Filter2'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Loginpage from './components/Loginpage'
import Navbar from './components/Navbar'
// import Navbar from './components/Navbar'
import Newaccount from './components/Newaccount'
// import Popular from './components/Popular'
import Property from './components/Property'
// import Register from './components/Register'
import Sellingoption from './components/Sellingoption'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero/>} /> 
      <Route path='/apartment' element={<Apartment/>} /> 
      <Route path='/property' element={<Property/>} /> 
      <Route path='/features' element={<Features/>} /> 
      <Route path='/cities' element={<Cities/>} /> 
      <Route path='/popular2' element={<Popular2/>} /> 
      <Route path='/blogs2' element={<Blogs2/>} /> 
      <Route path='/footer' element={<Footer/>} /> 
      <Route path='/loginpage' element={<Loginpage/>} /> 
      <Route path='/newaccount' element={<Newaccount/>} /> 
      <Route path='/sale2' element={<Sale2/>} /> 
      <Route path='/buy2' element={<Buy2/>} /> 
      <Route path='/filter2' element={<Filter2/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
