import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Image,
  Table
} from "react-bootstrap";
import Fade from "react-reveal/Fade";

import FAQSymbol from "../../images/App4/FAQSymbol.png";
import FAQSymbolRev from "../../images/App4/FAQSymbolRev.png";

function Section1() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  return (
    <div className="mt-5 mb-5 pt-5 pb-5 FAQ-collapse">
      <Container>
        {/* item */}
        <Fade>
          <Row className="app4-faq-collapse">
            <Button
              onClick={() => setOpen1(!open1)}
              aria-controls="example-collapse-text"
              aria-expanded={open1}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">STC</Col>
                <Col className="text-right mr-5">
                  {!open1 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open1}>
              <div id="example-collapse-text" className="m-3">
                <p className="ml-5">No STC</p>
                <ul className="ml-5">
                  <li>Not attached to aircraft in any way</li>
                  <li>No weight placed on the door </li>
                </ul>
              </div>
            </Collapse>
          </Row>
        </Fade>
        <Fade>
          {/* item */}
          <Row className="app4-faq-collapse mt-4">
            <Button
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">
                  How is it legal to fly with a Battery
                </Col>
                <Col className="text-right mr-5">
                  {!open2 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open2}>
              <div id="example-collapse-text" className="m-3">
                <p className="pl-5">
                  14 CFR 173.159 A - Exceptions for Non-Spillable Batteries
                  <br />
                  <a
                    href="https://www.law.cornell.edu/cfr/text/49/173.159a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.law.cornell.edu/cfr/text/49/173.159a
                  </a>
                  <br />
                  <a
                    href="https://www.prba.org/wp-content/uploads/Overview-of-Battery-Transport-Regulations.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.prba.org/wp-content/uploads/Overview-of-Battery-Transport-Regulations.pdf
                  </a>
                </p>
              </div>
            </Collapse>
          </Row>
        </Fade>
        <Fade>
          {/* item */}
          <Row className="app4-faq-collapse mt-4">
            <Button
              onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
              aria-expanded={open3}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">Where is it stored</Col>
                <Col className="text-right mr-5">
                  {!open3 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open3}>
              <div id="example-collapse-text" className="m-3">
                <p className="pl-5">Crew’s Discretion</p>
              </div>
            </Collapse>
          </Row>
        </Fade>
        <Fade>
          {/* item */}
          <Row className="app4-faq-collapse mt-4">
            <Button
              onClick={() => setOpen4(!open4)}
              aria-controls="example-collapse-text"
              aria-expanded={open4}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">Aircraft Compatibility</Col>
                <Col className="text-right mr-5">
                  {!open4 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open4}>
              <div id="example-collapse-text" className="m-3">
                <p className="pl-5">
                  One AeroChair™ unit can accommodate multiple aircraft
                  platforms with the only variable being track length. One unit
                  can accommodate a Citation through BBJ size aircraft
                </p>
                <p className="pl-5">
                  Track length corresponds to aircraft door height.{" "}
                </p>
                <ul className="ml-5">
                  <li>
                    150” Long Track: <b>Heavy & Super Heavy</b>{" "}
                  </li>
                  <li>
                    132” Medium Track: <b>Mids & Super Mids</b>
                  </li>
                  <li>
                    100” Short Track: <b>King Air & Light Jets</b>
                  </li>
                  <li>
                    264” Track: <b>BBJ</b>
                  </li>
                </ul>
                <p className="pl-5">
                  <b>
                    Rather than purchase multiple units, a flight department may
                    purchase an additional track to cover different size
                    aircraft in a fleet.
                  </b>
                </p>
              </div>
            </Collapse>
          </Row>
        </Fade>
        <Fade>
          {/* item */}
          <Row className="app4-faq-collapse mt-4">
            <Button
              onClick={() => setOpen5(!open5)}
              aria-controls="example-collapse-text"
              aria-expanded={open5}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">Do you offer rentals?</Col>
                <Col className="text-right mr-5">
                  {!open5 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open5}>
              <div id="example-collapse-text" className="m-3">
                <p className="pl-5">
                  Currently on a limited basis, first-come-first-served. It is
                  our goal to grow rental capabilities as this is in high
                  demand.
                </p>
              </div>
            </Collapse>
          </Row>
        </Fade>
        <Fade>
          {/* item */}
          <Row className="app4-faq-collapse mt-4">
            <Button
              onClick={() => setOpen6(!open6)}
              aria-controls="example-collapse-text"
              aria-expanded={open6}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">
                  What are the Weights of the AeroChair™?
                </Col>
                <Col className="text-right mr-5">
                  {!open6 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open6}>
              <div id="example-collapse-text" className="m-3">
                <p className="pl-5">
                  <i>
                    (Note: All weights/dimensions approximate and subject to
                    verification)
                  </i>
                </p>
                <h6 class="mt-3 mb-3 pl-5">AeroChair™ Weights</h6>
                <Table responsive className="ml-5">
                  <thead>
                    <tr>
                      <th>Aircraft</th>
                      <th>Total Weight</th>
                      <th>Track Length"</th>
                      <th>Track lbs</th>
                      <th>Motor</th>
                      <th>Battery</th>
                      <th>Trolley</th>
                      <th>Chair</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Heavy/Super</td>
                      <td>155 lbs</td>
                      <td>150”</td>
                      <td>56 lbs</td>
                      <td>49 lbs</td>
                      <td>19 lbs</td>
                      <td>12 lbs</td>
                      <td>19 lbs</td>
                    </tr>
                    <tr>
                      <td>Super-Mid</td>
                      <td>144 lbs</td>
                      <td>132”</td>
                      <td>45 lbs</td>
                      <td>49 lbs</td>
                      <td>19 lbs</td>
                      <td>12 lbs</td>
                      <td>19 lbs</td>
                    </tr>
                    <tr>
                      <td>Lights/Mid</td>
                      <td>134 lb</td>
                      <td>100”</td>
                      <td>35 lbs</td>
                      <td>49 lbs</td>
                      <td>19 lbs</td>
                      <td>12 lbs</td>
                      <td>19 lbs</td>
                    </tr>
                    <tr>
                      <td>BBJ</td>
                      <td>188 lbs</td>
                      <td>264”</td>
                      <td>89 lbs</td>
                      <td>49 lbs</td>
                      <td>19 lbs</td>
                      <td>12 lbs</td>
                      <td>19 lbs</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Collapse>
          </Row>
        </Fade>
        <Fade>
          {/* item */}
          <Row className="app4-faq-collapse mt-4">
            <Button
              onClick={() => setOpen7(!open7)}
              aria-controls="example-collapse-text"
              aria-expanded={open7}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">
                  What are the Weights of the Cargo Loader?
                </Col>
                <Col className="text-right mr-5">
                  {!open7 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open7}>
              <div id="example-collapse-text" className="m-3">
                <p className="pl-5">
                  <i>
                    (Note: All weights/dimensions approximate and subject to
                    verification)
                  </i>
                </p>

                <h6 class="mt-3 mb-3 pl-5">Cargo Loader Weights</h6>
                <Table responsive className="ml-5">
                  <thead>
                    <tr>
                      <th>Track Length</th>
                      <th>Track Weight</th>
                      <th>Motor Weight</th>
                      <th>Battery Weight</th>
                      <th>Trolley Weight</th>
                      <th>Tray Weight</th>
                      <th>Total Unit Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>150”</td>
                      <td>56 lbs</td>
                      <td>49 lbs</td>
                      <td>19 lbs</td>
                      <td>16 lbs</td>
                      <td>48 lbs</td>
                      <td>188 lbs</td>
                    </tr>
                    <tr>
                      <td>132” </td>
                      <td>45 lbs</td>
                      <td>49 lbs</td>
                      <td>19 lbs</td>
                      <td>16 lbs</td>
                      <td>48 lbs</td>
                      <td>177lbs</td>
                    </tr>
                    <tr>
                      <td>100“</td>
                      <td>35 lbs</td>
                      <td>49 lbs</td>
                      <td>19 lbs</td>
                      <td>16 lbs</td>
                      <td>48 lbs</td>
                      <td>167lbs</td>
                    </tr>
                    <tr>
                      <td>264”</td>
                      <td>89 lbs</td>
                      <td>49 lbs</td>
                      <td>19 lbs</td>
                      <td>16 lbs</td>
                      <td>48 lbs</td>
                      <td>221 lbs</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Collapse>
          </Row>
        </Fade>
        <Fade>
          {/* item */}
          <Row className="app4-faq-collapse mt-4">
            <Button
              onClick={() => setOpen8(!open8)}
              aria-controls="example-collapse-text"
              aria-expanded={open8}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">
                  What are the Dimensions for AeroChair™ & Cargo Loader?
                </Col>
                <Col className="text-right mr-5">
                  {!open8 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open8}>
              <div id="example-collapse-text" className="m-3">
                <p className="pl-5">
                  <b style={{ textDecoration: "underline" }}>Battery</b>
                  <br />
                  <b>Weight:</b> 19lbs
                  <br />
                  <b>Dimensions: 7”H x 11”D x 12”W</b>
                </p>

                <p className="pl-5">
                  <b style={{ textDecoration: "underline" }}>
                    Motor Drive Unit:
                  </b>
                  <br />
                  <b>Weight:</b> 19lbs
                  <br />
                  <b>Dimensions:</b> 14”H x 10”D x 19”W
                </p>

                <h6 class="mt-5 mb-3 pl-5">Track Weight & Dimensions</h6>
                <Table responsive className="ml-5">
                  <thead>
                    <tr>
                      <th>Aircraft</th>
                      <th>Track</th>
                      <th>Fold</th>
                      <th>Height</th>
                      <th>Width</th>
                      <th>Length</th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Heavy</td>
                      <td>150”</td>
                      <td>Tri-Fold</td>
                      <td>12”</td>
                      <td>15”</td>
                      <td>51”</td>
                      <td>51 lbs</td>
                    </tr>
                    <tr>
                      <td>Mids</td>
                      <td>132”</td>
                      <td>Tri-Fold</td>
                      <td>12”</td>
                      <td>15”</td>
                      <td>45”</td>
                      <td>45 lbs</td>
                    </tr>
                    <tr>
                      <td>Lights</td>
                      <td>**100”</td>
                      <td>Bi-Fold</td>
                      <td>8”</td>
                      <td>15”</td>
                      <td>51”</td>
                      <td>35 lbs</td>
                    </tr>
                    <tr>
                      <td>BBJ</td>
                      <td>264”</td>
                      <td>4-Fold</td>
                      <td>16”</td>
                      <td>15”</td>
                      <td>68”</td>
                      <td>89 lbs</td>
                    </tr>
                  </tbody>
                </Table>

                <p className="pl-5 pt-4">
                  <b style={{ textDecoration: "underline" }}>
                    AeroChair™ Trolley Base
                  </b>
                  <br />
                  <b>Weight:</b> 12lbs
                  <br />
                  <b>Dimensions:</b> 13”H x 19”D x 15”W
                </p>

                <p className="pl-5">
                  <b style={{ textDecoration: "underline" }}>
                    AeroChair™ Chair{" "}
                  </b>
                  <br />
                  <b>Weight:</b> 19lbs
                  <br />
                  <b>Dimensions:</b> 12”H x 19”D x 23”W (Folded)
                </p>

                <p className="pl-5">
                  <b style={{ textDecoration: "underline" }}>
                    Cargo Loader Trolley Base
                  </b>
                  <br />
                  <b>Weight:</b> 16lbs
                  <br />
                  <b>Dimensions:</b> 17”H x 13”D x 7”W
                </p>

                <p className="pl-5">
                  <b style={{ textDecoration: "underline" }}>
                    Cargo Loader Tray
                  </b>
                  <br />
                  <b>Weight:</b> 48lbs
                  <br />
                  <b>Dimensions:</b> 5”H x 34”D x 22”W (Stowed)
                </p>
              </div>
            </Collapse>
          </Row>
        </Fade>
        <Fade>
          {/* item */}
          <Row className="app4-faq-collapse mt-4">
            <Button
              onClick={() => setOpen9(!open9)}
              aria-controls="example-collapse-text"
              aria-expanded={open9}
              className="w-100 test app4-faq-button text-dark pt-4 pb-4"
            >
              <Row>
                <Col className="text-left ml-5">
                  What does the Spares Package Include
                </Col>
                <Col className="text-right mr-5">
                  {!open9 ? (
                    <Image src={FAQSymbol} alt="symb" width="10px" />
                  ) : (
                    <Image src={FAQSymbolRev} alt="symb" width="10px" />
                  )}
                </Col>
              </Row>
            </Button>
            <Collapse in={open9}>
              <div id="example-collapse-text" className="m-3">
                <p className="pl-5">
                  <ul>
                    <li>Battery Power Box w/ charging cord</li>
                    <li>2 remote controls</li>
                    <li>Lanyards Pack (for track)</li>
                    <li>Pins (track, trolley pins)</li>
                    <li>Waterproof connectors</li>
                  </ul>
                </p>
              </div>
            </Collapse>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default Section1;
