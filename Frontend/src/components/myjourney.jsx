

import React from 'react';
import Ball from './bounce_ball';

const Myjourney = () => {
    return (
        <div className='p-4 lg:p-0'>
            <div className='text-center mt-16 lg:mt-32 mb-16 lg:mb-32'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl bold text-cyan-500 font-serif'>My&nbsp;</h1>
                    <h1 className='text-4xl bold text-white font-serif'>Journey so far</h1>
                </div>
                <p className='text-white font-serif mt-5 text-lg lg:text-xl'>
                Climbing the steps of my journey, committed to reaching my highest potential.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-evenly items-center lg:items-start'>
                <Ball />
                <div className='mt-8 lg:mt-0'>
                    <ul>
                        <li className='text-white font-serif pb-5 animate-pulse'>
                            Master of Computer Application(AIML)(2023-2025)
                        </li>
                        <li className='text-white font-serif pb-5'>
                            Bachelore of Computer Application(2018-2021)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Myjourney;