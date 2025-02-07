import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Whatsapp from './Images/Whatsapp.png';
import Top from './Images/Top.png';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Nit from './Components/Nit/Nit';
import Ply from './Products/Ply/Ply';
import PInsulation from './Products/PInsulation/PInsulation';
import LMF from './Products/LMF/LMF';
import LAF from './Products/LAF/LAF';
import SBLP from './Products/SBLP/SBLP';
import Faqs from './Resources/Faqs/Faqs';
import Gallery from './Resources/Gallery/Gallery';
import ThreePly from './Products/Ply/3Ply/ThreePly';
import FourPly from './Products/Ply/4Ply/FourPly';
import Multiply from './Products/Ply/MultiPly/MultiPly';
import Insulation1 from './Products/PInsulation/Insulation1/Insulation1';
import Insulation2 from './Products/PInsulation/Insulation2/Insulation2';
import Insulation3 from './Products/PInsulation/Insulation3/Insulation3';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='App'>
      <Router>
      <Navbar />
      <Routes>
      <Route path="*" exact element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/LAF" element={<LAF />} />
      <Route path="/LMF" element={<LMF />} />
      <Route path="/Ply" element={<Ply />} />
      <Route path="/ThreePly" element={<ThreePly />} />
      <Route path="/FourPly" element={<FourPly />} />
      <Route path="/MultiPly" element={<Multiply />} />
      <Route path="/Insulation" element={<PInsulation />} />
      <Route path="/Insulation1" element={<Insulation1 />} />
      <Route path="/Insulation2" element={<Insulation2 />} />
      <Route path="/Insulation3" element={<Insulation3 />} />
      <Route path="/SBLP" element={<SBLP />} />
      <Route path="/Glr" element={<Gallery />} />
      <Route path="/Faqs" element={<Faqs />} />
      </Routes>
      <Footer/>
      <Nit/>
      <div className="Whatsapp">
        <div className="whts-img">
          <a
            href="https://wa.me/9023407993"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon"
          >
            <img src={Whatsapp} className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="Topimg">
        <div className="TP-Img" onClick={scrollToTop}>
          <img src={Top} className="img-fluid" alt="Scroll to top" />
        </div>
      </div>
      </Router>
    </div>
  )
}
