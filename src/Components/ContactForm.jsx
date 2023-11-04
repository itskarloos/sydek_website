import { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

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
          setIsEmailSent(true); // Set the state to indicate that the email is sent
          setTimeout(() => {
            setIsEmailSent(false); // Hide the popup after 3 seconds
          }, 3000);
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
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" className="glow-on-hover" value="Send">
          {" "}
          Submit{" "}
        </button>
      </form>

      {isEmailSent && (
        <div className="popup">
          <div className="popup-inner">
            <p>Email sent successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
