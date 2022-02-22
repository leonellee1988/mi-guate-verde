import React from 'react';
import abono_solido from './page_abono_solido.jpg';
import './productStyles.css';

const AbonoInfo = () => {
  return (
    <div>
        <img 
        src={abono_solido} 
        alt="Información sobre Abonos sólidos jardines"
        className="info-image"/>
    </div>
  );
};

export default AbonoInfo;