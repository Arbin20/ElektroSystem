import React from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to='/'>
          <img className="main-logo" src="/images/logo.png" alt="logo" onClick={scrollToTop} />
        </Link>
        <div className="info-container">
          <div className="phone-container">
            <i className="header-icon fas fa-phone-alt"></i>
            <h4>Telefoni</h4>
            <a className="mob" href="tel:071-722-453">071-722-453</a>
          </div>
        </div>
      </div>
      <Navbar scrollToTop={scrollToTop} />
    </header>
  );
}

export default Header;
