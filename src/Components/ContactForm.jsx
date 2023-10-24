import React, { Component } from "react";
import "./ContactForm.css"; // Import the CSS file

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log("Form Data:", this.state);
  };

  render() {
    return (
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </div>

          <button type="submit" className="glow-on-hover">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
