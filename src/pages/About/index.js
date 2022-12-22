import React from "react";
import BgImage from "../../images/backgroundimg.jpeg";
import AmberImage from "../../images/me.jpeg";
import "./style.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function About() {
  return (
    <div className='bg-img' style={{ backgroundImage: `url(${BgImage})` }}>
      {" "}
      <MDBContainer className='about-container'>
        <h4>
          Welcome! {""}{" "}
          <span className='wave' role='img' aria-labelledby='wave'>
            👋
          </span>
          <strong className='name'> I'm Amber </strong>
        </h4>
        <MDBRow>
          <MDBCol md='7' className='about-text'>
            <p>
              I am a full-stack developer based in Nashville, TN with a
              certification from Vanderbilt University. Check out my portfolio
              page! I have a background in Accounting and Sales, and I own my
              own business. If you want to know more about me, or my work, or
              want to buy me a lemonade at the bottom of the Grand Canyon, let's
              talk.
            </p>
          </MDBCol>
          <MDBCol md='5' className='about-image' imgURL={AmberImage}>
            <div className='amber-img'></div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
