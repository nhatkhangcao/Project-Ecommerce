import React from 'react';

function Home(props) {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col text-center'>
                    <img className='w-50' src={'images/fruit.png'}/>
                </div>
                <div className='col text-center'>
                    <img  className='w-50' src={'images/fruit.png'}/>
                </div>
                <div className='col text-center'>
                    <img  className='w-50' src={'images/fruit.png'}/>
                </div>
            </div>
            <div className='text-center h1'>
                All food so fresh
            </div>
        </div>
    );
}

export default Home;