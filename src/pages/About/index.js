import React from 'react';
import BgImage from '../../images/backgroundimg.jpeg';
import AmberImage from '../../images/me.jpeg';
import './style.css';

// import { Container } from 'react-boostrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div
        className='bg-img' style= {{backgroundImage: `url(${BgImage})`}}
    >
          
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
                                    <p className='about-text'>
                                    I love people. I love problem solving. Successfully navigating both is what makes me unique. If
                            you're looking for great communication skills, high EQ, and attention to detail, let's talk.
                            I'm currently enrolled in Vanderbilt University's full stack coding boot camp, with a
                            January completion date. My background in accounting and sales offer high attention to
                            detail and excellent communication skills. I own my own personal training business because
                            passion is important to me, too. If there is a challenge, personally or professionally, I
                            want it. And I want to help you.
                                    </p>
                                {/* </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            
        </div>
    )
};