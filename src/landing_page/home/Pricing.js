import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <h2>Unbeatable Pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''>See Pricing</a>
                
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-3 ' > <img src='media/images/pricing0.svg'/> </div>
                        <div className='col-1 mt-3 fs-12 text-muted'>Free account opening</div>
                        <div className='col-3'> <img src='media/images/pricingEquity.svg'/> </div>
                        <div className='col-1 mt-3 fs-22 text-muted'>Free equity delivery
and direct mutual funds</div>
                        <div className='col-3'> <img src='media/images/otherTrades.svg'/> </div>
                        <div className='col-1 mt-3 fs-12 text-muted'>Intraday and
F&O</div>
                        
                    
                    
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;