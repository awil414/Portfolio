import React from "react";
import "./style.css";
import myResume from "../../media/amberwilson.pdf";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Slide from "react-reveal";
import { Col, Row, Container } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";


// Function to return Resume page
const Resume = () => {
  return (
    <div class='resume'>
      <div className='main-title'>
        <h1 style={{ fontSize: "25px" }}>Download my resume</h1>
        <MDBRow className='justify-content-md-center'>
          <div className='text-center'>
            <a href={myResume} className='btn btn-success btn-lg'>
                MY RESUME &nbsp; <FiDownload />
            </a>
          </div>
        </MDBRow>
      </div>
      <section className='resume-btm'>
        <Slide left duration={1300}>
          <Row className='row education'>
            <Col md={1}></Col>
            <Col md={5} className='education'>
              <h1>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "orange",
                  }}
                >
                  Education
                </span>
              </h1>

              <div className='nine columns main-col'>
                <div className='row item'>
                  <div
                    className='educ-title'
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                  >
                    Full-Stack Web Developer Certification{" "}
                  </div>
                  <div
                    className='resume-list'
                    style={{ fontStyle: "italic", fontSize: "15px" }}
                  >
                    Vanderbilt University 2023 - Nashville, TN
                  </div>
                  <div className='mern'>
                    HTML, CSS, JavaScript, MERN Stack, Apollo/GraphQL
                  </div>
                </div>
                <div className='row item'>
                  <div className='nasm' style={{ fontSize: "20px" }}>
                    Certified Personal Trainer 
                  </div>
                  <div
                    className='resume-list'
                    style={{ fontStyle: "italic", fontSize: "15px" }}
                  >
                    National Academy of Sports Medicine - Online
                  </div>
                </div>
                <div className='row item'>
                  <div className='bsu' style={{ fontSize: "20px" }}>
                    B.S. Accounting
                  </div>
                  <div
                    className='resume-list'
                    style={{ fontStyle: "italic", fontSize: "15px" }}
                  >
                    Ball State University - Muncie, IN
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col className='work'>
              <h1>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "orange",
                  }}
                >
                  Experience
                </span>
              </h1>

              <div className='work-examples'>
                <div className='row item'>
                  <div
                    className='educ-title'
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                  >
                    Owner {" "}
                  </div>
                  <div
                    className='resume-list'
                    style={{ fontStyle: "italic", fontSize: "15px" }}
                  >
                    Dubs Fitness, LLC
                  </div>
                  <div className='mern'>Launched personal training business, increasing clientele to 100% capacity within first six months.</div>
                </div>
                <div className='row item'>
                  <div
                    className='manager'
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                  >
                    Manager{" "}
                  </div>
                  <div
                    className='resume-list'
                    style={{ fontStyle: "italic", fontSize: "15px" }}
                  >
                    Pure Sweat + Float Studio
                  </div>
                  <div className='mern'>
                    Navigated client-facing relationships, collaborative relationships, and internal-facing problem solving and leadership.
                  </div>
                </div>
                <div className='row item'>
                  <div className='bsu' style={{ fontSize: "20px" }}>
                    Lead Coach - Individual and Group
                  </div>
                  <div
                    className='resume-list'
                    style={{ fontStyle: "italic", fontSize: "15px" }}
                  >
                    Iron Tribe Fitness
                  </div>
                  <div className='mern'>Grew from client to coach, resulting in high-impact levels with both clients and internal team members.</div>
                </div>
              </div>
            </Col>
          </Row>
        </Slide>
        <br></br>
        <Slide left duration={1300}>
          <div className='skill'>
            <div className='three columns header-col'>
              <h1>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "orange",
                  }}
                >
                  Skills
                </span>
              </h1>
            </div>

            <div className='nine columns main-col'>
              <p>My proficiency in a sample of languages, databases, and frameworks:</p>
            </div>
          </div>

          <Container fluid>
            <Row
              align='center'
              justify='center'
              direction='row'
              style={{ height: "300px" }}
            >
              <Col xs={5}>
                HTML
                <div className='progress-bar-container'>
                  <div
                    className='progress-bar-indicator'
                    style={{ width: "88%" }}
                  ></div>
                </div>
                CSS
                <div className='progress-bar-container'>
                  <div
                    className='progress-bar-indicator'
                    style={{ width: "70%" }}
                  ></div>
                </div>
                Javascript
                <div className='progress-bar-container'>
                  <div
                    className='progress-bar-indicator'
                    style={{ width: "75%" }}
                  ></div>
                </div>
                Bootstrap
                <div className='progress-bar-container'>
                  <div
                    className='progress-bar-indicator'
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </Col>
              <Col xs={1}> </Col>
              <Col xs={5}>
                React
                <div className='progress-bar-container'>
                  <div
                    className='progress-bar-indicator'
                    style={{ width: "72%" }}
                  ></div>
                </div>
                MongoDB
                <div className='progress-bar-container'>
                  <div
                    className='progress-bar-indicator'
                    style={{ width: "78%" }}
                  ></div>
                </div>
                Apollo / GraphQL
                <div className='progress-bar-container'>
                  <div
                    className='progress-bar-indicator'
                    style={{ width: "40%" }}
                  ></div>
                </div>
                Node
                <div className='progress-bar-container'>
                  <div
                    className='progress-bar-indicator'
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </Col>
            </Row>
          </Container>
        </Slide>
      </section>
    </div>
  );
};

export default Resume;

{
  /* <MDBRow className='h-100 '>
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
      </MDBRow> */
}
