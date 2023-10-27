import React, { Component, useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yoafxd9",
        "template_8ud0jn7",
        form.current,
        "UG0UnFP-mZGZsz25t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" className="glow-on-hover" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
