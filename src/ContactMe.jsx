import React from 'react'

function ContactMe() {
  return (
    <>

    <div className='contact-container-title' id='contact-container-title-id'>
      <h1 className='contact-container-title-1'><span className='contact-container-title-1-highlight'>Contact </span> 
       Me</h1>
    </div>

    <div className="contact-div">
      <ol className='contact-div-ol'>
        <li className='contact-div-li'>Name - Lingesh Hari</li>
        <li className='contact-div-li'>Email - lingeshhari4@gmail.com</li>
        <li className='contact-div-li'>Phone - 90*****</li>
        <li className='contact-div-li'>Resume - 
          <a {require("/assets/Resume.pdf")} download="Resume.pdf">
            <button className='download-btn'>Download</button>
          </a>
        </li>
      </ol>
    </div>
    </>


  )
}

export default ContactMe
