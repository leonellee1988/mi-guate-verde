import React, { Fragment } from 'react';
import './catalogueStyles.css';
import abono from './abono.png';
//import bactersp from './galon.png';
//import bactersm from  './galon02.png';
//import polisulfuro from './galon03.png';
import bacterspjar from './botella.png';
import bactersmjar from './botella02.png';
import carbonactjar from './cubeta.png';
import fungicidajar from './fung.png';
import enraizadorjar from './botella03.png';
import huertojar from './huerto.png';
import composterajar from './compost.png';  

const CatalogueProducts =()=>{
    return(
        <Fragment>

            {/*<div 
            className="title-farming-catalogue" 
            id="farming-catalogue">Productos agricultura</div>
            
            <div className="container-farming-products">
                <div className="product-farming-item">
                    <img 
                    src={bactersp} 
                    alt="bacter sp"
                    className='bacter-sp'/>
                    <div className="name-product">Bacter SP</div>
                </div>

                <div className="product-farming-item">
                    <img 
                    src={bactersm} 
                    alt=" bacter sm"
                    className='bacter-sm'/>
                    <div className="name-product">Bacter SM</div>
                </div>

                <div className="product-farming-item">
                    <img 
                    src={polisulfuro} 
                    alt="polisulfuro de calcio"
                    className='polisulfuro'/>
                    <div className="name-product">Polisulfuro de calcio</div>
                </div>

                <div className="product-farming-item">
                    <img 
                    src={abono} 
                    alt="abono solido"
                    className='abono'/>
                    <div className="name-product">Abono sólido</div>
                </div>
            </div>*/}

            <div 
            className="title-garden-catalogue" 
            id="garden-catalogue">Productos de jardinería</div>
            
            <div className="container-garden-products">
                <div className="product-garden-item">
                    <img 
                    src={bacterspjar} 
                    alt="bacter sp para jardín"
                    className='bacter-sp-gr'/>
                    <a  
                    href="/acerca-bacter-sp"
                    target="_blank" 
                    className="name-product">Bacter SP</a>
                </div>

                <div className="product-garden-item">
                    <img 
                    src={bactersmjar} 
                    alt="bacter sm para jardín"
                    className='bacter-sm-gr'/>
                    <div className="name-product">Bacter SM</div>
                </div>

                <div className="product-garden-item">
                    <img 
                    src={carbonactjar}
                    alt="carbón activado"
                    className='carbon-activado-gr'/>
                    <div className="name-product">Carbón activado</div>
                </div>

                <div className="product-garden-item">
                    <img src={fungicidajar}
                    alt="fungicida para jardín"
                    className='fungicida-gr'/>
                    <a  
                    href="/acerca-fungicida"
                    target="_blank" 
                    className="name-product">Fungicida</a>
                </div>
            </div>

            <div className="container-garden-products second-container">
                <div className="product-garden-item">
                    <img src={enraizadorjar}
                    alt="enraizador para jardín"
                    className='enraizador-gr'/>
                    <a  
                    href="/acerca-enraizador"
                    target="_blank" 
                    className="name-product">Enraizador</a>
                </div>

                <div className="product-garden-item">
                    <img src={huertojar}
                    alt="huertos"
                    className='huerto-gr'/>
                    <div className="name-product">Huertos</div>
                </div>

                <div className="product-garden-item">
                    <img src={composterajar}
                    alt="composteras"
                    className='compostera-g'/>
                    <div className="name-product">Composteras</div>
                </div>

                <div className="product-garden-item">
                    <img 
                    src={abono} 
                    alt="abono solido"
                    className='abono-gr'/>
                    <a  
                    href="/acerca-abono-solido"
                    target="_blank" 
                    className="name-product">Abono sólido</a>
                </div>
            </div>

        </Fragment>
    );
};

export default CatalogueProducts;