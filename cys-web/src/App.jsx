import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../src/Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Mission from './Components/Mission/Mission'
import About from './Components/About/About';
import Timeline from '../src/Components/Timeline/Timeline'
import './App.css'
import Footer from '../src/Components/Footer/Footer'
import Events from "../src/Components/Events/Events"

function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <About/>
    <Mission/>
    <Timeline />
    <Events />
    <Footer />
    </>
  )
}

export default App
