import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SocialRow from "./SocialRow";
import FeedbackForm from "./FeedbackForm.js";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "Name", email: "email@example.com" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="mt-5 mb-5 pt-5 pb-5">
            <Col className="addressCol">
              <h6 className="mt-3">ADDRESS</h6>
              <a
                href="https://www.google.com/maps/place/United+States+Postal+Service/@26.8422546,-80.0878045,15z/data=!4m2!3m1!1s0x0:0x1ba896d26a205471?sa=X&ved=2ahUKEwiBke25jePlAhUO2qwKHdHuCMIQ_BIwZ3oECFcQCA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  PO Box 81349 <br /> Palm Beach Gardens, FL 33410
                </p>
              </a>
              <br />
              <h6>PHONE</h6>
              <a href="tel:5612544101">
                <p>561-254-4101</p>
              </a>
              <br />
              <h6>EMAIL</h6>
              <a href="mailto:aimee@airstairsolutions.com">
                <p>aimee@airstairsolutions.com</p>
              </a>
              <br />
              <h6>FOLLOW US</h6>
              <SocialRow></SocialRow>
            </Col>
            {/* email.js */}
            <Col>
              <FeedbackForm></FeedbackForm>
            </Col>
            {/* email.js */}
          </Row>
          <Row></Row>
        </Container>
        <Row className={this.props.pricingReq}>
          <iframe
            src="https://snazzymaps.com/embed/198838"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="map"
          ></iframe>
        </Row>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "template_IPuwlkW3";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}

export default ContactForm;
