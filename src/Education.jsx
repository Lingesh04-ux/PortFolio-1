import React from 'react'
import {useState} from 'react'


function Education() {

    function toggle1(){
        let button1 = document.getElementById("eduBtn1")
        
        if( button1.style.display === "none"){
            button1.style.display = "block"
        }
        else{
            button1.style.display = "none"
        }
    }

    function toggle2(){
        let button2 = document.getElementById("eduBtn2")

        if( button2.style.display === "none"){
            button2.style.display = "block"
        }
        else{
            button2.style.display ="none"
        }
    }
    
  return (
    <>
    <div className='eduaction-main-container-1'>
        <div className='eduaction-main-container-2'>
            <h3 className='edu-head-1'>-Education & more</h3>
                <h1 className='edu-head-2'>My Academic and <br />Professional <span className='edu-head-2-highlight'>
                Journey</span></h1>
        </div>

        <div className='eduaction-main-container-3'>
            <div className='eduaction-qual'>
                <h2 className='eduaction-qual-title'>Educational Qualification</h2>
                    
                   <div className='eduaction-qual-2'>
                    <h3>Cholan Matriculation Higher Secondary School, Kanchipuram</h3>
                                <p>SSLC- Passed out on 2019 - 78.6%</p>
                                <p>HSC - Passed out on 2021 - 81.3%</p>
                        <br />
                            <h3>BACHELOR OF SCIENCE IN BIOTECHNOLOGY 2024, CGPA - 7.69</h3>
                                <p>SRM University, Kattanakulathur, Chengalpattu - TN</p>
                    </div>

            </div>

           

                <div className='work-exper'>
                    <h2 className='eduaction-qual-title'>Work Experience</h2>
                    <div className='work-exper-2'>
                    <h3>MES India,Chennai</h3>
                        <p>Product specialist May 2024 - NOVEMBER
                            2024, Service Engineer, Sales and <br />Support in Andhra Pradesh Region
                        </p>
                    </div>
                </div>

                
        </div>
        <button className='edu-btn' onClick={() => {toggle1()}}>Education</button>
            <div className='edu-btn-1' id='eduBtn1' style={{display: 'none'}} >
                <h3>My Education</h3>
                <p>I studied Web Development, UI/UX Design, and React.js.</p>
            </div>

        <button className='edu-btn'onClick={() => toggle2()}>Work Ex</button>
            <div className="edu-btn-1" id='eduBtn2' style={{display:'none'}}>
                <h3>My Work Experience</h3>
                <p>MES India, Field Service Engineer May 2024 - Nov 2024</p>
            </div>
    </div>
  
    </>
  )
}

export default Education
