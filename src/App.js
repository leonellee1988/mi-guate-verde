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
      <AboutUs/>
      <CatalogueProducts/>
      <OrganicKnowledge/>
      <OurCustomers/>
      <Footer/>
    </Fragment>
  );
};

export default App;