import React from 'react'
import img2 from './assets/1.png'

function AboutMe() {

  
  return (
    <>
<div className='outer-blue-container-1'>
    <div className='outer-blue-container-2'>
        <div className='img-2-1'>
            <img src={img2} alt="Profile 2" className='img-2'/>
        </div>

    <div className="text-area-1" id='text-area-id'>
        <h4 className='aboutme-title-1' >About Me</h4>
        <h2 className='aboutme-title-2'><span className='aboutme-title-2-highlight'>Who is </span> 
        Lingesh Hari ?</h2>
        <div className='aboutme-title-3-div'>
            <p className='aboutme-title-3'>I am a passionate Front-End Developer and UI/UX Designer, creating visually appealing, user-friendly websites. 
                I specialize in HTML, CSS, JavaScript, and React, ensuring seamless, interactive, and 
                responsive digital experiences.
            </p>
            <p className='aboutme-title-3-mobile'>
            <ul>
                <h4>The Skill are Known</h4>
                <br />
                <li>Adobe Photoshop, Illustrator & XD</li>
                <li>HTML, CSS & JavaScript</li>
                <li>React.js</li>
            </ul>
            </p>
        </div>
        
    </div>
    </div>
</div>

    </>
  )
}

export default AboutMe
