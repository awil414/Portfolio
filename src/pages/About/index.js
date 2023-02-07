import React from "react";
// import BgImage from "../../images/backgroundimg.jpg";
import AmberImage from "../../images/me.jpeg";
import "./style.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Type from "./Type";
import "./type.css";

// Function to return About page on renderPage
export default function About() {
  return (
    <div className='about' 
    // style={{ backgroundImage: `url(${BgImage})` }}
    >
      {" "}
      <MDBContainer className='about-container'>
        <h1>
          Welcome! {""}{" "}
          <span className='wave' role='img' aria-labelledby='wave'>
            👋
          </span>
          <strong className='name'> I'm Amber</strong>
        </h1>
        <MDBRow className='justify-content-md-center' imgURL={AmberImage}>
            <div className='amber-img'></div>
          {/* <MDBCol md='5' className='about-image' imgURL={AmberImage}>
            <div className='amber-img'></div>
          </MDBCol> */}
        </MDBRow>
        <MDBRow md='7' className='about-text'>
          {/* <MDBCol md='7' className='about-text'> */}
            {/* <p>
              I'm a full-stack developer based in Nashville, TN with a
              certification from Vanderbilt University. Check out my portfolio
              page! I have a background in Accounting and Sales, and I own my
              own business. If you want to know more about me, or my work, or
              want to buy me a lemonade at the bottom of the Grand Canyon, let's
              talk.
            </p> */}
          <p className="fsd">
            <Type />
          </p>
          <p >
            JavaScript | MongoDB | Express | React | Node | Apollo GraphQL
            
          </p>
          {/* </MDBCol> */}
          
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
