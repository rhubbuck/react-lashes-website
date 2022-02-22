import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import Navbar from './Nav';
import About from './About';
import Footer from './Footer';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Hero />
       <About />
       <Contact />
       <Services />
       <Footer />
    </div>
  );
}

export default App;
