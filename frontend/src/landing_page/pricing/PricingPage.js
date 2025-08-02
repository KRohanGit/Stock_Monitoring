import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../../OpenAccount';
function PricingPage() {
    return ( 
        <>
        <Hero />
        <OpenAccount />
        <Brokerage />
        </>
     );
}

export default PricingPage;