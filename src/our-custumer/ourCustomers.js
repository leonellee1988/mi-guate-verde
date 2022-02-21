import React, { Fragment } from 'react';
import './customersStyle.css';
import caoba from './caobaFarms.jpg';
import orquideas from './orquideasSYM.jpg';

const OurCustomers =()=>{
    return(
        <Fragment>

            <div 
            className="customer-title" 
            id="our-customer">Nuestros clientes</div>

            <div className="container-customer-img">
                <img 
                src={caoba}
                alt="Caoba Farms logo" 
                className="caoba-img"/>
                <div className="botanika">Vivero Botanika</div>
                <img 
                src={orquideas}
                alt="Orquideas SYM logo" 
                className="orquideas-img"/>
            </div>

        </Fragment>
    );
};

export default OurCustomers;