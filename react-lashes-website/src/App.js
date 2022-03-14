import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import Navbar from './Nav';
import About from './About';
import Footer from './Footer';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import Gallery from './Gallery';
import { Route, BrowserRouter as Router, HashRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router basename='/react-lashes-website'>
        <Switch>
          <Route path={'/'} element={<Home/>} />
          <Route exact path={"/contact"} element={<Contact/>} />
          <Route exact path={"/gallery"} element={<Gallery/>}/>
        </Switch>
       <Footer />
       </Router>
    </div>
  );
}

export default App;
