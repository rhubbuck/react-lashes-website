import React from 'react';
import Hero from './Hero';
import Navbar from './Nav';
import About from './About';
import Services from './Services';
import Info from './Info';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        {/* <About /> */}
        <Info />
    </div>
  )
}

export default Home