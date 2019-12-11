import React, { Component } from "react";
import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homesection3img1 from "../../images/home/home-section3-img1.jpg";
import homesection3img1red from "../../images/home/home-section3-img1-red.jpg";
import homesection3img2 from "../../images/home/home-section3-img2.jpg";
import homesection3img2red from "../../images/home/home-section3-img2-red.jpg";
import homesection3img3 from "../../images/home/home-section3-img3.jpg";
import homesection3img3red from "../../images/home/home-section3-img3-red.jpg";
import homesection3img4 from "../../images/home/home-section3-img4.jpg";
import homesection3img4red from "../../images/home/home-section3-img3-red.jpg";
import homesection3img5 from "../../images/home/home-section3-img5.jpg";
import homesection3img5red from "../../images/home/home-section3-img5-red.jpg";
import Fade from "react-reveal/Fade";

// import MotorDriveUnit from "./section3/MotorDriveUnit";
// import HingedTrack from "./section3/HingedTrack";
// import ChairBase from "./section3/ChairBase";

class Section3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img1: homesection3img1,
      img2: homesection3img2,
      img3: homesection3img3,
      img4: homesection3img4,
      img5: homesection3img5,
      hiddenRedImage: true
    };
    this.showRedImage1 = this.showRedImage1.bind(this);
    this.hideRedImage1 = this.hideRedImage1.bind(this);
    this.showRedImage2 = this.showRedImage2.bind(this);
    this.hideRedImage2 = this.hideRedImage2.bind(this);
    this.showRedImage3 = this.showRedImage3.bind(this);
    this.hideRedImage3 = this.hideRedImage3.bind(this);
    this.showRedImage4 = this.showRedImage4.bind(this);
    this.hideRedImage4 = this.hideRedImage4.bind(this);
    this.showRedImage5 = this.showRedImage5.bind(this);
    this.hideRedImage5 = this.hideRedImage5.bind(this);
  }
  showRedImage1() {
    this.setState({
      img1: homesection3img1red,
      hiddenRedImage: false
    });
  }
  hideRedImage1() {
    this.setState({
      img1: homesection3img1,
      hiddenRedImage: true
    });
  }
  showRedImage2() {
    this.setState({
      img2: homesection3img2red,
      hiddenRedImage: false
    });
  }
  hideRedImage2() {
    this.setState({
      img2: homesection3img2,
      hiddenRedImage: true
    });
  }
  showRedImage3() {
    this.setState({
      img3: homesection3img3red,
      hiddenRedImage: false
    });
  }
  hideRedImage3() {
    this.setState({
      img3: homesection3img3,
      hiddenRedImage: true
    });
  }
  showRedImage4() {
    this.setState({
      img4: homesection3img4red,
      hiddenRedImage: false
    });
  }
  hideRedImage4() {
    this.setState({
      img4: homesection3img4,
      hiddenRedImage: true
    });
  }
  showRedImage5() {
    this.setState({
      img5: homesection3img5red,
      hiddenRedImage: false
    });
  }
  hideRedImage5() {
    this.setState({
      img5: homesection3img5,
      hiddenRedImage: true
    });
  }

  render() {
    return (
      <div className="home-section3-main-div">
        <Container>
          <Row>
            <Col>
              <Fade bottom>
                <h1 className="text-center mt-5 pt-5 text-white">
                  HOW DOES IT WORK
                </h1>
                <p className="text-center mt-5 text-white">
                  The unit assembly and disassembly is able to be performed in
                  under 4 minutes to minimize passenger inconvenience. The
                  separate components of this portable lift allow the crew to
                  break down quickly, stow on-board the aircraft in baggage &
                  reassemble quickly upon arrival.
                </p>
              </Fade>
            </Col>
          </Row>
        </Container>
        <div className="mt-5 mb-5 pt-5 mr-5 ml-5 pr-5 pl-5">
          <Row>
            <Col>
              <Figure className="text-center">
                {this.state.hiddenRedImage === true ? (
                  <div></div>
                ) : (
                  <Link
                    to="/aero-chair"
                    className="text-white"
                    id="home-section3-img-h6"
                    onMouseEnter={this.showRedImage1}
                    onMouseOut={this.hideRedImage1}
                  >
                    SEE MORE
                  </Link>
                )}
                <Fade left>
                  <Figure.Image
                    width={371}
                    height={380}
                    alt="171x180"
                    src={this.state.img1}
                    fluid
                    onMouseEnter={this.showRedImage1}
                    onMouseOut={this.hideRedImage1}
                  />
                </Fade>
                <Figure.Caption className="text-white mt-4">
                  MOTOR DRIVE UNIT
                </Figure.Caption>
              </Figure>
            </Col>
            {/* item */}
            <Col>
              <Figure className="text-center">
                {this.state.hiddenRedImage === true ? (
                  <div></div>
                ) : (
                  <Link
                    to="/aero-chair"
                    className="text-white"
                    id="home-section3-img-h6"
                    onMouseEnter={this.showRedImage2}
                    onMouseOut={this.hideRedImage2}
                  >
                    SEE MORE
                  </Link>
                )}
                <Fade bottom>
                  <Figure.Image
                    width={371}
                    height={380}
                    alt="171x180"
                    src={this.state.img2}
                    fluid
                    onMouseEnter={this.showRedImage2}
                    onMouseOut={this.hideRedImage2}
                  />
                </Fade>
                <Figure.Caption className="text-white mt-4">
                  HINGED TRACK
                </Figure.Caption>
              </Figure>
            </Col>
            {/* item */}
            <Col>
              <Figure className="text-center">
                {this.state.hiddenRedImage === true ? (
                  <div></div>
                ) : (
                  <Link
                    to="/aero-chair"
                    className="text-white"
                    id="home-section3-img-h6"
                    onMouseEnter={this.showRedImage3}
                    onMouseOut={this.hideRedImage3}
                  >
                    SEE MORE
                  </Link>
                )}
                <Fade top>
                  <Figure.Image
                    width={371}
                    height={380}
                    alt="171x180"
                    src={this.state.img3}
                    fluid
                    onMouseEnter={this.showRedImage3}
                    onMouseOut={this.hideRedImage3}
                  />
                </Fade>
                <Figure.Caption className="text-white mt-4">
                  CHAIR BASE
                </Figure.Caption>
              </Figure>
            </Col>
            {/* item */}
            <Col>
              <Figure className="text-center">
                {this.state.hiddenRedImage === true ? (
                  <div></div>
                ) : (
                  <Link
                    to="/aero-chair"
                    className="text-white"
                    id="home-section3-img-h6"
                    onMouseEnter={this.showRedImage4}
                    onMouseOut={this.hideRedImage4}
                  >
                    SEE MORE
                  </Link>
                )}
                <Fade bottom>
                  <Figure.Image
                    width={371}
                    height={380}
                    alt="171x180"
                    src={this.state.img4}
                    fluid
                    onMouseEnter={this.showRedImage4}
                    onMouseOut={this.hideRedImage4}
                  />
                </Fade>
                <Figure.Caption className="text-white mt-4">
                  TROLLEY BASE
                </Figure.Caption>
              </Figure>
            </Col>
            {/* item */}
            <Col>
              <Figure className="text-center">
                {this.state.hiddenRedImage === true ? (
                  <div></div>
                ) : (
                  <Link
                    to="/aero-chair"
                    className="text-white"
                    id="home-section3-img-h6"
                    onMouseEnter={this.showRedImage5}
                    onMouseOut={this.hideRedImage5}
                  >
                    SEE MORE
                  </Link>
                )}
                <Fade right>
                  <Figure.Image
                    width={371}
                    height={380}
                    alt="171x180"
                    src={this.state.img5}
                    fluid
                    onMouseEnter={this.showRedImage5}
                    onMouseOut={this.hideRedImage5}
                  />
                </Fade>
                <Figure.Caption className="text-white mt-4">
                  CARGO BASE
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row className="mt-5 text-center">
            <Col>
              <Fade>
                <Link to="./aero-chair">
                  <Button
                    variant="outline-light"
                    id="button-frame-1"
                    className="pr-5 pl-5 pt-3 pb-3"
                  >
                    LEARN MORE
                  </Button>
                </Link>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Section3;
