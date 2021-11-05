import React from 'react';
import './JobCards.css';
import JobCardItem from './JobCardItem';

function JobCards() {
  return (
    <div className="jobs-section-container">
      <div className="job-cards-container">
        <ul className="job-cards">
          <JobCardItem text="Zëvendësimi i njësive të konsumatorit" />
          <JobCardItem text="Instalimi/përmirësimi i ndriçimit LED" />
          <JobCardItem text="Raporti i gjendjes së instalimeve elektrike (EICR)" />
          <JobCardItem text="Ndriçimi dhe energjia e jashtme" />
          <JobCardItem text="Rregullim i paisjeve elektrike shtëpiake" />
          <JobCardItem text="Ndriçim/kamera sigurie" />
        </ul>
      </div>
    </div>
  );
}

export default JobCards;
