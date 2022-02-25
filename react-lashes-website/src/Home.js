import React from 'react';
import Hero from './Hero';
import Navbar from './Nav';
import About from './About';
import Footer from './Footer';
import Services from './Services';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
    </div>
  )
}

export default Home