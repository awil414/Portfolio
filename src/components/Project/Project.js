import React from "react";
import "./style.css";
import { VscGithub } from "react-icons/vsc";
import {
  MDBCard,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

// Project function with props in project cards for project images, titles, and links to github and deployed/demo
export default function Project(props) {
  return (
    <div>
      <MDBCard
        style={{ maxWidth: "30rem", height: "20rem " }}
        className='mb-2 mt-4 border-2 rounded-4 text-white'
      >
        <div class='img-blur'>
          <MDBCardImage
            className='w-100 rounded-6'
            overlay
            src={props.imgPath}
            alt='card-img'
          />
        </div>
      </MDBCard>
      <MDBRow className='text-left' style={{ maxWidth: "24rem" }}>
        <MDBCol>
          <MDBBtn data-mdb-ripple-color='#44c6e3' href={props.demoLink}>
            {props.title}
          </MDBBtn>
        </MDBCol>
        <MDBCol>
          {" "}
          <a className='project-icon' href={props.ghLink}>
            <VscGithub />
          </a>
        </MDBCol>
      </MDBRow>
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
