import React from 'react';
function Brokerage() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-5'>
                    <h3 className='mt-5 text-center  text-primary'>Brokerage Calculator</h3>
                    <p className='text-muted mt-5'>
                            <ul>
                                <li>Free Equity Delivery: ₹0 brokerage on all equity delivery investments.</li>
                                <br></br>
                                <li>Intraday and F&O Trades: Flat ₹20 per executed order across equity, currency, and commodity trades.</li>
                                <br></br>
                                <li>Free Direct Mutual Funds: ₹0 commissions and DP charges on all direct mutual fund investments.</li>
                                <br></br>
                                <li>Secure Trading: Bank-level security with two-factor authentication for all trading activities.</li>
                            </ul>
                    </p>
                </div>
                <div className='col-md-2 text-center'></div>
                <div className='col-md-5'>
                    <h3 className='mt-5 text-center text-primary'> List of Charges</h3>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;