import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Modal
} from "react-bootstrap";

import Fade from "react-reveal/Fade";

class SectionSubscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      show: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }
  handleSubmit(event) {
    // console.log("A name was submitted: " + this.state.value);
    // event.preventDefault();
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div className="sectionsubscribe-main-div">
        {/* <iframe
          id="mailchimpframe"
          title="mailchimp"
          name="mailchimpframe"
        ></iframe> */}
        {/* --- */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <div id="mailchimpframe-div">
            <iframe
              id="mailchimpframe"
              title="mailchimp"
              name="mailchimpframe"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <Button variant="" onClick={this.handleClose}>
            Close
          </Button>
        </Modal>
        {/* --- */}
        <Container className="pb-5 pt-5">
          <Row className="pb-3 pt-3">
            <Col className="subCOl1">
              <Fade>
                <h6>SUBSCRIBE</h6>
                <h3>GET OUR LATEST UPDATES</h3>
              </Fade>
            </Col>
            <Col className="subCOl2">
              <Form
                inline
                action="https://gmail.us20.list-manage.com/subscribe/post"
                method="POST"
                target="mailchimpframe"
                // target="_blank"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="hidden"
                  name="u"
                  value="dd4f78257252089a96c37e454"
                />
                <input type="hidden" name="id" value="0ace78d0ae" />
                <FormControl
                  placeholder="Enter Your Email"
                  className="mr-sm-2 input-frame-subscribe"
                  type="email"
                  name="MERGE0"
                  id="MERGE0"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <div className="subBtnDiv">
                  <Button
                    id="button-frame-subscribe"
                    className="pr-5 pl-5 pt-3 pb-3"
                    variant="outline-dark"
                    type="submit"
                  >
                    SUBSCRIBE
                  </Button>

                  <input
                    type="hidden"
                    name="ht"
                    value="45a14f223df5bfaaa5ec552653a076f65d775cb0:MTU3MjM1ODE3MS4xOTAz"
                  />
                  <input type="hidden" name="mc_signupsource" value="hosted" />
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default SectionSubscribe;
