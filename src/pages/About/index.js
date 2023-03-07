import React from "react";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AmberImage from "../../images/me.jpeg";
import "./style.css";
import "./references.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
// import Type from "./Type";
import "./type.css";
import myResume from "../../media/amberwilson.pdf";
import Caroline from "../../images/References/Caroline.png";
import Donnie from "../../images/References/Donnie.jpeg";
import Saurav from "../../images/References/Saurav.K.png";



// Function to return About page on renderPage
export default function About({ currentPage, setCurrentPage }) {

  const data = [
    {
      photo: Donnie,
      name: 'Don Allen, Ph.D.',
      title: 'Talent Management Consultant',
      reference: 'I have seen Amber operate in multiple business contexts, both as a leader, and as a professional. She is highly committed to excellence, focused on the customer, and shows the ability to organize people toward positive outcomes. Her decisions and recommendations are backed by both data and experience. Perhaps most importantly, she is a great team player who is energetic and easy to work with!'
    },
    {
      photo: Saurav,
      name: 'Saurav Khatiwada',
      title: 'Software Engineer',
      reference: 'I had the pleasure of teaching Amber as one of my students and I am thrilled to highly recommend her for any future endeavors. Throughout the program, Amber consistently demonstrated exceptional skills as a developer and problem solver. She was able to quickly grasp complex concepts and apply them to real-world projects, always striving for excellence. Her passion for the subject and her willingness to share her knowledge made her a valuable asset to the class. I am confident that Amber will be a valuable addition to any team she joins and I strongly recommend her for any web development opportunities.'
    },
    {
      photo: Caroline,
      name: 'Caroline Kyle',
      title: 'Software Engineer',
      reference: 'Amber has a strong foundation in HTML, CSS, and JavaScript, and has demonstrated an ability to quickly pick up new technologies and frameworks, such as React.js. She also has a strong foundation of backend development with knowledge of both relational and non relational databases such as MySQL and MongoDB. In addition to her technical skills, Amber also impressed me with her ability to work well in a team. She is a great communicator and is able to effectively communicate her ideas to others. I am confident that Amber would be a valuable asset to any organization and would bring a positive, energetic, and collaborative approach to any team. I highly recommend Amber for any Web Developer role and believe she will excel in this position.'
    },
  
  ]


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
              </span> {" "}
               seasoned at building partnerships, fostering collaborative
              relationships, and acting as{" "}
              <span style={{ color: "green", fontSize: "16px" }}>
                translator between business users and internal teams
              </span>
              . I'm bringing these skills, along with my strong work ethic, to
              my tech career. Based in Middle Tennessee, I'm a <span style={{ color: "green", fontWeight: "bolder", fontSize: "16px" }}> Full-Stack Web
              Developer </span> with a certification from Vanderbilt University.
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
      <MDBContainer className="references" style= {{ paddingTop: '50px', textAlign: 'center' }}>
        <h3 className="reco-title" style={{ paddingBottom: '10px', textDecoration: "underline",
                    textDecorationColor: "orange", }} > Recommendations </h3>
        <Swiper className='references_container'
          modules={ [ Pagination, Navigation ]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('new slide')} >
          {
            data.map(({ photo, name, title, reference }, index ) => {
              return (
                <SwiperSlide key={index} className='references'>
                <div className='reference_photo'>
                  <img src={photo} alt=''/>
                </div>  
                <h5 className='reference_name'> {name} </h5>
                <h6 className='reference_title'> {title} </h6>
                <small className='reference_text'> {reference} </small>
                </SwiperSlide>
              )
            })
          }
          </Swiper>
      </MDBContainer>
    </div>
  );
}
