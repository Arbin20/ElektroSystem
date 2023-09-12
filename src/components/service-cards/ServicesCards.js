import React from 'react';
import ServiceCardItem from '../service-cards/ServiceCardItem';
import './ServicesCards.css';

function ServicesCard() {
  return (
    <section className="services-section">
      <div className="services-section-container">
        <h2 className="services-title">Shërbimet</h2>
        <div className="services-cards-container">
          <ul className="service-cards">
            <ServiceCardItem
              imagesrc='/images/img1.jpg'
              iconsrc='/images/img1.png'
              title="Motor për Dyer"
              text="Motor i cili shërben për levizjen e dyerve në mënyrë automatike duke shfrytëzuar senzorët, kartelat e indetifikimit, telefon, si dhe me telekomandën e motorit." />
            <ServiceCardItem
              imagesrc='/images/inspection.jpg'
              iconsrc='/images/icon-inspection.jpg'
              title="Raporti i gjendjes së instalimeve elektrike (EICR)"
              text="Tani është një kërkesë e detyrueshme për qiradhënësit që të kenë një EICR për çdo pronë shtëpiake ose komerciale me qira - të paktën çdo 5 vjet, ose në fillim të një qiraje të re."
            />
            <ServiceCardItem
              imagesrc='/images/nerasht4.png'
              iconsrc='/images/icon-outdoor-lighting.jpg'
              title="Ndriçimi i Jashtëm"
              text="Pavarësisht nëse keni një zonë jashtë që dëshironi të ndriçoni, një prizë të jashtme duke shtuar, keni një ndërtesë shtesë që dëshironi të keni energji, ose keni instaluar stolisje ose shtrim, ne do të jemi në gjendje t'ju ndihmoj me këtë."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
