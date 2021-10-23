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
          <div className="contact-text-cont">
            <p>Përshëndetje, unë jam Shenasi Islami nga elektro System. Ne jemi të vendosur në Nerashtë dhe jemi të kënaqur të ofrojmë shërbimet tona në komunën e Tearcës dhe Tetovës. Ju lutem mos ngurroni të kontaktoni për çdo shqetësim që keni në lidhje me punën elektrike. Do të donim të ishim në gjendje të ndihmonim, pavarësisht nga madhësia apo kompleksiteti i punës.</p>
          </div>
          <div className="contact-details-cont">
            <div className="contact-details">
              <p>Shenasi Islami</p>
              <div className="phone cont">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:072548022">072-548-022</a>
              </div>
              <div className="email cont">
                <i className="far fa-envelope"></i>
                <a href="mailto:elektrosystem2010@gmail.com">elektrosystem@mail.com</a>
              </div>
              <div className="social-media-links-container">
                <Link
                  className='social-link'
                  to={'//www.facebook.com/ElektroSystemNerasht'}
                  target='_blank'
                  aria-label='Facebook'
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  className='social-link'
                  to={'//www.instagram.com/elektrosystem.nerasht'}
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
