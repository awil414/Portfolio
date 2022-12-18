import React from 'react';
import BgImage from '../../images/backgroundimg.jpeg';
import AmberImage from '../../images/me.jpeg';
import './style.css';

import {
    MDBContainer,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  

export default function About() {
    return (
        <div
        className='bg-img' style= {{backgroundImage: `url(${BgImage})`}}
    >       <MDBContainer className='about-container'>
                <h4 className="h3-text-center">About Me</h4>
                {/* <h4 className="h4-text-center">Successfully navigating both is what makes me unique. </h4> */}
                {/* <p className="skills-center"> Full-Stack Developer | JavaScript | Node | Express | MongoDB | React |</p> */}
                <MDBRow>
                    <MDBCol md='7' className='about-text'>
                        <p>
                            I'm a full-stack developer in Nashville, TN with a coding certification from Vanderbilt University. 
                            With my background in accounting and sales, my strengths lie in attention to detail and high EQ. 
                            If you want to know more about me, my work, or buy me a lemonade at the bottom of the Grand 
                            Canyon, let's talk.

                        {/* If
                            you're looking for great communication skills, high EQ, and attention to detail, let's talk.
                            I'm currently enrolled in Vanderbilt University's full stack coding boot camp, with a
                            January completion date. My background in accounting and sales offer high attention to
                            detail and excellent communication skills. I own my own personal training business because
                            passion is important to me, too. If there is a challenge, personally or professionally, I
                            want it. And I want to help you. */}
                        </p>
                    </MDBCol>
                    <MDBCol md='5' className='about-image' imgURL={AmberImage} >
                        <p>
                            Picture goes here. 
                        </p>
                {/* <section id="about">
                    <div class="container mt-4 pt-4" id="">
                        <h1 class="text-center">About Me</h1>
                        <div class="row mt-4">
                            <div class="col-lg-4">
                                <img src="./assets/img/me.jpeg" class="imageAboutPage" alt="Amber Wilson"> </img>
                            </div>

                            <div class="col-lg-8">
                                <p> Full-Stack Developer | HTML | CSS3 | JavaScript | jQuery | APIs | Node | Express |</p>
                                <div class="row mt-3 p-3"> */}


                                {/* <h1 className="text-left">About Amber</h1>
                                <div className='row mt-4'></div>
                                    <div className='col-lg-4'>
                                        style= {{img: `url(${AmberImage})`}}
                                    </div> */}
                                    



                                {/* </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
};