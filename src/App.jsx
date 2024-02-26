// import React from 'react'
import './app.css'


import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componantes/Homee/Home'
import About from "./componantes/About/About"
import Gallary from './componantes/Gallary/Gallary'
import Contact from './componantes/Contact/Contact';
import NotFound from './componantes/NotFound/NotFount'
import Navbar from './componantes/Navbar/Navbar';
import Footer from './componantes/Footer/Footer';
import Top from './componantes/Top/Top';


function App() {
  return (

    <BrowserRouter>
    <Top/>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/Gallary' element = {<Gallary/>} />
      <Route path='Contact' element = { <Contact/>} />
      <Route path='NotFound' element = { <NotFound/>} />
      <Route path='*' element = {<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  
   
  )
}
export default App
