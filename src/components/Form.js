import './FormStyles.css';
import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

  const isConfirmed = window.confirm('Are you sure you want to send the message?');

  if (isConfirmed) {

    emailjs
      .sendForm(
        'service_jpshxv8',
        'template_hrdrgwp',
        form.current,
        'Hmtl6MMO__edoj4ms'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
    }
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Full Name"
          name="user_name"
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="user_email"
          required
        ></input>
        <label>Subject</label>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          required
        ></input>
        <label>Message</label>

        <textarea
          name="message"
          placeholder="Type your message here..."
          rows="6"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
