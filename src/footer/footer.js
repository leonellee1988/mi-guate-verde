import React, { Fragment } from 'react';
import './footerStyle.css';

const Footer =()=>{
    return(
        <Fragment>
            
            <div 
            className="principal-container-contact" 
            id="contact-us">

                <div className="container-info">
                    <div className="special-style">Contáctanos:</div>
                    <div className="info-item">Dirección: Diagonal 7, 12-247 zona 5, Alameda Chimaltenango</div>
                    <div className="info-item">Tel: (502)4154-4632</div>
                    <div className="info-item">Email: guateverde@rocketmail.com</div>
                </div>

                <div className="principal-container-net">
                    <div className="special-style">Síguenos en redes sociales:</div>
                    <div className="container-net">
                        <div className="net-item">
                            <a href="https://www.facebook.com/miguateverde">
                                <i className="fab fa-facebook-square"></i></a>
                        </div>

                        <div className="net-item">
                            <a href="https://www.instagram.com/miguateverde">
                                <i className="fab fa-instagram"></i></a>
                        </div>

                        <div className="net-item">
                            <a href="https://wa.me/50241544632?text=Podría%20proporcionarme%20información%20sobre%20los%20productos%20y%20servicios?">
                                <i className="fab fa-whatsapp-square"></i></a>
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
};

export default Footer;