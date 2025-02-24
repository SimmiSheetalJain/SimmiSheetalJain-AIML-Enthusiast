import React from 'react'
import Workcard from './workcard'

const Work = () => {
    return (
        <div className='pt-28 flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-screen-lg place-items-center'>
                <Workcard 
                    sitelink="https://www.linkedin.com/pulse/reasonable-vs-rational-sheetal-jain-34ylf/?trackingId=izBLld1rR1yntDF6yYSMrQ%3D%3D" 
                    appname="Reasonable vs Rational" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/rational.jpg" 
                />
                <Workcard 
                    sitelink="https://www.linkedin.com/pulse/what-artificial-intelligence-sheetal-jain-r2nnf/?trackingId=eS493gwrSgmaATei7Xejew%3D%3D" 
                    appname="What is AI?" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/AI.jpg" 
                />
                <Workcard 
                    sitelink="https://www.linkedin.com/pulse/word-power-sheetal-jain/?trackingId=EItZzOlRQpyzoA009xKK9A%3D%3D"  
                    appname="Word Power" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/wordPower.jpg" 
                />
                <Workcard 
                    sitelink="https://www.linkedin.com/pulse/how-does-value-rupee-decreas-increase-sheetal-jain-zvdkf/?trackingId=barDnuKSSRyK1uMKZ7N9tQ%3D%3D"  
                    appname="How does the value of a rupee decreas or increase?" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/moneyValue.jpg" 
                />
                <Workcard 
                    sitelink="https://www.linkedin.com/pulse/practicing-mind-sheetal-jain/?trackingId=barDnuKSSRyK1uMKZ7N9tQ%3D%3D"  
                    appname="The Practicing Mind (Summary and Review)" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/praticingMind.jpg" 
                />
                <Workcard 
                    sitelink="https://www.linkedin.com/pulse/psychology-money-review-summary-sheetal-jain/?trackingId=barDnuKSSRyK1uMKZ7N9tQ%3D%3D"  
                    appname="The Psychology of Money ~ Review and Summary" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/TPOM.jpg" 
                />
                <Workcard 
                    sitelink="hhttps://sheetaljainblogpost.blogspot.com/2021/06/the-environment-and-nature-as-teacher.html"  
                    appname="The environment and nature as a teacher to a better life." 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/environment.jpg" 
                />
                <Workcard 
                    sitelink="https://medium.com/@simmijain1101/her-exploring-the-intersection-of-ai-and-human-relationships-babea50a7c98"  
                    appname="“Her”: Exploring the Intersection of AI and Human Relationships" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/her.jpg" 
                />
                <Workcard 
                    sitelink="https://www.linkedin.com/pulse/importance-problem-solving-skill-sheetal-jain-3vh7f/?trackingId=1vfGaiM%2FQfau8zdhCVnIqg%3D%3D"  
                    appname="Importance of Problem Solving Skill, The Most Demanding Skill" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/pss.jpg" 
                /> 
            </div>
        </div>
    )
}

export default Work
