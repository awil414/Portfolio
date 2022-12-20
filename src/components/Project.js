import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  // MDBRow,
  // MDBCol
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

// export default function Project({title, description}) {
//   return (

export default function Project(props) {
  return (
    // <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
    //   <MDBCol>
    <MDBCard className='project-card'>
      <MDBCardImage
        // src='https://mdbootstrap.com/img/new/standard/city/041.webp'
        src={props.imgPath}
        alt='card-img'
        position='top'
      />
      <MDBCardBody>
        {/* <MDBCardTitle>{title}</MDBCardTitle> */}
        <MDBCardTitle>{props.title}</MDBCardTitle>
        {/* <MDBCardText>
              {description}
            </MDBCardText> */}
        <MDBCardText style={{ textAlign: "justify" }}>
          {props.description}
        </MDBCardText>
        <Button href={props.ghLink} target='_blank' variant='primary'></Button>
        <Button
          href={props.demoLink}
          target='_blank'
          variant='primary'
        ></Button>
      </MDBCardBody>
    </MDBCard>
    //   </MDBCol>

    // </MDBRow>
  );
}

// export default Project;
