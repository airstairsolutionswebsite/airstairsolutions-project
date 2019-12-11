import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pattern from "../../images/general/pattern.png";
import Fade from "react-reveal/Fade";

function Section4() {
  return (
    <Container>
      <div className="mt-5 mb-5 pt-5 pb-5 app2-section1-main">
        <Row>
          <Fade>
            <h1>APPLICABILITY</h1>
          </Fade>
        </Row>
        <Row>
          <Fade>
            <p className="mt-5">
              Simply, many people just have trouble getting up/down stairs.The
              AeroChair™ is not a piece of medical equipment. It was carefully
              designed as a tool to overcome stairs which pose as an obstacle;
              even for professional athletes with injuries. No one wants to be
              made to feel as if their physical capacity is more diminished than
              what it is.
            </p>
          </Fade>
        </Row>
        <Row>
          <Fade>
            <h6 className="mt-5">THE AEROCHAIR™ PROVIDES</h6>
          </Fade>
        </Row>
        <Row>
          <Fade>
            <ul className="mt-5 font-weight-bold">
              <li>A level ride</li>
              <li>Quick & comfortable ride (apx 45 seconds)</li>
              <li>
                Convenience – assembles & disassembles in under 4 min to
                minimize passenger wait time
              </li>
              <li>
                Steel safety break automatically engages instantly if tension on
                the rope cable is not maintained
              </li>
              <li>
                Trolley base rollers are contained within the channels of the
                track
              </li>
              <li>
                Proximity switch controls the up movement of the chair &
                disengages remote control at the top
              </li>
              <li>
                Wireless remote control with easily accessible manual switch
                override
              </li>
              <li>Seat is securely mounted to ensure a level ride </li>
            </ul>
          </Fade>
        </Row>
        {/* <Row>
          <h6 className="mt-5 font-weight-bold">
            THE AEROCHAIR™ CAN ASSIST ANY PASSENGER WHO HAS DIFFICULTY
            NAVIGATING STAIRS POSSIBLY DUE TO:
          </h6>
        </Row>
        <Row>
          <ul className="mt-5 font-weight-bold">
            <li>Diabetes (loss of feeling in feet)</li>
            <li>Stroke</li>
            <li>Ports Injuries</li>
            <li>Hip/knee replacement</li>
            <li>Surgery</li>
            <li>Degenerative & Autoimmune Conditions (Parkinson’s, MS)</li>
          </ul>
        </Row> */}
        <Row>
          <Col></Col>
          <Col>
            <Fade bottom>
              <Image
                src={pattern}
                className="app2-section3-pattern hideAtMobile"
                alt="decoration"
              ></Image>
            </Fade>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Section4;
