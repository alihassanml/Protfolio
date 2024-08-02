import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Main from "./Main";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Home() {


  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Router>
      <div className="main-1 ">
        <div className="left-home">
          <ul className="list-item">
            <Link to="/" className="list-item-item">
            <i className="fa-solid fa-house"></i> 
            Home
            </Link>
            <Link to="/About" className="list-item-item">
            <i className="fa-solid fa-person"></i>  About
            </Link>
            <Link to="/Project" className="list-item-item">
            <i className="fa-solid fa-industry"></i>Project
            </Link>
            <Link to="/Contact" className="list-item-item">
            <i className="fa-solid fa-id-badge"></i> Contact
            </Link>
          </ul>
        </div>
        <div className="right-home"  data-aos="flip-left">
          <Routes>
            <Route path="/" element={<Main></Main>} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
