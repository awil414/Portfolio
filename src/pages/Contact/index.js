import React, { useState } from "react";

function ContactForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email:</p>
      <p>GitHub:</p>
      <p>LinkedIn:</p>

      <div>
        <form className='contact-form' onSubmit={handleSubmit}>
          {/* Name input  */}
          <div className='form-outline mb-4'>
            <input
              type='text'
              placeholder='Your name'
              value={input}
              name='text'
              className='contact-input'
              onChange={handleChange}
            ></input>
          </div>
          <div className='form-outline mb-4'>
            <input
              type='email'
              placeholder='Email address'
              value={input}
              name='text'
              className='contact-input'
              onChange={handleChange}
            ></input>
          </div>
          <div className='form-outline mb-4'>
            <textarea
              rows='4'
              type='text'
              placeholder='Message'
              value={input}
              name='text'
              className='contact-input'
              onChange={handleChange}
            ></textarea>
          </div>
          <button className='contact-button'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
