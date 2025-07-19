import React from 'react'
import Workcard from './workcard'

const Work = () => {
    return (
        <div className='pt-28 flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-screen-lg place-items-center'>
                <Workcard 
                    sitelink="https://github.com/SimmiSheetalJain/Uncovering-furniture-sales-insights/blob/main/Uncovering-Furniture-Sales-Insights.ipynb" 
                    appname="Furniture Sales Analysis" 
                    imagesource="https://simmisheetaljain.github.io/sheetaljain1101portfolio/Uncovering_Furniture_Sales_Insights_Logo.webp" 
                />
                <Workcard 
                    sitelink="https://simmisheetaljain.github.io/Unveiling-Global-Joy/" 
                    appname="Unveiling Global Joy" 
                    imagesource="https://miro.medium.com/v2/resize:fit:1200/0*I5sIf94agP76AJ3G.jpg" 
                />
                <Workcard 
                    sitelink="https://youtu.be/ssKyMe7NObs?si=rD8blKPtN27tM6Ta"  
                    appname="PhysioDeep" 
                    imagesource="https://media.licdn.com/dms/image/v2/D5612AQEZiswZSKIjxQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706588296344?e=2147483647&v=beta&t=BjPkwbTXbnp2tvmaRPwdrV7IZNv-vyZ2zN89iYhe1ss" 
                />
                <Workcard 
                    sitelink="https://github.com/SimmiSheetalJain/ArgusPro" 
                    appname="ArgusPro, An AI-Embeded Content Optimizer" 
                    imagesource="https://www.searchenginejournal.com/wp-content/uploads/2018/06/Boost-Your-Traffic-by-Optimizing-Content-That-You-Already-Have.png" 
                />
                
                <Workcard 
                    sitelink="https://dms.licdn.com/playlist/vid/v2/D4D05AQHwPM8CdZIAuw/mp4-720p-30fp-crf28/B4DZdjcRRuHkBg-/0/1749720270151?e=1753520400&v=beta&t=aIOlUsPk3oq4i0p6xeSiyO12cEe4B6y4gEaqnfk8rUk"  
                    appname="KARYAKRAM, An Event Management System" 
                    imagesource="https://cdn1.vectorstock.com/i/1000x1000/45/20/event-management-concept-banner-header-vector-23614520.jpg" 
                />
            </div>
        </div>
    )
}

export default Work
