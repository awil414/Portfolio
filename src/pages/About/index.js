import React from "react";
import AmberImage from "../../images/me.jpeg";
import "./style.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Type from "./Type";
import "./type.css";
import myResume from "../../media/aresume.pdf";

// Function to return About page on renderPage
export default function About({ currentPage, setCurrentPage }) {
  return (
    <div className='about'>
      {" "}
      <MDBContainer className='about-container'>
        <h2>
          Hello! {""}{" "}
          <span className='wave' role='img' aria-labelledby='wave'>
            👋
          </span>
          <strong className='name'> I'm Amber</strong>
        </h2>
        <MDBRow className='justify-content-md-center'>
          <MDBCol md='4' className='about-image' imgURL={AmberImage}>
            <div className='amber-img'></div>
          </MDBCol>
          <MDBCol md='8' className='about-text'>
            <p>
              I'm an{" "}
              <span style={{ color: "green", fontSize: "16px" }}>
                entrepreneur
              </span>
              , seasoned at building partnerships, fostering collaborative
              relationships, and acting as{" "}
              <span style={{ color: "green", fontSize: "16px" }}>
                translator between business users and internal teams
              </span>
              . I'm bringing these skills, along with my strong work ethic, to
              my tech career. Based in Middle Tennessee, I'm a Full-Stack Web
              Developer with a certification from Vanderbilt University.
            </p>
          </MDBCol>
          <p>JavaScript | MongoDB | Express | React | Node | Apollo GraphQL</p>
        </MDBRow>
      </MDBContainer>
      {""}
      <MDBContainer className='more-about'>
        <MDBRow className='justify-content-md-center'>
          <MDBCol>
            <div className='text-center'>
              <a href={myResume} className='btn btn-success btn-lg'>
                MY RESUME {""}{" "}
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
