import React, { Fragment } from 'react';
import './aboutusStyle.css';
import mgv01rect from './MGV01.jpeg';
import mgv02rect from './MGV02.jpeg';
import mgv03rect from './MGV03.jpeg';
import mgv04rect from './MGV04.jpeg';
import mgvuhd from './MGVUHD.jpeg';


const AboutUs =()=>{
    return(
        <Fragment>  
            
            {/*Single image for mobile and tablet*/}
            <div className="container-image-mobile" id="about-us">
                <div className='container-intro-message'>
                    <p className='intro-first-line'>Mi Guate Verde</p>
                    <p className='intro-second-line'>Abonos 100% orgánicos</p>
                </div>
                <div className='font-image'></div>
            </div>

           {/*Slider images for HD, FHD, QHD*/} 
            <div className="container-image">
                <img 
                src={mgv01rect} 
                alt="Somos mi guate verde"
                className='image-regular'/>
                <img 
                src={mgv02rect} 
                alt="Somos mi guate verde"
                className='image-regular'/>
                <img 
                src={mgv03rect} 
                alt="Somos mi guate verde"
                className='image-regular'/>
                <img 
                src={mgv04rect} 
                alt="Somos mi guate verde"
                className='image-regular'/>
            </div>

            {/*Single image for UHD*/}
            <div className="container-image-uhd">
                <img 
                src={mgvuhd} 
                alt="Somos mi guate verde"
                className='image-mobile-uhd'/>
            </div>
            
        </Fragment>
    );
};

export default AboutUs;