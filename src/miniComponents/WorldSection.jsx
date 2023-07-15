import React from 'react';
import './worldSection.scss';

const WorldSection = () => {
  return (
    <div className='world-section'>
      <h1>World Stats</h1>
      <div className='world-section-container'>
        <div className='world-section-content '>
          <p>Recovered:</p>
          <p className='first-number'>67482</p>
        </div>
        <div className='world-section-content '>
          <p>Deaths:</p>
          <p className='second-number'>206981911</p>
        </div>
        <div className='world-section-content '>
          <p>ActiveCases:</p>
          <p className='third-number'>479599711</p>
        </div>
        <div className='world-section-content ' >
          <h3 className='last-stats'>Country Stats</h3>
        </div>
      </div>
    </div>
  )
};

export default WorldSection;