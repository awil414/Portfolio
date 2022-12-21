import React from "react";
import './style.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardTitle,
  MDBCardText,

} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";


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



import { MDBRipple } from 'mdb-react-ui-kit';

export default function Project(props)  {
  return (
    <MDBCard className='h-100 mb-3 border-2 rounded-4 text-white'>
    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
      <div class='img-blur'>
      <MDBCardImage className='w-100 rounded-6' overlay src={props.imgPath} alt='card-img'/>
      <MDBCardOverlay className='text-danger'>
        <MDBCardTitle>{props.title}</MDBCardTitle>
      </MDBCardOverlay>
        <a href={props.demoLink}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <p className='text-white mb-0'>Deployed / Demo </p>
          </div>
        </div>
        <div className='hover-overlay'>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
        </div>
        </a>
        <a href={props.ghLink}>
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <p className='text-white mb-0'>GitHub</p>
            </div>
          </div>
          <div className='hover-overlay'>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
          </div>
        </a>
     
      </div>
    </MDBRipple>
    </MDBCard>
  );
}