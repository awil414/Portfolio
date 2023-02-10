import React from "react";
import Project from "../../components/Project/Project.js";
import goalE from "../../images/Projects/Target.jpg";
import SocNetworkAPI from "../../images/Projects/SocNetworkAPI.png";
import SideBeat3 from "../../images/Projects/Concert.jpg";
import planner from "../../images/Projects/Calendar.jpeg";
import eCommerce from "../../images/Projects/eCommerce.png";
import CodingQuiz from "../../images/Projects/CodingQuiz.png";
import AthleteTracker from "../../images/Projects/AthleteTracker.png";
import athletetracker from "../../images/Projects/434.jpg";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";


// Styling for background color and heading
const styles = {
  headingStyle: {
    fontSize: "26px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "60px",
    color: "white",
    padding: "0",
    marginBottom: "0",
  },
};

// Function to return Portfolio on renderPage
function Portfolio() {
  return (
    <Container fluid className='portfolio-page'>
      <Container>
        <span>
          <h5 style={styles.headingStyle}>My Recent Projects</h5>
        </span>
        <Row className='row gx-5' style={{ justifyContent: "center", marginTop: "15px", paddingBottom: "20px" }}>
          <Col md={4} className='project-card'>
            <Project 
              imgPath={athletetracker}
              title='athletetracker'
              description='Client tracker built with MERN stack and Apollo that helps personal trainers store client information, payment, and waivers.' style={{ fontSize: "10px" }}
              ghLink='https://github.com/awil414/athletetracker.git'
              demoLink='https://athletetracker.herokuapp.com/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <Project
              imgPath={goalE}
              title='Goal-E'
              description='A full-stack application built with mySQL and Express.js to help users write and keep track of goals.'
              ghLink='https://github.com/awil414/Goal-E.git'
              demoLink='https://evening-stream-22967.herokuapp.com/'
            />
          </Col>
          
        </Row>
        <Row className='row gx-5' style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={4} className='project-card'>
            <Project
              imgPath={SideBeat3}
              title='Side Be@t'
              description="Using 3rd Party APIs, users enter a band name and are returned a list of similar artists with a link to their concert tickets in a preferred zipcode."
              ghLink='https://github.com/awil414/Side-Beat.git'
              demoLink='https://awil414.github.io/Side-Beat/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <Project
              imgPath={planner}
              title='Day Planner'
              description='Built with jQuery, HTML5, CSS3, and Moment.js, this simple calendar app helps the user with time management.'
              ghLink='https://github.com/awil414/Kick-Butt-And-Take-Names-Planner.git'
              demoLink='https://awil414.github.io/Kick-Butt-And-Take-Names-Planner/'
            />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <Project
              imgPath={SocNetworkAPI}
              title='API for Social Network'
              description="This project was developed to build and structure a social network API using MongoDB because of its speed with large amounts of data, and flexibility with unstructured data. Users are able to share their thoughts, react to friends' thoughts, and create a friend list."
              ghLink='https://github.com/awil414/MongoDB-API-for-Social-Network-App.git'
              demoLink='https://drive.google.com/file/d/1D4vrsFPqIat5VqOE6rOrlxjJwm2WfPz0/view'
            />
          </Col>
          <Col md={4} className='project-card'>
            <Project
              imgPath={eCommerce}
              title='E-Commerce Backend'
              description='This E-Commerce Backend uses a REST API for an internet retail website. The API is built onto an Express.js server that uses Sequelize to interact with a MySQL database. Sequelize is a promise-based Node.js ORM(Object Relation Mapping).'
              ghLink='https://github.com/awil414/E-Commerce-Back-End.git'
              demoLink='https://drive.google.com/file/d/1thxQ0vmNVT4O6m3JryVh0MTYH_PXIIbt/view'
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Portfolio;
