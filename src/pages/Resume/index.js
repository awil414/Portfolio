import React from "react";
import "./style.css";
import myResume from "../../media/aresume.pdf";

// import { ListGroupItem } from 'react-bootstrap';
// import { ListGroup } from 'react-bootstrap';
// import {VscCircleOutline} from 'react-icons/vsc';

// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

const Resume = () => {
  return (
    <div class='resume'>
      <div className='main-title'>
        <h2>Resume</h2>
        <p> Download <a style={{ color: 'blue' }} href={myResume} download>MY RESUME</a> </p>
      </div>
      <MDBRow className="h-100 ">
        <MDBCol sm='6'>
          <MDBCard  className='resume-card'>
            <MDBCardBody>
              <MDBCardTitle className='section-title'>Summary</MDBCardTitle>
              <MDBCardText>
                <p>
                  <em>
                    Full-Stack programmer with Accounting, Sales, and Entrepreneur experience.
                  </em>
                </p>
                <ul className='res-list'>
                  <li>E-mail: amber.wilson.code@gmail.com</li>
                  <li>Phone: (615) 337-1797</li>
                </ul>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='6'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className='section-title'>Education</MDBCardTitle>
              <MDBCardText className='ed-main'>
                <div style={{ color: "#0c6ad5" }}>
                  {" "}
                  FULL-STACK DEVELOPER CERTIFICATION{" "}
                </div>
                <p className='ed-text'>
                  <em>Vanderbilt University</em>
                </p>
              </MDBCardText>
              <MDBCardText className='ed-main'>
                <div style={{ color: "#0c6ad5" }}> ACCOUNTING </div>
                <p className='ed-text'>
                  <em>Ball State University</em>
                </p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md='12'>
          <MDBCard className='experience-card'>
            <MDBCardBody>
              <MDBCardTitle className='section-title'>
                Professional Experience
              </MDBCardTitle>
              <MDBCardText>
                <div style={{ color: "#0c6ad5" }}>
                  <em>Owner Operator - Certified Personal Trainer</em>
                </div>
                <p>Dubs Fitness</p>
                <ul className='res-list'>
                  <li>
                    Self-starter, implementing a results-driven personal
                    training business, reaching max capacity clients within
                    three months.
                  </li>
                  <li>
                    Innovative and individualized program designer, skilled in
                    assessing clients needs and optimization.
                  </li>
                </ul>
                <div style={{ color: "#0c6ad5" }}>
                  <em>Studio Manager</em>
                </div>
                <p>Pure Sweat + Float Studio</p>
                <ul className='res-list'>
                  <li>
                    Proactive problem-solver, supervising and training employees
                    and negotiating studio needs.
                  </li>
                  <li>
                    Efficient time-manager, prioritizing tasks and delivering a
                    first-class experience.
                  </li>
                </ul>
                <div style={{ color: "#0c6ad5" }}>
                  <em>Lead Strength and Conditioning Coach/Group Instructor</em>
                </div>
                <p>Iron Tribe Fitness</p>
                <ul className='res-list'>
                  <li>
                    Strong emotional IQ, relationship building skills,
                    instructing 175+ athletes, including sales, client
                    engagement and retention.
                  </li>
                  <li>
                    High-achiever, invited to join the coaching team within a
                    year of being a member.
                  </li>
                </ul>
                <div style={{ color: "#0c6ad5" }}>
                  <em>Pharmaceutical Sales Rep</em>
                </div>
                <p>InVentiv Health for Beohringer Ingelheim</p>
                <ul className='res-list'>
                  <li>
                    Increased product position within territory, relationship
                    building and educating.
                  </li>
                  <li>More text here.</li>
                </ul>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Resume;

//OLD CODE

//     {/* //     className='bg-img' style= {{backgroundImage: `url(${BgImage})`}} */}
//     <MDBContainer className='content'>

//     {/* <h4 className="h4-text-center">Successfully navigating both is what makes me unique. </h4> */}
//     {/* <p className="skills-center"> Full-Stack Developer | JavaScript | Node | Express | MongoDB | React |</p> */}
//     <MDBRow>
//         <MDBCol md='6' className='summary'>
//             <h4>Summary</h4>
//             <ul>
//                 <li>amber.wilson.code@gmail.com</li>
//                 <li>615-337-1797</li>
//                 <li>Nashville, TN</li>
//             </ul>
//             <p><em>Write a short summary here.</em></p>
//         </MDBCol>
//         <MDBCol md='6' className='education'>
//             <h4>Education</h4>
//             <ListGroup>
//             <ListGroup.Item className="list-item-left-control">
//                 <i className="ed-icon"><VscCircleOutline /></i>
//                 <span>  Vanderbilt University</span>
//             </ListGroup.Item>
//                 <ListGroupItem header="Vanderbilt University | Jan. 2023">
//                     <em>Full-Stack Coding Certification</em>
//                     </ListGroupItem>
//                 <ListGroupItem header="Ball State University">
//                     <em>Accounting</em>
//                 </ListGroupItem>
//                 {/* <li>Nashville, TN</li> */}
//             </ListGroup>
//             <ul>
//                 <li>Ball State University</li>
//                 <li><em>Accounting</em></li>
//                 <li>Muncie, IN</li>
//             </ul>

//         </MDBCol>
//     </MDBRow>
// </MDBContainer>

{
  /* <div className='row'>
                <div className='col-lg-6'>
                    <h4 className='section-title'>Summary</h4>
                    <div className='summary-text'>
                        <h5>Amber Wilson </h5>
                        
                        <p> 
                            
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
            
         */
}

//  imgURL={AmberImage}
