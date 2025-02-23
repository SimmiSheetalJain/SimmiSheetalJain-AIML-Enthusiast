import React from 'react';
import BlurText from '../Animations/BlurText';

const Body = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className='flex flex-col lg:flex-row justify-evenly items-center mt-16 lg:mt-32 bg-black p-4 lg:p-0'>
            <div className='text-center lg:text-left mb-8 lg:mb-0'>
                <h1 className='text-4xl bold text-cyan-500 font-serif pb-2'>Hey,</h1>

                <BlurText
                    text="This is Sheetal Jain!!"
                    delay={100}  // Reduced delay for faster animation
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl text-white mb-4" // Ensure visibility
                />

                {/* <p className='text-lg lg:text-xl text-white mt-4 font-serif'>
                    Driven by a passion for Machine Learning and Deep Learning, I aspire to harness the transformative power of technology to tackle real-world challenges and contribute to impactful, meaningful projects. 
                </p> */}
                <p className='text-lg lg:text-xl text-white mt-4 font-serif text-justify'>
                    Driven by a passion for Data Analysis, Machine Learning, and Deep Learning, <br className='hidden md:block' />
                    I aspire to harness the transformative power of technology <br className='hidden md:block' />
                    to tackle real-world challenges and contribute to <br className='hidden md:block' />
                    impactful, meaningful projects.
                </p>

                {/* <p className='text-l text-white mt-3 font-serif opacity-50'></p> */}
            </div>
            <div className='h-auto w-[250px] lg:w-[300px]'>
                <img
                    className='rounded-lg'
                    src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/hero/Sheetal.jpg?raw=true"
                    alt="Sheetal Jain"
                />
            </div>
        </div>
    );
};

export default Body;
