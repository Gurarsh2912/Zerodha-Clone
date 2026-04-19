import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img style={{width:"90%"}} src='media/images/largestBroker.png' alt='largestBroker'/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <ul>
                        <li className='mt-3'><h4>Customer-first always</h4> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</li>
                        <li className='mt-3'><h4>No spam or gimmicks</h4> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</li>
                        <li className='mt-3'><h4>The Zerodha universe</h4> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</li>
                        <li className='mt-3'><h4>Do better with money</h4> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</li>
                    </ul>
                    <img src='media/images/pressLogos.png' style={{width:"80%"}} alt='pressLogos'/>
                    <div>
                    <a href='/' style={{paddingRight:100}}>Explore our Products</a>
                    <a href='/' className='mb=5'>Try Kite</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;