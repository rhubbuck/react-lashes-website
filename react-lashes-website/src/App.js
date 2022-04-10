import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import Gallery from './Gallery';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router >
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route exact path={"/contact"} element={<Contact/>} />
          <Route exact path={"/gallery"} element={<Gallery/>}/>
        </Routes>
       <Footer />
       </Router>
    </div>
  );
}

export default App;
