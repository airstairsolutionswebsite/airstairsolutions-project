import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { MDBBtn } from "mdbreact";

export default class FeedbackForm extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: ""
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, phoneNumber, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Soleste Living",
      phoneNumber: phoneNumber,
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_VFZZ9dUH",
      templateParams,
      "user_XmSvfoBKQhPmLjMbCFfDq"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div className="feedbackform">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
              className="form-control rounded-0 mt-3"
            ></input>

            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Email"
              className="form-control rounded-0 mt-3"
            />
            <input
              type="number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange.bind(this, "phoneNumber")}
              placeholder="Phone"
              className="form-control rounded-0 mt-3"
            />
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Subject"
              className="form-control rounded-0 mt-3"
            />
            <textarea
              name="message"
              className="form-control rounded-0 mt-3"
              rows="10"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="contact-form-submit-button-div">
            <MDBBtn
              color="unique"
              className="ml-0 pr-5 pl-5 mt-3 contact-form-submit-button"
              type="submit"
            >
              SEND
            </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}
