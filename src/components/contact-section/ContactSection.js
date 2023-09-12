import React from 'react';
import './ContactSection.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

function ContactSection({ isHomePage }) {
  return (
    <section className={isHomePage ? "contact-section" : "contact-section-standalone"}>
      <div className="contact-section-container">
        <h1 className="contact-title">Kontakti</h1>
        <div className="contact-info-container">
          <div className="contact-details-cont">
            <div className="contact-details">
              <p>Adhurim Qazimi & Fluturim Bejtuli</p>
              <div className="phone cont">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:072548022">070-329-113</a>
              </div>
              <div className="email cont">
                <i className="far fa-envelope"></i>
                <a href="mailto:adhurim.qazimi@gmail.com">adhurim.qazimi@gmail.com</a>
              </div>
              <div className="social-media-links-container">
                <Link
                  className='social-link'
                  to={'//www.facebook.com/#'}
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  className='social-link'
                  to={'//www.instagram.com/#'}
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
            <img className="contact-logo" src="/images/logo-2.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </section>

  );
}

export default ContactSection;
