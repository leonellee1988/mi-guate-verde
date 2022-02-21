import React, { Fragment } from 'react';
import './productsmenuStyle.css';
import '../catalogue-products/catalogueProducts.js';

const ProductsMenu =()=>{
    return(
        <Fragment>

            <div className="title-part">Familia de productos</div>

            <div className="container-products-menu" id="products-menu">

                <div className="container-farming">
                    <div className="farming-title">Agricultura</div>
                    <div className="farming-icon">
                        <a href="#farming-catalogue"><i className="fas fa-seedling plant"></i></a>
                    </div>
                </div>

                <div className="container-garden">
                    <div className="garden-title">Jardinería</div>
                    <div className="garden-icon">
                        <a href="#garden-catalogue"><i className="fas fa-spa flower"></i></a>
                    </div>
                </div>

            </div>

        </Fragment>
    );
};

export default ProductsMenu;