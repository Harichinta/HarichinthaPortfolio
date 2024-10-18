

import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const navRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (id) => {
    setActiveId(id);
    
    // Close navbar if it's opened (on mobile view) after clicking a link
    if (navRef.current && window.innerWidth < 992 && navRef.current.classList.contains('show')) {
      document.querySelector('.navbar-toggler').click(); // Triggers Bootstrap's toggle behavior to close the navbar
    }
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light customnav ${isScrolled ? 'navblur' : ''}`}>
        <div className="container-fluid mx-auto" style={{ width: "90%" }}>
          <span className="navbar-brand">HC</span><span className='brand'></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText" ref={navRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${activeId === 1 ? 'navactive' : ''}`} onClick={() => handleNavLinkClick(1)} aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeId === 2 ? 'navactive' : ''}`} onClick={() => handleNavLinkClick(2)} href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeId === 3 ? 'navactive' : ''}`} onClick={() => handleNavLinkClick(3)} href="#I_Do">What I Do</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeId === 4 ? 'navactive' : ''}`} onClick={() => handleNavLinkClick(4)} href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeId === 5 ? 'navactive' : ''}`} onClick={() => handleNavLinkClick(5)} href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeId === 6 ? 'navactive' : ''}`} onClick={() => handleNavLinkClick(6)} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

