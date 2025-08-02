import React from 'react';
import { Link } from 'react-router-dom';
import CreateTicket from './CreateTicket';
import Hero from './Hero';
function SupportPage() {
    return ( 
        <>
        <Hero />
        <CreateTicket />
        </>
        
        
     );
}

export default SupportPage;