import React from "react";
import "./style.css";
import myResume from "../../media/aresume.pdf";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

// Function to return Resume page 
const Resume = () => {
  return (
    <div class='resume'>
      <div className='main-title'>
        <h2>Resume</h2>
        <p>
          {" "}
          Download{" "}
          <a style={{ color: "blue" }} href={myResume} download>
            MY RESUME
          </a>{" "}
        </p>
      </div>
      <MDBRow className='h-100 '>
        <MDBCol sm='6'>
          <MDBCard className='resume-card'>
            <MDBCardBody>
              <MDBCardTitle className='section-title'>Summary</MDBCardTitle>
              <MDBCardText>
                <p>
                  <em>
                    Full-Stack programmer with Accounting, Sales, and
                    Entrepreneur experience.
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
                  <li>Top 10% producer within first year of acquiring territory.</li>
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
