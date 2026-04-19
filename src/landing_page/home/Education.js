import React from 'react';

function Education() {
    return ( <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img style={{width:"70%"}} src='media/images/index-education.svg'/>
            </div>
            <div className='col-6'>
                <h1 className='mb-3 fs-4'>Free and open market education</h1>
                <p className='mt-4'> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a className='mb-5' href=''> Varsity </a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href=''>TradingQ&A </a>
            </div>
        </div>
    </div> );
}

export default Education;