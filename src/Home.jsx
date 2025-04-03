import React from 'react'

function Home() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

  };
  return (
    <>
    <div className='header-container' id='homepage-id'>
      <h1 className='name'>Lingesh</h1>
        <ul className='titles'>
            <li className='sub-titles' onClick={() => scrollToSection('homepage-id')}>Home</li>
            <li className='sub-titles' onClick={() => scrollToSection('service-container-title-id')}>Service</li>
            <li className='sub-titles' onClick={() => scrollToSection('text-area-id')}>About me</li>
            <li className='sub-titles'>Projects</li>
        </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        <button className='contact-button' onClick={() => scrollToSection('contact-container-title-id')}>Contact me</button>
    </div>
    </>
  )
}

export default Home
