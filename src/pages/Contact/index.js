import React, { useState } from "react";
import './style.css';
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBTextArea
} from 'mdb-react-ui-kit';


const styles = {
  backgroundStyle: {
    background: "#3E5E82",
  },
  headingStyle: {
    fontSize: "30px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "60px",
    color: "white",
    padding: "10px",
    marginBottom: "0",
  },
};

export default function ContactForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

//   if (input === 'name') {
//     setInput(value);
//   } else if (input === 'email') {
//     setInput(value);
//   } else {
//     setInput(value);
//   }
// };


    setInput("");
      };

  const handleChange = (e) => {
    setInput(e.target.value);
  };  

  return (
    <div fluid style={styles.backgroundStyle} className='contact-page'>
   
      <h2 style={styles.headingStyle}>Want to Connect?</h2>
      <p className='info'>Email: <a href="mailto://amber.wilson.code@gmail.com"> amber.wilson.code@gmail.com</a></p>
      <p className='info'>GitHub: <a href='https://www.linkedin.com/in/amber-wilson-255272217/'>awil414</a></p>
      <p className='info'><a href='https://www.linkedin.com/in/amber-wilson-255272217/'>LinkedIn</a></p>
    
      <div>
        <MDBCard alignment='m-auto align-self-center' className='contact-card' onSubmit={handleSubmit}>
          <div className='form-outline mb-4'>
            <MDBInput 
              type='text'
              placeholder='Your name'
              value={input}
              name='text'
              className='contact-input'
              onChange={handleChange}
            ></MDBInput>
          </div>
          <div className='form-outline mb-4'>
            <MDBInput 
              type='email'
              placeholder='Email address'
              value={input}
              name='text'
              className='contact-input'
              onChange={handleChange}
            ></MDBInput>
          </div>
          <div className='form-outline mb-4'>
            <MDBTextArea
                rows='4'
                type='text'
                placeholder='Message'
                value={input}
                name='text'
                className='contact-input'
                onChange={handleChange}>
            </MDBTextArea>
          </div>

          <MDBBtn type='submit' className='mb-4' block>
            Send
          </MDBBtn>
        </MDBCard> 
      </div>
    </div>
  )
};




    // {/* {/* <form className='contact-form' onSubmit={handleSubmit}>
    //   <div className='form-outline mb-4'>
    //       <input
    //           type='text'
    //           placeholder='Your name'
    //           value={input}
    //           name='text'
    //           className='contact-input'
    //           onChange={handleChange}
    //         ></input>
    //       </div>
    //       <div className='form-outline mb-4'>
    //         <input
    //           type='email'
    //           placeholder='Email address'
    //           value={input}
    //           name='text'
    //           className='contact-input'
    //           onChange={handleChange}
    //         ></input>
    //       </div>
    //       <div className='form-outline mb-4'>
    //         <textarea
    //           rows='4'
    //           type='text'
    //           placeholder='Message'
    //           value={input}
    //           name='text'
    //           className='contact-input'
    //           onChange={handleChange}
    //         ></textarea>
    //       </div>
    //       <button className='contact-button'>Send</button>
    //     </form>
    //   </div>
    // </div>