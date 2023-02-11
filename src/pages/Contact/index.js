import React, { useState } from "react";
import "./style.css";
import { MDBContainer, MDBRow, MDBBtn, MDBIcon, MDBCol } from 'mdb-react-ui-kit';
import { FiPhone } from "react-icons/fi";
import { Col, Row, Container } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='contact'>
      <MDBRow
        
          className='contact-title'>
              <h1>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "orange",
                  }}
                >
                  Contact
                </span>
              </h1>
        
      </MDBRow>
      <MDBRow>
        <MDBCol size={3} > </MDBCol>
        <MDBCol className="disabled" size={1} style={{ paddingTop: '20px'}}>
            <a className='contact-circle'> 
            <FiPhone fontSize='22px' /> </a>
        </MDBCol>
        <MDBCol style={{ fontSize: "15px", paddingTop: "22px" }}>
            615-337-1797
        </MDBCol>
      </MDBRow>
      <MDBRow style={{ paddingTop: '25px' }}>
        <MDBCol size={3} > </MDBCol>
        <MDBCol size={1} style={{ paddingTop: '20px'}}>
            <a className='contact-circle' href='mailto:awil414@gmail.com'> 
            <AiOutlineMail fontSize='22px' /> </a>
        </MDBCol>
        <MDBCol style={{ fontSize: "15px", paddingTop: "22px" }}>
            amber.wilson.code@gmail.com
        </MDBCol>
      </MDBRow>
      <MDBRow style={{ paddingTop: '25px' }}>
        <MDBCol size={3} > </MDBCol>
        <MDBCol size={1} style={{ paddingTop: '20px'}}>
            <a className='contact-circle' href='https://github.com/awil414'> 
            <BsGithub fontSize='22px' /> </a>
        </MDBCol>
        <MDBCol style={{ fontSize: "15px", paddingTop: "22px" }}>
            github.com/awil414
        </MDBCol>
      </MDBRow>
      <MDBRow style={{ paddingTop: '25px' }}>
        <MDBCol size={3} > </MDBCol>
        <MDBCol size={1} style={{ paddingTop: '20px'}}>
            <a className='contact-circle' href='https://www.linkedin.com/in/amber-wilson-255272217/'> 
            <FaLinkedinIn fontSize='22px' /> </a>
        </MDBCol>
        <MDBCol style={{ fontSize: "15px", paddingTop: "22px" }}>
          linkedin.com/in/amber-wilson-255272217
        </MDBCol>
      </MDBRow>
      
    </div>
      
  )
}









//OLD CODE
// // Styling for background and heading
// const styles = {
//   headingStyle: {
//     fontSize: "30px",
//     textAlign: "center",
//     verticalAlign: "middle",
//     lineHeight: "60px",
//     color: "white",
//     padding: "10px",
//     marginBottom: "0",
//   },
// };

// // Contact form function with export
// export default function ContactForm() {
//   // Setting up useState for input values
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // Initial useState for submitted and valid
//   const [submitted, setSubmitted] = useState(false);
//   const [valid, setValid] = useState(false);

//   // Update state based on form input changes
//   const handleName = (e) => {
//     setValues({ ...values, name: e.target.value });
//   };
//   const handleEmail = (e) => {
//     setValues({ ...values, email: e.target.value });
//   };
//   const handleMessage = (e) => {
//     setValues({ ...values, message: e.target.value });
//   };

//   // Submit form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (values.name && values.email && values.message) {
//       setValid(true);
//     }
//     setSubmitted(true);
//     // Clear form values
//     setValues({
//         name: "",
//         email: "",
//         message: "",
//     });
//   };

//   return (
//     <div fluid className='contact-page'>
//       <h2 style={styles.headingStyle}>Want to Connect?</h2>
//       <p className='info'>
//         Email:{" "}
//         <a href='mailto:amber.wilson.code@gmail.com'>
//           {" "}
//           amber.wilson.code@gmail.com
//         </a>
//       </p>
//       <p className='info'>
//         GitHub: <a href='https://github.com/awil414'>awil414</a>
//       </p>
//       <p className='info'>
//         <a href='https://www.linkedin.com/in/amber-wilson-255272217/'>
//           LinkedIn
//         </a>
//       </p>

//       <div className='row justify-content-center'>
//         <form className='contact-form' onSubmit={handleSubmit}>
//           {submitted && valid ? (
//             <div class='success-message'>Success! Message sent</div>
//           ) : null}
//           <div className='form-outline mb-4'>
//             <input
//               type='text'
//               placeholder='Your name'
//               value={values.name}
//               name='text'
//               className='contact-input'
//               onChange={handleName}
//             ></input>
//             {submitted && !values.name ? (
//               <span className='name-error'>Please enter your name</span>
//             ) : null}
//           </div>
//           <div className='form-outline mb-4'>
//             <input
//               type='email'
//               placeholder='Email address'
//               value={values.email}
//               name='text'
//               className='contact-input'
//               onChange={handleEmail}
//             ></input>
//             {submitted && !values.email ? (
//               <span className='email-error'>Please enter an email address</span>
//             ) : null}
//           </div>
//           <div className='form-outline mb-4'>
//             <textarea
//               rows='4'
//               type='text'
//               placeholder='Message'
//               value={values.message}
//               name='text'
//               className='contact-input'
//               onChange={handleMessage}
//             ></textarea>
//             {submitted && !values.message ? (
//               <span className='message-error'>Please enter a message</span>
//             ) : null}
//           </div>
//           <button type='submit' className='btn btn-primary btn-block mb-4'>
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
