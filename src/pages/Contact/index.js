import React, { useState } from "react";
import "./style.css";
// import { MDBInput, MDBBtn, MDBCard, MDBTextArea } from "mdb-react-ui-kit";

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

export default function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  // const [status, setStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleName = (e) => {
    setValues({...values, name: e.target.value});
  };
  const handleEmail = (e) => {
    setValues({...values, email: e.target.value});
  };
  const handleMessage = (e) => {
    setValues({...values, message: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.name && values.email && values.message){
      setValid(true)
    }
    setSubmitted(true);
  };
  
  return (
    <div fluid style={styles.backgroundStyle} className='contact-page'>
      <h2 style={styles.headingStyle}>Want to Connect?</h2>
      <p className='info'>
        Email:{" "}
        <a href='mailto:amber.wilson.code@gmail.com'>
          {" "}
          amber.wilson.code@gmail.com
        </a>
      </p>
      <p className='info'>
        GitHub:{" "}
        <a href='https://github.com/awil414'>
          awil414
        </a>
      </p>
      <p className='info'>
        <a href='https://www.linkedin.com/in/amber-wilson-255272217/'>
          LinkedIn
        </a>
      </p>
     
      <div className='row justify-content-center'>
        <form className='contact-form' onSubmit={handleSubmit}>
          {submitted && valid ? <div class='success-message'>Success! Message sent</div> : null }
          <div className='form-outline mb-4'>
            <input
              type='text'
              placeholder='Your name'
              value={values.name}
              name='text'
              className='contact-input'
              onChange={handleName}
            ></input>
            {submitted && !values.name ? <span className="name-error">Please enter your name</span> : null }
          </div>
          <div className='form-outline mb-4'>
            <input
              type='email'
              placeholder='Email address'
              value={values.email}
              name='text'
              className='contact-input'
              onChange={handleEmail}
            ></input>
            {submitted && !values.email ? <span className="email-error">Please enter an email address</span> : null }
          </div>
          <div className='form-outline mb-4'>
            <textarea
              rows='4'
              type='text'
              placeholder='Message'
              value={values.message}
              name='text'
              className='contact-input'
              onChange={handleMessage}
            ></textarea>
            {submitted && !values.message ? <span className="message-error">Please enter a message</span> : null }
          </div>
          <button type='submit' className='btn btn-primary btn-block mb-4'>Send</button>
        </form>
      </div>
    </div>
  );
}
