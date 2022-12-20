import React from 'react';
import './style.css';

// import { ListGroupItem } from 'react-bootstrap';
// import { ListGroup } from 'react-bootstrap';
// import {VscCircleOutline} from 'react-icons/vsc';
  
// import 'bootstrap/dist/css/bootstrap.min.css';


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

const Resume = () => {
    return (
        <div class='resume'>
            <div className='main-title'>
                <h2>Resume</h2>
                <p> Download MY RESUME </p>
            </div>
            <MDBRow>
            <MDBCol sm='6'>
                <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                    <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                    </MDBCardText>
                    <MDBBtn href='#'>Go somewhere</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='6'>
                <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                    <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                    </MDBCardText>
                    <MDBBtn href='#'>Go somewhere</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        </div>
  );
}






        


export default Resume;

   //OLD CODE
   
//     {/* //     className='bg-img' style= {{backgroundImage: `url(${BgImage})`}} */}
//     <MDBContainer className='content'>
                
//     {/* <h4 className="h4-text-center">Successfully navigating both is what makes me unique. </h4> */}
//     {/* <p className="skills-center"> Full-Stack Developer | JavaScript | Node | Express | MongoDB | React |</p> */}
//     <MDBRow>
//         <MDBCol md='6' className='summary'>
//             <h4>Summary</h4>
//             <ul>
//                 <li>amber.wilson.code@gmail.com</li>
//                 <li>615-337-1797</li>
//                 <li>Nashville, TN</li>
//             </ul>
//             <p><em>Write a short summary here.</em></p>
//         </MDBCol>
//         <MDBCol md='6' className='education'>
//             <h4>Education</h4>
//             <ListGroup>
//             <ListGroup.Item className="list-item-left-control">
//                 <i className="ed-icon"><VscCircleOutline /></i>
//                 <span>  Vanderbilt University</span>
//             </ListGroup.Item>
//                 <ListGroupItem header="Vanderbilt University | Jan. 2023">
//                     <em>Full-Stack Coding Certification</em>
//                     </ListGroupItem>
//                 <ListGroupItem header="Ball State University">
//                     <em>Accounting</em>
//                 </ListGroupItem>
//                 {/* <li>Nashville, TN</li> */}
//             </ListGroup>
//             <ul>
//                 <li>Ball State University</li>
//                 <li><em>Accounting</em></li>
//                 <li>Muncie, IN</li>
//             </ul>
           

//         </MDBCol>
//     </MDBRow>
// </MDBContainer>
     
            {/* <div className='row'>
                <div className='col-lg-6'>
                    <h4 className='section-title'>Summary</h4>
                    <div className='summary-text'>
                        <h5>Amber Wilson </h5>
                        
                        <p> 
                            
                        </p>
                    </div>
                    <h4 className='section-title'>Education</h4>
                    <div className='education-text'>
                        <h6>January 2023 | Vanderbilt University</h6>
                        <p>
                            <em>Full-Stack Coding Bootcamp Certification</em>
                        </p>
                        <h6>Ball State University</h6>
                        <p>
                            <em>Accounting</em>
                        </p>
                    </div>
                        
                </div>

            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h4 className='section-title'>Summary</h4>
                    <div className='summary-text'>
                        <h5>Amber Wilson </h5>
                        <ul>
                            <li>amber.wilson.code@gmail.com</li>
                            <li>615-337-1797</li>
                            <li>Nashville, TN</li>
                        </ul>
                        <p> 
                            <em>Write a short summary here.</em>
                        </p>
                    </div>
                    <h4 className='section-title'>Education</h4>
                    <div className='education-text'>
                        <h6>January 2023 | Vanderbilt University</h6>
                        <p>
                            <em>Full-Stack Coding Bootcamp Certification</em>
                        </p>
                        <h6>Ball State University</h6>
                        <p>
                            <em>Accounting</em>
                        </p>
                    </div>
                        
                </div>

            </div>
        </div>
            
         */}
            
        //  imgURL={AmberImage}