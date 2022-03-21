import React from 'react';
import Hero from './Hero';
import Navbar from './Nav';
import About from './About';
import Footer from './Footer';
import Services from './Services';
import Info from './Info';
import Contact from './Contact';
import Background from './Background';
import BackgroundTwo from './BackgroundTwo';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        {/* <About /> */}
        {/* <Background /> */}
        <Services />
        <About />
        <Info />
        {/* <BackgroundTwo /> */}
    </div>
  )
}

export default Home