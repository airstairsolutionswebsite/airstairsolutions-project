import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import app3section1img1 from "../../images/app3/app3-section1-img1.jpg";
import pattern from "../../images/general/pattern.png";
import SocialRow from "../app3/SocialRow";
import Fade from "react-reveal/Fade";

import koreaPilot from "../../images/app3/koreaPilot.jpg";

function Section1() {
  return (
    <Container>
      <Row>
        <Col>
          <Fade>
            <h1 className="text-center mt-5">VISION</h1>
            <p className="text-center mt-5">
              For over 45 years of my aviation career, I have witnessed
              operators of all size aircraft struggle to assist passengers
              up/down aircraft stairs and also load heavy bags high overhead in
              baggage holds. Carrying a passenger up/down aircraft stairs is a
              tremendous indignity and liability; it is extremely humiliating
              and the risk of injury to crew & passenger is high. In 2009, to
              accommodate a wheelchair bound passenger, he searched for a
              strong, compact device to keep on-board his aircraft for use at
              any location. After not having found such a device, he designed
              one himself.
            </p>

            <p className="text-center mt-5">
              “Being faced with the difficulty of assisting passengers on the
              stairs and also loading heavy baggage 7 feet overhead, I designed
              solutions. My passenger and cargo lifts are strong, reliable and
              most important, portable.”
            </p>
            <p className="float-right">
              <b>- Les Weaver</b> <br />
              <span className="float-right">President</span>
            </p>
          </Fade>
        </Col>
      </Row>
      <Col className="mt-5">
        <Col>
          <div>
            <Fade left>
              <Image
                className="app3-section1-absolute"
                src={pattern}
                alt="pattern"
                fluid
              ></Image>
            </Fade>
            <Fade bottom>
              <Image src={app3section1img1} alt="product" fluid></Image>
            </Fade>
          </div>
        </Col>
      </Col>
      <Row className="descRows">
        <Col>
          <h3 className="mt-5">Aimee N. Weaver</h3>
          <h6 className="mt-5">President, Co-Founder</h6>
          <ul className="mt-5">
            <p>
              Aimee Weaver has spent 20 years working in corporate aviation. She
              has exceptionally well-rounded experience in a multitude of
              aviation segments serving; Parts 91 & 135 Flight Operations, Part
              145 Repair Stationa, daily international Airbus shuttle ops, ASAP
              Manager, and FBO management. Aimee is the 3rd generation of her
              family to work in aviation. Her grandfather was a lifelong
              professional pilot after leaving the Army Air Corps after the war,
              her father is Chief Pilot & former FAA Check-Airman for Fortune
              500 companies, and her brother an Air Traffic Controller in combat
              zones. Her vast connections have proven invaluable with strategic
              positioning of the companies & causes she represents. Aimee is a
              true peer among OEM’s, industry execs, suppliers, and aviation
              tradeshows & events.
              <br />
              <br />
              Aimee, joined her father in 2011 to bring to market his patented
              motorized, portable chair lift to aid those who are unable to
              navigate aircraft stairs; removing stairs from posing an obstacle.
              <br />
              <br />
              Aimee has a B.A. from Baylor University in Corporate
              Communications & French. She spent 2yrs in Paris performing
              post-grad studies and working.
            </p>
          </ul>
          <div className="socialRows-Mob" style={{ display: "none" }}>
            <SocialRow></SocialRow>
          </div>
        </Col>
        <Col>
          <h3 className="mt-5">Leslie D. Weaver, CEO</h3>
          <h6 className="mt-5">Inventor, Patent Holder</h6>
          <p className="mt-5">
            Les Weaver brings 45 years of corporate aviation experience to
            AirStair Solutions, LLC. Les has served as Chief Pilot and Director
            of Flight Operations for 30 years. He has been a Captain for Fortune
            200 companies: Sara Lee, Chrysler Corporation, and Delphi. With
            20,000+ flight hours of extensive worldwide operations, Les has
            spent his career in the most technologically advanced Bombardier &
            Gulfstream aircraft. His expertise in these advanced aircraft led
            him to be FAA ‘Check-Airman,’ testing pilot proficiencies holding
            their pass/fail authority on multiple aircraft platforms
            <br />
            <br />
            Les is a 10year voting member of Bombardier’s distinguished ‘Global
            Advisory Committee.’ Les has extensive experience in new aircraft
            completions, factory deliveries, and aircraft management. Les holds
            a B.S. Aviation Management.
          </p>
          <Image
            className="pilotPattern"
            src={pattern}
            width="50%"
            alt="pattern"
            fluid
          ></Image>
          <Fade right>
            <Image
              className="float-right mr-5 koreaPilot"
              src={koreaPilot}
              width="50%"
              alt="pilot"
              fluid
            />
          </Fade>
          <div className="socialRows-Mob" style={{ display: "none" }}>
            <SocialRow></SocialRow>
          </div>
        </Col>
      </Row>
      <Row className="mb-5 socialRows">
        <Col>
          <SocialRow></SocialRow>
        </Col>
        <Col>
          <SocialRow></SocialRow>
        </Col>
      </Row>
    </Container>
  );
}
export default Section1;
