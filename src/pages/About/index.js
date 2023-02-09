import React from "react";
// import BgImage from "../../images/backgroundimg.jpg";
import AmberImage from "../../images/me.jpeg";
import "./style.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import Type from "./Type";
import "./type.css";
import myResume from "../../media/aresume.pdf";
import { FiDownload } from "react-icons/fi";

// Function to return About page on renderPage
export default function About() {
  return (
    <div className='about' 
    // style={{ backgroundImage: `url(${BgImage})` }}
    >
      {" "}
      <MDBContainer className='about-container'>
        <h2>
          Welcome! {""}{" "}
          <span className='wave' role='img' aria-labelledby='wave'>
            👋
          </span>
          <strong className='name'> I'm Amber</strong>
        </h2>
        <MDBRow className='justify-content-md-center' >
          {/* imgURL={AmberImage}>
          <div className='amber-img'></div> */}
          <MDBCol md='4' className='about-image' imgURL={AmberImage}>
            <div className='amber-img'></div>
          </MDBCol>
        
        {/* <MDBRow md='7' className='about-text'> */}
          <MDBCol md='8' className='about-text'> 
            <p>
              I'm an <span style={{ color: 'green', fontSize: '16px' }} >entrepreneur </span>, seasoned at building partnerships, fostering collaborative relationships,
              and acting as <span style={{ color: 'green', fontSize: '16px'}} >translator between business users and internal teams</span>.
              I'm bringing these skills, along with my strong work ethic, to my tech career. Based in Middle Tennessee, I have a Full-Stack Web Developer
              certification from Vanderbilt University.
              
            </p> 
          </MDBCol>
          {/* <p className="fsd">
            <Type />
          </p> */}
          <p >
            JavaScript | MongoDB | Express | React | Node | Apollo GraphQL
            
          </p>
          {/* </MDBCol> */}
          
        </MDBRow>
      </MDBContainer>
      {''}
      <MDBContainer className='more-about' >
        <MDBRow className="justify-content-md-center" >
          <div className='resume-link'>
            <a style={{ color: 'green', textDecoration: 'none' }} href={myResume}>MY RESUME {''} </a>{''}
            &nbsp; 
            <i className="download-icon">
             <FiDownload />
            </i>
          </div> {''}

        </MDBRow>
        
      </MDBContainer>
    </div>
  );
}
