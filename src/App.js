import React, { Fragment } from 'react';
import Header from "./header/header";
import AboutUs from "./about-us/aboutUs";
//import ProductsMenu from "./products-menu/productsMenu";
import CatalogueProducts from "./catalogue-products/catalogueProducts";
import OrganicKnowledge from "./organic-knowledge/organic-knowledge";
import OurCustomers from "./our-custumer/ourCustomers";
import Footer from "./footer/footer";

function App() {
  return (
    <Fragment>
      <Header/>
    </Fragment>
  );
};

function AppTwo() {
  return (
    <Fragment>
      <AboutUs/>
    </Fragment>
  );
};

/*function AppThree() {
  return (
    <Fragment>
      <ProductsMenu/>
    </Fragment>
  );
};*/

function AppFour() {
  return (
    <Fragment>
      <CatalogueProducts/>
    </Fragment>
  );
};

function AppFive() {
  return (
    <Fragment>
      <OrganicKnowledge/>
    </Fragment>
  );
};

function AppSix() {
  return (
    <Fragment>
      <OurCustomers/>
    </Fragment>
  );
};

function AppSeven() {
  return (
    <Fragment>
      <Footer/>
    </Fragment>
  );
};

export { App };
export { AppTwo };
//export { AppThree };
export { AppFour };
export { AppFive };
export { AppSix };
export { AppSeven };