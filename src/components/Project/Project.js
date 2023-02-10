import React from "react";
import "./project.css";
import { VscGithub } from "react-icons/vsc";
import {
  MDBCard,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from "mdb-react-ui-kit";

// Project function with props in project cards for project images, titles, and links to github and deployed/demo
export default function Project(props) {
  return (
    <div>
      <MDBCard className='h-100'
        style={{ maxWidth: "30rem"}}
        // className='mb-2 mt-4 border-2 rounded-4 text-black'
      >
        <div class='img-blur'>
          <MDBCardImage
            className='w-100 rounded-6'
            overlay
            src={props.imgPath}
            alt='card-img'
            position='top'
          />
        </div>
        <MDBCardBody >
          <MDBCardTitle style={{ textAlign: 'center' }} > {props.title}</MDBCardTitle>

          <MDBCardText 
          style={{ textAlign: "center" }}
          >
          {props.description}
          </MDBCardText>

        </MDBCardBody>
        <MDBCardFooter >
          <center>
            <MDBBtn  size={'sm'}  
            // style={{ float: 'right' }} 
            href={props.demoLink}>
              CLICK TO SEE
            </MDBBtn>
            &nbsp;&nbsp;&nbsp;
            <a className='project-icon' href={props.ghLink}>
              <VscGithub />
            </a>
          </center>
        </MDBCardFooter>
      </MDBCard>



      {/* <MDBRow className='align-items-center' style={{ maxWidth: "24rem", textAlign: 'justify' }}>
        <MDBCol >
          <MDBBtn size={'sm'}  style={{ float: 'right' }} href={props.demoLink}>
            CLICK TO SEE
          </MDBBtn>
        </MDBCol>
        <MDBCol>
          {" "}
          <a className='project-icon' href={props.ghLink}>
            <VscGithub />
          </a>
        </MDBCol>
      </MDBRow> */}
    </div>
  );
}

//OLD CODE
// export default function Project(props) {
//   return (
//     <MDBCard className='project-card'>
//       <MDBCardImage
//         // src='https://mdbootstrap.com/img/new/standard/city/041.webp'
//         src={props.imgPath}
//         alt='card-img'
//         position='top'
//       />
//       <MDBCardBody>

//         <MDBCardTitle>{props.title}</MDBCardTitle>

//         <MDBCardText style={{ textAlign: "justify" }}>
//           {props.description}
//         </MDBCardText>
//         <Button href={props.ghLink} target='_blank' variant='primary'></Button>
//         <Button
//           href={props.demoLink}
//           target='_blank'
//           variant='primary'
//         ></Button>
//       </MDBCardBody>
//     </MDBCard>

//   );
// }
