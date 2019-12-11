import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AirstairLogo from "../../images/general/Airstair-Logo.png";
import SocialRowFooter from "./SocialRowFooter";
import tbc from "../../images/general/Tbc.png";
import Fade from "react-reveal/Fade";

function footerScrollToTop() {
  window.scrollTo(0, 0);
}

function Footer() {
  return (
    <div className="footer">
      <Container className="pt-3">
        <Row>
          <Col className="text-center">
            <Fade>
              <Image
                className="mt-5 footer-logo"
                onClick={footerScrollToTop}
                src={AirstairLogo}
                alt="logo"
                fluid
              ></Image>
            </Fade>
          </Col>
        </Row>
        {/* <Row className="mt-5 justify-content-md-center">
          <Col className="text-center pr-0" xs lg="3">
            <LinkContainer to="/specsandwarranty">
              <Nav.Link className="text-white">Specs & Warranty</Nav.Link>
            </LinkContainer>
          </Col>
          <Col className="text-center pr-0 pl-0" xs lg="3">
            <LinkContainer to="/pricingrequest">
              <Nav.Link className="text-white">Pricing Request</Nav.Link>
            </LinkContainer>
          </Col>
          <Col className="text-left pl-0" xs lg="3">
            <LinkContainer to="/privacyandterms">
              <Nav.Link className="text-white">Privacy & Terms</Nav.Link>
            </LinkContainer>
          </Col>
        </Row> */}
        <Row className="mt-5">
          <Col className="text-center">
            <Fade>
              <p>
                <a
                  href="https://www.google.com/maps/place/United+States+Postal+Service/@26.8422546,-80.0878045,15z/data=!4m2!3m1!1s0x0:0x1ba896d26a205471?sa=X&ved=2ahUKEwiBke25jePlAhUO2qwKHdHuCMIQ_BIwZ3oECFcQCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  PO Box 81349 Palm Beach Gardens, FL 33410
                </a>
                <br />
                <a href="tel:561-254-4101" className="text-white">
                  561-254-4101
                </a>
              </p>
            </Fade>
          </Col>
        </Row>
        <Fade bottom>
          <SocialRowFooter></SocialRowFooter>
        </Fade>
      </Container>
      <div className="footer2">
        <Container>
          <Row>
            <Col className="text-center mt-4 mb-4">
              <a
                href="http://www.wearebrandcollective.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Fade bottom>
                  <Image src={tbc} alt="logo" fluid></Image>
                </Fade>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Footer;
