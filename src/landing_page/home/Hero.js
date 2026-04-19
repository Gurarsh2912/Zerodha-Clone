import React from 'react';

function Hero() {
    return ( <div className="container p-5 mb-5">
        <div className="row text-center">
            <img className='mt-5' src = 'media/images/homeHero.png' alt = 'HeroImage'/>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button  className='p-3 btn btn-primary fs-5 mt-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
        </div>

    </div> );
}

export default Hero;