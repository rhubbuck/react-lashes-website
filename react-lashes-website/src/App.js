import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import Navbar from './Nav';
import About from './About';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Hero />
       <About />
    </div>
  );
}

export default App;
