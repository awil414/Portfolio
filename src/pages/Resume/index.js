import React from "react";
import "./style.css";
import FlipCard from "../../components/FlipCard/FlipCard.js";
import myResume from "../../media/aresume.pdf";
import { Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <div className="resume-container">
      <div className='main-title'>
         <h2> Resume</h2>
          <div>
           {" "}
           Download{" "}
           <a style={{ color: "#8ACDEA" }} href={myResume} download>
             MY RESUME
           </a>{" "}
         </div>
         <ul className='res-list'>
            <li>E-mail: {" "} 
              <a style={{ color: "#8ACDEA" }} href='mailto:awil414@gmail.com'>amber.wilson.code@gmail.com</a></li>
            <li>Phone: (615) 337-1797</li>
          </ul>
       </div>
       <Row style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "15px", paddingBottom: "10px" }}>
          <Col  className='col-4 showcase-card'>
            <FlipCard
              // imgPath={goalE}
              name='Goal-E'
              description='Goal-E is a full-stack'
              // ghLink='https://github.com/awil414/Goal-E.git'
              // demoLink='https://evening-stream-22967.herokuapp.com/'
            />
          </Col>
          <Col  className='col-4 showcase-card'>
            <FlipCard
              // imgPath={SideBeat3}
              // title='Side Beat'
              // description="This project was developed to build and structure a social network API using MongoDB because of its speed with large amounts of data, and flexibility with unstructured data. Users are able to share their thoughts, react to friends' thoughts, and create a friend list."
              // ghLink='https://github.com/awil414/Side-Beat.git'
              // demoLink='https://awil414.github.io/Side-Beat/'
            />
          </Col>
        
          <Col  className='col-4 showcase-card'>
            <FlipCard
              // imgPath={SocNetworkAPI}
              // title='API for Social Network'
              // description="This project was developed to build and structure a social network API using MongoDB because of its speed with large amounts of data, and flexibility with unstructured data. Users are able to share their thoughts, react to friends' thoughts, and create a friend list."
              // ghLink='https://github.com/awil414/MongoDB-API-for-Social-Network-App.git'
              // demoLink='https://drive.google.com/file/d/1D4vrsFPqIat5VqOE6rOrlxjJwm2WfPz0/view'
            />
          </Col>
        </Row>
    
    </div>

  );
}
export default Resume;

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.scss";

// const cards = [
//     {
//       id: "1",
//       variant: "hover",
//       front: { title: "SKILLS" },
//       back: "Back"
//     },
//     {
//       id: "2",
//       variant: "click",
//       front: "Click",
//       back: "Back"
//     },
//     {
//       id: "3",
//       variant: "focus",
//       front: "Focus",
//       back: "Back"
//     }
//   ];
// export default function Resume() {
//   return (
//     <div className="container">
//       <div className="overlay-background" />
//       <div className="overlay-border" />
//       <div className="row h-100">
//         <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
//           {cards.map((card) => (
//             <FlipCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

