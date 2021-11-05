import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ scrollToTop }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showLinks = () => {
    if (window.innerWidth >= 960) {
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', showLinks)

    return () => {
      window.removeEventListener('resize', showLinks)
    }
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className="nav-item" onClick={scrollToTop}>
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Kryefaqja
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                Shërbimet
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                Fotografitë
              </Link>
            </li>
            <li className={click ? "nav-item-hide" : "nav-item"} >
              <Link to='/reviews' className="nav-links" onClick={closeMobileMenu}>
                 Klientët
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                Kontakti
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
