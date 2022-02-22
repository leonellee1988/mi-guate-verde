import React from 'react';
import bacter_sp from './page_bacter_sp.jpg';
import './productStyles.css';

const BacterSPInfo = () => {
  return (
    <div>
        <img 
        src={bacter_sp} 
        alt="Información sobre Bacter SP jardines"
        className="info-image"/>
    </div>
  );
};

export default BacterSPInfo;