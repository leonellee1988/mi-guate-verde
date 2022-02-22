import React from 'react';
import enraizador from './page_enraizador.jpg';
import './productStyles.css';

const EnraizadorInfo = () => {
  return (
    <div>
        <img 
        src={enraizador} 
        alt="Información sobre Enraizador jardines"
        className="info-image"/>
    </div>
  );
};

export default EnraizadorInfo;