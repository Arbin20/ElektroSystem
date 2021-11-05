import React from 'react';
import './HeroSection.css';
import JobCards from '../job-cards/JobCards';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="image-container">
          <img className="cta-image" src="/images/cta-image.jpg" alt="" />
          <div className="main-text-cont">
            <h2 className="main-title">Elektro System</h2>
            <h3 className="strapline">Nerasht</h3>
          </div>
        </div>
        <div className="areas-list-container">
          <div className="intro">
            <h2 className="black-heading">Elektro System</h2>
            <p className="areas-text">Për të gjitha nevojat tuaja elektrike, ne përpiqemi të ofrojmë një shërbim miqësor dhe profesional, duke u krenuar me cilësinë e punës sonë. Mos ngurroni të kontaktoni në lidhje me çdo shqetësim që mund të keni në lidhje me energjinë elektrike. Do të donim të dëgjonim nga ju!</p>
          </div>
          <div className="areas">
            <h2 className="black-heading">Vendet ku punojmë:</h2>
            <ul className="areas-list">
              <li className="areas-list-item">Komuna e Tearcës</li>
              <li className="areas-list-item">Komuna e Tetovës</li>
            </ul>
          </div>
          <p className="areas-text-2"></p>
          <div className="call-us-cont">
            <h1 className="call-us-now">Telefononi në numrin tonë:</h1>
            <a className="number" href="tel:072548022">
072-548-022</a>
          </div>
        </div>
        < JobCards />
      </div>
    </section>
  );
}

export default HeroSection;
