import React from "react";
import Project from "../../components/Project/Project.js";
import goalE from "../../images/Projects/goalE.png";
import SocNetworkAPI from "../../images/Projects/SocNetworkAPI.png";
import SideBeat3 from "../../images/Projects/SideBeat3.png";
import planner from "../../images/Projects/planner.png";
import eCommerce from "../../images/Projects/eCommerce.png";
import CodingQuiz from "../../images/Projects/CodingQuiz.png";
import AthleteTracker from "../../images/Projects/AthleteTracker.png";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

// Styling for background color and heading
const styles = {
  // backgroundStyle: {
  //   background: "#3E5E82",
  // },
  headingStyle: {
    fontSize: "40px",
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
    <Container fluid style={styles.backgroundStyle} className='portfolio-page'>
      <Container>
        <span>
          <h3 style={styles.headingStyle}>My Recent Projects</h3>
        </span>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <Project
              imgPath={AthleteTracker}
              title='athletetracker'
              description='athletetracker is a MERN stack application using MongoDB and GraphQL. It was developed for a personal trainer. This app allows the user to add, update, and delete client information, as well as their electronic waiver and Venmo payment.'
              ghLink='https://github.com/awil414/athletetracker.git'
              demoLink='https://athletetracker.herokuapp.com/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <Project
              imgPath={goalE}
              title='Goal-E'
              description='Goal-E is a full-stack application that was developed to help users write goals. The user is given the option to "get started" or "log in". After signing up or logging in, the user can create a goal and add a description. The created goal will appear in the profile. Once a goal is created, then the user can edit that goal. An option also exists to complete the goal, which deletes it from the profile.'
              ghLink='https://github.com/awil414/Goal-E.git'
              demoLink='https://evening-stream-22967.herokuapp.com/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <Project
              imgPath={SideBeat3}
              title='Side Beat'
              description="This project was developed to build and structure a social network API using MongoDB because of its speed with large amounts of data, and flexibility with unstructured data. Users are able to share their thoughts, react to friends' thoughts, and create a friend list."
              ghLink='https://github.com/awil414/Side-Beat.git'
              demoLink='https://awil414.github.io/Side-Beat/'
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className='project-card'>
            <Project
              imgPath={planner}
              title='Day Planner'
              description='This Kick Butt and Take Names Day Planner is a simple calendar application intended for an employee with a busy schedule. The app runs in the browser using jQuery to dynamically power the HTML and CSS. The user can add important events to the daily planner in order to manage their time effectively.'
              ghLink='https://github.com/awil414/Kick-Butt-And-Take-Names-Planner.git'
              demoLink='https://awil414.github.io/Kick-Butt-And-Take-Names-Planner/'
            />
          </Col>
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
