import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homesection2img1 from "../../images/home/home-section2-img1.jpg";
import pattern from "../../images/general/pattern.png";

import Fade from "react-reveal/Fade";

function Section2() {
  return (
    <Container className="mt-5 mb-5 pt-5 pb-5 home-section-2-main">
      <Row>
        <Col>
          <Fade left>
            <Image
              className="homesection2img1"
              src={homesection2img1}
              alt="item"
              fluid
            />
          </Fade>
        </Col>

        <Col>
          <Fade right>
            <Image
              className="float-right hs2-pattern"
              width="400"
              src={pattern}
              alt="pattern"
              fluid
            />
          </Fade>
          <Fade bottom>
            <div className="home-section2-red-div">
              <h3 className="text-white">
                The AeroChair™ A motorized chair lift to ascend/descend aircraft
                stairs
              </h3>
              <p className="text-white ml-5 mt-5">
                “For over 45 years of my aviation career, I have witnessed
                operators of all size aircraft struggle to assist passengers
                up/down aircraft stairs and also load heavy bags high overhead
                in baggage holds.
                <br />
                <br />
                Carrying a passenger up/down aircraft stairs is a tremendous
                indignity and liability; it is extremely humiliating and the
                risk of injury to crew & passenger is high.”
              </p>
              <Link to="/team-and-vision">
                <div className="btna">
                  <Button
                    variant="outline-light"
                    id="button-frame-1"
                    className="pr-5 pl-5 pt-3 pb-3 mt-5"
                  >
                    ABOUT US
                  </Button>
                </div>
              </Link>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}
export default Section2;
