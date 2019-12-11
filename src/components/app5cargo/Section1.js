import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import ControlledCarousel from "./ControlledCarousel";

function Section1() {
  return (
    <div className="app5-section1">
      <Container>
        <Row>
          <Col>
            <ControlledCarousel></ControlledCarousel>
          </Col>
          <Col className="ml-5 mt-5">
            <h1>
              Cargo Loader
              <span
                class="glyphicon glyphicon-search"
                aria-hidden="true"
              ></span>
            </h1>
            <ul className="mt-5">
              <li>3 – 4 minutes to assemble & disassemble</li>
              <li>No STC</li>
              <li>Loose Equipment</li>
              <li>No weight placed on door</li>
              <li>Portable, Stow on-board to use on road</li>
              <li>Adaptable to nearly any aircraft make/model </li>
              <li>
                350 lb weight limit – our posted limit to follow FAA guidelines.
                Tested and capable of 500lbs
              </li>
              <li>Patented</li>
            </ul>
            <div>
              <Link to="/contact">
                <Button
                  className="mt-5 pt-3 pb-3 text-dark"
                  variant="outline-dark"
                  size="lg"
                  block
                >
                  PRICING REQUEST
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Link to="/how-it-works" className="text-right text-dark">
          <p className="phiw">HOW IT WORKS?</p>
        </Link>
      </Container>
    </div>
  );
}

export default Section1;
