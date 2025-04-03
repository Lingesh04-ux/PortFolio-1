import React from 'react'
import img1 from './assets/Photo.png'

function Middle() {
  return (
    <>
<div className='middle-container'>

  <div className="text-area">

    <h3 className='hello-tag'>Hello !</h3>
    
      <div className="intro-div">
        <p className='intro-line'>I'm <span className='intro-line-highlight'>Lingesh Hari,</span></p>
        <p className='intro-line'>Front-end Web Developer and</p>
        <p className='intro-line'>UI & UX Designer</p>
      </div>

      <div className='para-tag'>
        <p>Innvoative Digital Marketer with Expertise in Driving Online</p>
        <p>Growth Through Strategic Campaigns</p>
      </div>

      <div className="buttons">
          <button className='hireme-button'>Hire Me</button>
          <button className='whatsapp-button'>What's app</button>
      </div>
  </div>

    <div className='image-tag'>
        <img src={img1} alt="Profile" className='image1'/>
    </div>

</div>
    </>
  )
}

export default Middle
