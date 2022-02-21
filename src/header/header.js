import React, { Fragment } from 'react';
import './headerStyle.css';
import '../about-us/aboutUs.js';
import '../products-menu/productsMenu.js';
import '../organic-knowledge/organic-knowledge.js';
import '../our-custumer/ourCustomers.js';
import '../footer/footer.js';

const Header =()=>{

    const[index,setIndex]=React.useState(1);

    const handleIndex =(event)=>{
        event.preventDefault();
        setIndex(index + 1);
    }

    const handleIndexTwo =()=>{
        setIndex(index - 1);
    }

    const handleIndexThree =()=>{
        setIndex(index - 1);
    }

    const handleIndexFour =()=>{
        setIndex(index - 1);
    }

    const handleIndexFive =()=>{
        setIndex(index - 1);
    }

    const handleIndexSix =()=>{
        setIndex(index - 1);
    }

    return(
        <Fragment>

            {/*Horizontal menu for HD, FHD, QHD, UHD*/}

            <div 
            className="container-header" 
            id="main-menu">

                <div className="container-logo">
                    <div className='logo'><i className="fas fa-leaf logo-item"></i></div>
                </div>

                <div className="container-title">
                    <div 
                    className='title'>Mi Guate Verde</div>
                </div>

                <ul className="container-menu">
                    <li className="item-menu">
                        <a href="#about-us">Nosotros</a>
                    </li>
                    <li className="item-menu">
                        <a href="#garden-catalogue">Productos</a>
                    </li>
                    <li className="item-menu">
                        <a href="#organic-knowledge">Videos</a>
                    </li>
                    <li className="item-menu">
                        <a href="#our-customer">Clientes</a>
                    </li>
                    <li className="item-menu">
                        <a href="#contact-us">Contacto</a>
                    </li>
                </ul>

            </div>

            {/*Vertical menu for mobiles and tablets*/}
                
            <div  className="container-header-mobile">
                <div className="container-logo-mobile">
                    <div><i className="fas fa-leaf logo-item-mobile"></i></div>
                </div>

                <button 
                className="container-button-menu" 
                onClick={handleIndex}>
                <i className="fas fa-bars button-menu"></i>
                </button>

                <div className=
                {
                    index % 2 === 0
                    ? "container-menu-mobile"
                    : "invisible" 
                } id="menu-mobile">
                    <button 
                    className="option-menu" 
                    onClick={handleIndexTwo}><a 
                    id="aboutUs" 
                    href='#about-us'>Nosotros</a>
                    </button>

                    <button 
                    className="option-menu" 
                    onClick={handleIndexThree}><a 
                    id="productsMenu"
                    href='#garden-catalogue'>Productos</a>
                    </button>

                    <button 
                    className="option-menu" 
                    onClick={handleIndexFour}><a 
                    id="organicKnowledge"
                    href='#organic-knowledge'>Videos</a>
                    </button>

                    <button 
                    className="option-menu" 
                    onClick={handleIndexFive}><a 
                    id="ourCustomer"
                    href='#our-customer'>Clientes</a>
                    </button>

                    <button 
                    className="option-menu" 
                    onClick={handleIndexSix}><a 
                    id="contactUs"
                    href='#contact-us'>Contacto</a>
                    </button>
                </div> 
            
            </div>

        </Fragment>
    );
};

export default Header;  