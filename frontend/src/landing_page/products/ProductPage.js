import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <LeftSection 
                            imageURL="/assets/StockHomeImage.jpg" 
                            productName="Rapid Stocks" 
                            description="Experience seamless trading with our advanced platform. Get real-time market data, advanced charting tools, and lightning-fast execution." 
                            tryDemo="" 
                            learnMore="" 
                            googlePlay="" 
                            appStore=""
                        />
                        <RightSection 
                        imageURL="/assets/StockHomeImage.jpg" 
                            productName="TradeLink API" 
                            description="A secure and powerful trading API that lets developers build custom trading platforms, automate strategies, and access real-time market data with ease." 
                            tryDemo="" 
                            learnMore=""
                        />
                        <LeftSection 
                            imageURL="/assets/StockSupportImage.png" 
                            productName="FinEdge" 
                            description="A cutting-edge platform offering seamless trading, real-time analytics, and smart investment tools for modern investors." 
                            tryDemo="" 
                            learnMore="" 
                            googlePlay="" 
                            appStore=""
                        />
                        <RightSection
                        imageURL="/assets/StockHomeImage.jpg" 
                            productName="ClearPort" 
                            description="Your portfolio’s command center — view trades, analyze performance, download tax-ready reports, and track every rupee with clarity." 
                            tryDemo=""
                            learnMore=""
                             />
                        <LeftSection 
                            imageURL="/assets/StockHomeImage.jpg" 
                            productName="Invest Mate" 
                            description="Your personal guide to mastering investing — learn strategies, fundamentals, and trading skills with interactive lessons." 
                            tryDemo="" 
                            learnMore="" 
                            googlePlay="" 
                            appStore=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        
                    </div>
                </div>
            </div>
            <Universe />
        </div>
     );
}

export default ProductPage;