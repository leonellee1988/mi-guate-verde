import React from 'react';
import fungicida from './page_fungicida.jpg';
import './productStyles.css';

const FungicidaInfo = () => {
  return (
    <div>
        <img 
        src={fungicida} 
        alt="Información sobre Fungicida jardines"
        className="info-image"/>
    </div>
  );
};

export default FungicidaInfo;