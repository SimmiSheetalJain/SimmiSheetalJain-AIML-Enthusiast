import Footer from "../footer";
import profile from "../../assets/SWE_Professional.jpg";
import python_icon from "../../assets/free-python-logo-icon-svg-download-png-1720083.webp";
import aws_icon from "../../assets/AWS-Logo-PNG-Images.webp";
const About = () => {
  return (
    <div className="bg-black max-h-screen">
      {/* Header Section */}
      <div className="pt-20 lg:pt-28 px-4">
        <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-white font-serif">
            Hey, I am
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold text-cyan-500 font-serif">
            Sheetal Jain
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold text-white font-serif">
            A System Engineer, AIML Enthusiast, and Backend Developer
          </h1>
        </div>
      </div>

      {/* About Content Section */}
      <div className="px-4 lg:px-20 max-w-screen-lg mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start justify-between pt-12 gap-5 ">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-lg text-white mt-4 font-serif">
              <strong>My Vision</strong> <br />
              I am dedicated to leveraging machine learning and deep learning to
              tackle complex challenges.
              <br />
              I have developed impactful projects such as PhysioDeep, a deep
              fake detection tool, and ArgusPro, an AI-embedded SEO analyzer and
              content optimizer.
              <br />
              Additionally, I am passionate about sharing my knowledge through
              workshops, bootcamps, articles, and blogs.
              <br />
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <img
              className="rounded-lg w-1/2 max-w-xs sm:max-w-sm md:max-w-md object-cover"
              src={profile}
              alt="Sheetal Jain"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="pt-8">
          <h1 className="text-2xl text-center font-bold text-cyan-500 font-serif">
            👩‍💻 Technologies & Languages I Use 👩‍💻
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center">
            <img className="h-20" src={python_icon} alt="Python" />
            <img
              className="h-20"
              src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/matplotlib.png?raw=true"
              alt="matplotlib"
            />
            <img
              className="h-20"
              src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/pandas.png?raw=true"
              alt="pandas"
            />
            <img
              className="h-20"
              src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/numpy.png?raw=true"
              alt="numpy"
            />
            <img className="h-20" src={aws_icon} alt="AWS" />
            <img
              className="h-20"
              src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/scikit.png?raw=true"
              alt="scikit-learn"
            />
            <img
              className="h-20"
              src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/Tensorflow_logo.svg.png?raw=true"
              alt="Tensorflow_logo"
            />
            <img
              className="h-20"
              src="https://github.com/SimmiSheetalJain/SDESSJ/blob/main/src/assets/skills/FastAPI.png?raw=true"
              alt="FastAPI"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
