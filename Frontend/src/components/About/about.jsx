import React from 'react';
import Footer from '../footer';

const About = () => {
  return (
    <div className='bg-black max-h-screen'>
      {/* Header Section */}
      <div className='pt-20 lg:pt-28 px-4'>
        <div className='flex flex-col items-center text-center max-w-screen-lg mx-auto'>
          <h1 className='text-3xl lg:text-4xl font-bold text-white font-serif'>Hey, I am</h1>
          <h1 className='text-3xl lg:text-4xl font-bold text-cyan-500 font-serif'>Sheetal Jain</h1>
          <h1 className='text-3xl lg:text-4xl font-bold text-white font-serif'>
            A Data Analysis/Machine Learning/Deep Learning Enthusiast!!
          </h1>
        </div>
      </div>

      {/* About Content Section */}
      <div className='px-4 lg:px-20 max-w-screen-lg mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start justify-between pt-12 gap-5 '>
          {/* Text Section */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            <p className='text-lg text-white mt-4 font-serif'>
              Hi, I’m Sheetal Jain, an AIML and Backend technology enthusiast. <br />
              I am passionate about leveraging machine learning and deep learning to address and solve real-world problems.
            </p>
            <p className='text-lg text-white mt-4 font-serif'>
              <strong>My Vision</strong> <br />
              I am dedicated to leveraging machine learning and deep learning to tackle complex challenges.<br />
              I have developed impactful projects such as PhysioDeep, a deep fake detection tool, and ArgusPro, an AI-embedded SEO analyzer and content optimizer.<br />
              Additionally, I am passionate about sharing my knowledge through workshops, bootcamps, articles, and blogs.<br /><br />

              I have earned certificates in Mathematics for Machine Learning, Machine Learning, and the Deep Learning Specialization from DeepLearning.AI in collaboration with Stanford University.
            </p>
          </div>

          {/* Image Section */}
          <div className='mt-8 lg:mt-0 lg:w-1/2 flex justify-center'>
            <img
              className='rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover'
              src="https://github.com/SimmiSheetalJain/SimmiSheetalJain-AIML-Enthusiast/blob/main/Frontend/src/assets/sheetaljainprofilephoto.png?raw=true"
              alt="Sheetal Jain"
            />
          </div>
        </div>

        {/* Additional Text Section */}
        <div className='p-4 lg:p-10 text-center lg:text-left'>
          {/* <p className='text-lg text-white mt-4 font-serif'>
            💡 <strong>My Journey</strong> <br />
            After completing my BCA, I focused on preparing for various entrance exams such as CAT, XAT, MH-MBA CET, CMAT, and NIMCET. I dedicated significant time to mathematics and problem-solving, particularly in the DILR and Decision-Making sections of CAT and XAT respectively. Through this process, I discovered my passion for data analysis. Although I achieved an impressive AIR 1064 in NIMCET, I couldn't find a Tier-1 college that matched my interests.
            <br /><br />
            Consequently, I decided to enroll in the MCA-AIML program at Laxmi Narain College of Technology. Over the past 1.5 years, I have honed my problem-solving skills and applied them to the emerging fields of Machine Learning and Deep Learning. This journey has fueled my motivation to pursue a role in the ML and DL domains.
          </p> */}
          <p className='text-lg text-white mt-4 font-serif'>
            📚 <strong>What I find Interesting</strong> <br />
            I believe that technology is a powerful tool for transformation. With my expertise in Data Analysis, Machine Learning, and Deep Learning, I am eager to leverage my skills to contribute to impactful and meaningful projects.
          </p>
        </div>

        {/* Skills Section */}
        <div className='pt-8'>
          <h1 className='text-2xl text-center font-bold text-cyan-500 font-serif'>
          👩‍💻 Technologies & Languages I Use 👩‍💻
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center'>
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/python.png?raw=true" alt="Python" />
            <img className='h-20' src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/matplotlib.png?raw=true" alt="matplotlib" />
            <img className='h-20' src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/pandas.png?raw=true" alt="pandas" />
            <img className='h-20' src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/numpy.png?raw=true" alt="numpy" />
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/mongo.png?raw=true" alt="MongoDB" />
            <img className='h-20' src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/scikit.png?raw=true" alt="scikit-learn" />
            <img className='h-20' src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/Tensorflow_logo.svg.png?raw=true" alt="Tensorflow_logo" />            
            <img className='h-20' src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/FastAPI.png?raw=true" alt="FastAPI" />

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='pt-10'>
        <Footer />
      </div>
    </div>
  );
};

export default About;
