import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Resume = () => {
    return (
    //     <div
    //     className='bg-img' style= {{backgroundImage: `url(${BgImage})`}}
    // >       <MDBContainer className='about-container'>
    //             <h4>Welcome! {''} <span className='wave' role='img' aria-labelledby='wave'>
    //             👋</span><strong className='name'> I'm Amber </strong></h4>
    //             {/* <h4 className="h4-text-center">Successfully navigating both is what makes me unique. </h4> */}
    //             {/* <p className="skills-center"> Full-Stack Developer | JavaScript | Node | Express | MongoDB | React |</p> */}
    //             <MDBRow>
    //                 <MDBCol md='7' className='about-text'>
    //                     <p>
    //                         I am a full-stack developer based in Nashville, TN with a certification from Vanderbilt University. 
    //                         I have a background in Accounting and Sales, and own my own business. Check out my portfolio page! 
    //                         If you want to know more about me, my work, or buy me a lemonade at the bottom of the Grand 
    //                         Canyon, let's talk.
    //                     </p>
    //                 </MDBCol>
    //                 <MDBCol md='5' className='about-image' imgURL={AmberImage} >
    //                     <p>
    //                         Picture goes here. 
    //                     </p>
       
    //                 </MDBCol>
    //             </MDBRow>
    //         </MDBContainer>
    //     </div>
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