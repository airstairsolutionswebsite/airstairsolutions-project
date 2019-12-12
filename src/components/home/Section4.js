import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import section4img1 from "../../images/home/home-section4-img1.jpeg";
import pattern from "../../images/general/pattern.png";
import Fade from "react-reveal/Fade";

function Section4() {
  return (
    <Container className="mt-5 mb-5 pt-5 pb-5 home-section4-div">
      <Row>
        <Col className="section4-safety">
          <Fade>
            <h1 className="mt-5">SAFETY</h1>
          </Fade>
          <Fade>
            <p className="mt-5 mr-5">
              The safety of the passenger, crew and assisting ground support
              personnel are critically important. The AeroChair™ alleviates the
              responsibility of crew members and FBO personnel from physically
              lifting and carrying the passenger. Factors such as rain, snow,
              ice, make for treacherous conditions, putting everyone safety in
              jeopardy.
            </p>
          </Fade>
          <Fade>
            <div className="btnl">
              <Link to="/aero-chair">
                <Button
                  id="button-frame-1"
                  className="pr-5 pl-5 pt-3 pb-3 mt-5"
                  variant="outline-danger"
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </Fade>
          <br></br>
          <Image
            width="300"
            src={pattern}
            alt="pattern"
            className="mt-5 pt-5 home-section4-pattern"
            fluid
          ></Image>
        </Col>
        <Col>
          <div>
            <Fade right>
              <Image
                className="float-right"
                src={section4img1}
                alt="product"
                fluid
              ></Image>
            </Fade>
            <Card bg="" text="white" id="section4-card">
              <Card.Body id="section4-card-body">
                <Card.Text>
                  <Fade>
                    <ul className="mt-4 section4-li-check-list">
                      <li>
                        <i className="fas fa-check mt-4"></i> Safety break
                      </li>
                      <li>
                        <i className="fas fa-check mt-3"></i> Easily supports
                        350lbs
                      </li>
                      <li>
                        <i className="fas fa-check mt-3"></i> Limit switch
                      </li>
                    </ul>
                  </Fade>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section4;
