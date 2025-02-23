import React from 'react';
import Cardcerti from './certi_card';

const Certificates = () => {
  return (
    <section className='bg-black py-16 flex flex-col justify-center items-center min-h-screen'>
      {/* Title */}
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-cyan-500 font-serif inline-block'>My</h1>
        <h1 className='text-4xl font-bold text-white font-serif inline-block ml-2'>Certificates</h1>
      </div>

      {/* Certificate Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 sm:px-10 lg:px-24 max-w-screen-lg mx-auto'>
        <Cardcerti
          image="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D2ZX2B23E2LW/CERTIFICATE_LANDING_PAGE~D2ZX2B23E2LW.jpeg"
          Card_title="Advanced Data Modeling"
          Description="Demonstrated ability to deploy basic data modeling skills and navigate modern storage options for a data warehouse, applied within a real-world project environment."
        />
        <Cardcerti
          image="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DVFXRR733RQV/CERTIFICATE_LANDING_PAGE~DVFXRR733RQV.jpeg"
          Card_title="Data Analysis with R Programming"
          Description="Proficient in R programming language and environment, including functions, variables, data types, pipes, and vectors. Skilled in generating visualizations and basic R Markdown formatting for structured content."
        />
        <Cardcerti
          image="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/tic_tac_toe.jpg?raw=true"
          Card_title="Hackathon Certificate"
          Description="Gained knowledge and experience after attending a 36-hour in-person hackathon at DAIICT."
        />
        <Cardcerti
          image="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/tata_imagination.jpg?raw=true"
          Card_title="TATA Imagination Quiz"
          Description="Participated in the TATA Imagination Quiz organized by the TATA Foundation."
        />
        <Cardcerti
          image="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/thinkbiz_tecahthon.jpg?raw=true"
          Card_title="Thinkbiz Teachathon"
          Description="Thinkbiz 24-hour in-person Techathon 2025."
        />
      </div>
    </section>
  );
};

export default Certificates;