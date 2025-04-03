import React from 'react'
import { useState } from 'react'

function Service() {

  return (
    <>
    <div className='service-container-title' id='service-container-title-id'>
        <h1 className='title-1'><span className='title-1-highlight'>Service</span> I Provide</h1>
        <button className='seemore-btn' >See More</button>
    </div>
        <div className="service-container-items" >
            <div className='service-container-items-1' id='scI'>
                <h2 className='title-2'>UIUX Design</h2>
                    <p>UI/UX design focuses on creating user-friendly digital experiences. UI (User Interface) 
                        deals with visuals, while UX (User Experience) ensures usability. 
                        Both work together to enhance functionality, accessibility, and user satisfaction.
                    </p>
            </div>
            <div className='service-container-items-1' id='scI'>
                <h2 className='title-2'>Web Design & Development</h2>
                    <p>
                    Web design and development involve creating and maintaining websites. Design focuses on layout, 
                    visuals, and user experience, while development handles coding and functionality.
                    Both ensure responsive, user-friendly, and efficient digital experiences
                    </p>
            </div>
            <div className='service-container-items-1' id='scI'>
                <h2 className='title-2'>Content Writing</h2>
                    <p>Content writing involves creating engaging, informative, and SEO-friendly text for websites, 
                        blogs, and marketing. It focuses on clarity, audience engagement, 
                        and value, helping businesses communicate effectively and build a strong online presence
                    </p>
            </div>
        </div>
    </>
  )
}

export default Service
