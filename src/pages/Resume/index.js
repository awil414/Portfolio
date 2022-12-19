import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Resume = () => {
    return (
        <div class='row'>
            <div className='main-title'>
                <h2>Resume</h2>
                <p> Download MY RESUME </p>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h4 className='section-title'>Summary</h4>
                    <div className='summary-text'>
                        <h5>Amber Wilson </h5>
                        <ul>
                            <li>amber.wilson.code@gmail.com</li>
                            <li>615-337-1797</li>
                            <li>Nashville, TN</li>
                        </ul>
                        <p> 
                            <em>Write a short summary here.</em>
                        </p>
                    </div>
                    <h4 className='section-title'>Education</h4>
                    <div className='education-text'>
                        <h6>January 2023 | Vanderbilt University</h6>
                        <p>
                            <em>Full-Stack Coding Bootcamp Certification</em>
                        </p>
                        <h6>Ball State University</h6>
                        <p>
                            <em>Accounting</em>
                        </p>
                    </div>
                        
                </div>

            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h4 className='section-title'>Summary</h4>
                    <div className='summary-text'>
                        <h5>Amber Wilson </h5>
                        <ul>
                            <li>amber.wilson.code@gmail.com</li>
                            <li>615-337-1797</li>
                            <li>Nashville, TN</li>
                        </ul>
                        <p> 
                            <em>Write a short summary here.</em>
                        </p>
                    </div>
                    <h4 className='section-title'>Education</h4>
                    <div className='education-text'>
                        <h6>January 2023 | Vanderbilt University</h6>
                        <p>
                            <em>Full-Stack Coding Bootcamp Certification</em>
                        </p>
                        <h6>Ball State University</h6>
                        <p>
                            <em>Accounting</em>
                        </p>
                    </div>
                        
                </div>

            </div>
        </div>
            
        
            
    )
    
};

export default Resume;