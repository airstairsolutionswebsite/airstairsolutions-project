import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import pattern from "../../images/general/pattern.png";
import app2section1img1 from "../../images/app2/battery.jpeg";
import app2section1img2 from "../../images/app2/motor-drive-unit.png";
import app2section1img3 from "../../images/app2/app2-section1-img3.jpeg";
import app2section1img4 from "../../images/app2/app2-section1-img4.jpeg";
import track1 from "../../images/app2/track1.jpeg";
import track2 from "../../images/app2/track2.jpg";
import Fade from "react-reveal/Fade";

function Section2() {
  return (
    <div className="moved-section">
      <Container className="hideAtMobile">
        {/* First row */}
        <Row className="mt-5 row">
          <Col>
            <h1 className="app2-section1-id1">BATTERY POWER</h1>
            <div className="mt-5">
              <p>
                <b>Weight:</b> 19 lbs.
                <br />
                <b>Dimensions:</b> 7"H x 11"D x 12"W
                <ul>
                  <li>2 - 12Volt, Sealed, Lead Acid Batteries</li>
                  <li>FAA Approved, Non-Lithium, Non-Spill battery</li>
                  <li>Integrated controls housed in durable, pelican case</li>
                  <li>Remote Control Operated (2 remotes provided)</li>
                  <li>Manual Switch to operate without a remote control</li>
                </ul>
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                className="app2-section2-absolute1"
                src={pattern}
                alt="decoration"
                fluid
              ></Image>
              <Fade right>
                <Image
                  className="float-right"
                  src={app2section1img1}
                  fluid
                  alt="decoration"
                ></Image>
              </Fade>
            </div>
          </Col>
        </Row>

        {/* Second row */}
        <Row className="mt-5">
          <Col>
            <div>
              <div className="app2-section2-absolute2">
                <Card
                  className="row-specific-246"
                  // style={{
                  //   width: "28rem",
                  //   height: "37rem",
                  //   borderRadius: "0px",
                  //   backgroundColor: "#c02026"
                  // }}
                >
                  <Card.Body></Card.Body>
                </Card>
              </div>
              <Fade left>
                <Image
                  className="float-right"
                  src={app2section1img2}
                  alt="decoration"
                  fluid
                ></Image>
              </Fade>
            </div>
          </Col>
          <Col>
            <h1 className="app2-section-header-h1 ml-5">MOTOR DRIVE UNIT</h1>
            <div className="mt-5">
              <p>
                <b>Weight:</b> 49 lbs.
                <br />
                <b>Dimensions:</b> 14"H x 10"D x 19"W
                <ul>
                  <li>Direct Drive Motor</li>
                  <li>Proximity Switch to control up movement</li>
                  <li>
                    Rope Cable certified for 5,400lb tow (Certificate Provided)
                  </li>
                  <li>Wireless, hand-held remote</li>
                  <li>Manual Switch</li>
                  <li>Quick Cam-lock attachment (to house track)</li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>

        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
        {/* Third row */}
        <Row className="mt-5">
          <Col>
            <h1 className="app2-section1-id1">TRACK</h1>
            <div className="mt-5">
              <p className="text-center">
                <b>
                  One AeroChair™ unit, with 3 different track lengths (short,
                  medium, long) can cover nearly any aircraft ranging in size
                  from King Air to Global Express.
                </b>
              </p>
              <p>
                <h6>Track length corresponds to aircraft door height.</h6>
                <ul className="pt-5">
                  <li>
                    <b>150" Long Track</b> - Heacy & Super Heavy
                  </li>
                  <li>
                    <b>132" Medium Track</b> - Mids & Super Mids
                  </li>
                  <li>
                    <b>100" Short Track</b> - King Air & Light Jets
                  </li>
                  <li>
                    <b>264" Track</b> - BBJ (special order & pricing)
                  </li>
                </ul>
              </p>
              <p className="text-center pt-5">
                <b>
                  Rather than purchase multiple units, a flight department may
                  purchase an additional track to cover different size aircrafts
                  in a fleet.
                </b>
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                className="app2-section2-absolute1"
                src={pattern}
                alt="decoration"
                fluid
              ></Image>
              <Fade right>
                <Image
                  className="float-right"
                  src={track1}
                  alt="track"
                  fluid
                ></Image>
              </Fade>
            </div>
          </Col>
        </Row>

        {/* Fourth row */}
        <Row className="mt-5">
          <Col>
            <div>
              <div className="app2-section2-absolute2">
                <Card
                  className="row-specific-246"
                  // style={{
                  //   width: "28rem",
                  //   height: "37rem",
                  //   borderRadius: "0px",
                  //   backgroundColor: "#c02026"
                  // }}
                >
                  <Card.Body></Card.Body>
                </Card>
              </div>
              <Fade left>
                <Image
                  className="float-right"
                  src={track2}
                  alt="track"
                  fluid
                ></Image>
              </Fade>
            </div>
          </Col>
          <Col>
            <h1 className="app2-section1-id1">TRACK</h1>
            <div className="mt-5">
              <p className="text-center">
                <b>
                  One AeroChair™ unit, with 3 different track lengths (short,
                  medium, long) can cover nearly any aircraft ranging in size
                  from King Air to Global Express.
                </b>
              </p>
              <p>
                <h6>Track length corresponds to aircraft door height.</h6>
                <ul className="pt-5">
                  <li>
                    <b>150" Long Track</b> - Heacy & Super Heavy
                  </li>
                  <li>
                    <b>132" Medium Track</b> - Mids & Super Mids
                  </li>
                  <li>
                    <b>100" Short Track</b> - King Air & Light Jets
                  </li>
                  <li>
                    <b>264" Track</b> - BBJ (special order & pricing)
                  </li>
                </ul>
              </p>
              <p className="text-center pt-5">
                <b>
                  Rather than purchase multiple units, a flight department may
                  purchase an additional track to cover different size aircrafts
                  in a fleet.
                </b>
              </p>
            </div>
          </Col>
        </Row>
        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

        {/* Fifth row */}
        <Row className="mt-5">
          <Col>
            <h1 className="app2-section1-id1">TROLLEY BASE</h1>
            <div className="mt-5">
              <p>
                Specific to Passenger Lift
                <br />
                <b>Weight:</b> 12 lbs.
                <br />
                <b>Dimensions:</b> 13"H x 19"D x 15"W
                <ul>
                  <li>Wheels contained within the channels track </li>
                  <li>Positions the chair to maintain a level ride </li>
                  <li>
                    Allows chair to unlock and swivel for easy entry & exit
                  </li>
                </ul>
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <Fade right>
                <Image
                  className="float-right"
                  src={app2section1img3}
                  alt="products"
                  fluid
                ></Image>
              </Fade>
            </div>
          </Col>
        </Row>
        {/* Sixth row */}
        <Row className="mt-5">
          <Col>
            <div>
              <div className="app2-section2-absolute2">
                <Card
                  className="row-specific-246"
                  // style={{
                  //   width: "28rem",
                  //   height: "37rem",
                  //   borderRadius: "0px",
                  //   backgroundColor: "#c02026"
                  // }}
                >
                  <Card.Body></Card.Body>
                </Card>
              </div>
              <Fade left>
                <Image
                  className="float-right"
                  src={app2section1img4}
                  alt="products"
                  fluid
                ></Image>
              </Fade>
            </div>
          </Col>
          <Col>
            <h1 className="app2-section-header-h1 ml-5">CHAIR</h1>
            <div className="mt-5">
              <p>
                Specific to Passenger Lift
                <br />
                <b>Weight:</b> 19 lbs.
                <br />
                <b>Dimensions:</b> 12"H x 19"D x 23"W (Stowed)
                <ul>
                  <li>Adjustable & Quickly Removable armrests</li>
                  <li>Seat back hinges & folds for ease of storage</li>
                  <li>Chair locks into place at 90, 135, 180 degrees</li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile
    // mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile mobile */}
      <Container className="eachM">
        {/* First row */}

        <Col>
          <h1 className="text-center mb-4">BATTERY POWER</h1>
          <div>
            <p>
              <b>Weight:</b> 19 lbs.
              <br />
              <b>Dimensions:</b> 7"H x 11"D x 12"W
              <ul className="mt-4 mb-4">
                <li>2 - 12Volt, Sealed, Lead Acid Batteries</li>
                <li>FAA Approved, Non-Lithium, Non-Spill battery</li>
                <li>Integrated controls housed in durable, pelican case</li>
                <li>Remote Control Operated (2 remotes provided)</li>
                <li>Manual Switch to operate without a remote control</li>
              </ul>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            {/* <Image src={pattern} alt="decoration" fluid></Image> */}
            <Fade right>
              <Image
                src={app2section1img1}
                fluid
                alt="decoration"
                className="mb-5"
              ></Image>
            </Fade>
          </div>
        </Col>

        {/* Second row */}

        <Col>
          <h1 className="text-center mb-4">MOTOR DRIVE UNIT</h1>
          <div>
            <p>
              <b>Weight:</b> 49 lbs.
              <br />
              <b>Dimensions:</b> 14"H x 10"D x 19"W
              <ul className="mt-4 mb-4">
                <li>Direct Drive Motor</li>
                <li>Proximity Switch to control up movement</li>
                <li>
                  Rope Cable certified for 5,400lb tow (Certificate Provided)
                </li>
                <li>Wireless, hand-held remote</li>
                <li>Manual Switch</li>
                <li>Quick Cam-lock attachment (to house track)</li>
              </ul>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            {/* <div>
              <Card>
                <Card.Body></Card.Body>
              </Card>
            </div> */}
            <Fade left>
              <Image
                src={app2section1img2}
                alt="decoration"
                fluid
                className="mb-5"
              ></Image>
            </Fade>
          </div>
        </Col>

        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
        {/* Third row */}

        <Col>
          <h1 className="text-center mb-4">TRACK</h1>
          <div>
            <p>
              <b>
                One AeroChair™ unit, with 3 different track lengths (short,
                medium, long) can cover nearly any aircraft ranging in size from
                King Air to Global Express.
              </b>
            </p>
            <p>
              <h6>Track length corresponds to aircraft door height.</h6>
              <ul className="mt-4 mb-4">
                <li>
                  <b>150" Long Track</b> - Heacy & Super Heavy
                </li>
                <li>
                  <b>132" Medium Track</b> - Mids & Super Mids
                </li>
                <li>
                  <b>100" Short Track</b> - King Air & Light Jets
                </li>
                <li>
                  <b>264" Track</b> - BBJ (special order & pricing)
                </li>
              </ul>
            </p>
            <p>
              <b>
                Rather than purchase multiple units, a flight department may
                purchase an additional track to cover different size aircrafts
                in a fleet.
              </b>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            {/* <Image src={pattern} alt="decoration" fluid></Image> */}
            <Fade right>
              <Image src={track1} alt="track" fluid className="mb-5"></Image>
            </Fade>
          </div>
        </Col>

        {/* Fourth row */}

        <Col>
          <h1 className="text-center mb-4">TRACK</h1>
          <div>
            <p>
              <b>
                One AeroChair™ unit, with 3 different track lengths (short,
                medium, long) can cover nearly any aircraft ranging in size from
                King Air to Global Express.
              </b>
            </p>
            <p>
              <h6>Track length corresponds to aircraft door height.</h6>
              <ul className="mt-4 mb-4">
                <li>
                  <b>150" Long Track</b> - Heacy & Super Heavy
                </li>
                <li>
                  <b>132" Medium Track</b> - Mids & Super Mids
                </li>
                <li>
                  <b>100" Short Track</b> - King Air & Light Jets
                </li>
                <li>
                  <b>264" Track</b> - BBJ (special order & pricing)
                </li>
              </ul>
            </p>
            <p>
              <b>
                Rather than purchase multiple units, a flight department may
                purchase an additional track to cover different size aircrafts
                in a fleet.
              </b>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            {/* <div>
              <Card>
                <Card.Body></Card.Body>
              </Card>
            </div> */}
            <Fade left>
              <Image src={track2} alt="track" fluid className="mb-5"></Image>
            </Fade>
          </div>
        </Col>

        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

        {/* Fifth row */}

        <Col>
          <h1 className="text-center mb-4">TROLLEY BASE</h1>
          <div>
            <p>
              Specific to Passenger Lift
              <br />
              <b>Weight:</b> 12 lbs.
              <br />
              <b>Dimensions:</b> 13"H x 19"D x 15"W
              <ul className="mt-4 mb-4">
                <li>Wheels contained within the channels track </li>
                <li>Positions the chair to maintain a level ride </li>
                <li>Allows chair to unlock and swivel for easy entry & exit</li>
              </ul>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <Fade right>
              <Image
                src={app2section1img3}
                alt="products"
                fluid
                className="mb-5"
              ></Image>
            </Fade>
          </div>
        </Col>

        {/* Sixth row */}

        <Col>
          <h1 className="text-center mb-4">CHAIR</h1>
          <div>
            <p>
              Specific to Passenger Lift
              <br />
              <b>Weight:</b> 19 lbs.
              <br />
              <b>Dimensions:</b> 12"H x 19"D x 23"W (Stowed)
              <ul className="mt-4 mb-4">
                <li>Adjustable & Quickly Removable armrests</li>
                <li>Seat back hinges & folds for ease of storage</li>
                <li>Chair locks into place at 90, 135, 180 degrees</li>
              </ul>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            {/* <div>
              <Card>
                <Card.Body></Card.Body>
              </Card>
            </div> */}
            <Fade left>
              <Image
                src={app2section1img4}
                alt="products"
                fluid
                className="mb-5"
              ></Image>
            </Fade>
          </div>
        </Col>
      </Container>
    </div>
  );
}
export default Section2;
