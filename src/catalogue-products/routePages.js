import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import AbonoInfo from './products_pages/abonoInfo';
import BacterSPInfo from './products_pages/bacterSPInfo';
import EnraizadorInfo from './products_pages/enraizadorInfo';
import FungicidaInfo from './products_pages/fungicidaInfo';

const RoutePages =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                path="/" 
                element={<App />}/>
                <Route 
                path="/acerca-bacter-sp" 
                element={<BacterSPInfo />}/>
                <Route 
                path="/acerca-abono-solido" 
                element={<AbonoInfo />}/>
                <Route path="/acerca-enraizador"
                element={<EnraizadorInfo />}/>
                <Route path="/acerca-fungicida"
                element={<FungicidaInfo />}/>
            </Routes> 
        </BrowserRouter>
    );
};

export default RoutePages;