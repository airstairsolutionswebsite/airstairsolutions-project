import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Fade from "react-reveal/Fade";

export default class extends Component {
  render() {
    return (
      <div className="specs-warranty-div">
        <Container>
          <Row>
            <Col>
              {/* item */}
              <Fade>
                <div>
                  <h5 className="mt-5">STC</h5>
                  <ul>
                    <li>No STC</li>
                    <li>Not attached to aircraft in any way</li>
                    <li>No weight placed on the door</li>
                  </ul>
                </div>
              </Fade>
              {/* item */}
              <Fade>
                <div>
                  <h5 className="mt-5">
                    How is it legal to fly with a Battery
                  </h5>
                  <ul>
                    <li>
                      14 CFR 173.159 A - Exceptions for Non-Spillable Batteries
                      <br />
                      <a
                        href="https://www.law.cornell.edu/cfr/text/49/173.159a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.law.cornell.edu/cfr/text/49/173.159a
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.prba.org/wp-content/uploads/Overview-of-Battery-Transport-Regulations.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.prba.org/wp-content/uploads/Overview-of-Battery-Transport-Regulations.pdf
                      </a>
                    </li>
                  </ul>
                </div>
              </Fade>
              {/* item */}
              <Fade>
                <div>
                  <h5 className="mt-5">Where is it stored</h5>
                  <ul>
                    <li>Crew’s Discretion</li>
                  </ul>
                </div>
              </Fade>
              {/* item */}
              <Fade>
                <div>
                  <h5 className="mt-5">Where is it stored</h5>
                  <ul>
                    <li>Crew’s Discretion</li>
                  </ul>
                </div>
              </Fade>
              {/* item */}
              <Fade>
                <div>
                  <h5 className="mt-5">Aircraft Compatibility </h5>
                  <p className="ml-5">
                    One AeroChair unit can accommodate multiple aircraft
                    platforms with the only variable being track length. One
                    unit can accommodate a Citation through BBJ size aircraft
                  </p>
                  <p>Track length corresponds to aircraft door height. </p>
                  <ul className="nkl8">
                    <li>
                      150” Long Track:
                      <b>Heavy & Super Heavy</b>
                    </li>
                    <li>
                      132” Medium Track:
                      <b>Mids & Super Mids</b>
                    </li>
                    <li>
                      100” Short Track:
                      <b>King Air & Light Jets</b>
                    </li>
                    <li>
                      264” Track: <b>BBJ</b>
                    </li>
                  </ul>
                  <p>
                    <b>
                      Rather than purchase multiple units, a flight department
                      may purchase an additional track to cover different size
                      aircraft in a fleet.
                    </b>
                  </p>
                </div>
              </Fade>
              {/* item */}
              <Fade>
                <div>
                  <h5 className="mt-5">Do you offer rentals?</h5>
                  <p className="ml-5">
                    Currently on a limited basis, first-come-first-served. It is
                    our goal to grow rental capabilities as this is in high
                    demand.
                  </p>
                </div>
              </Fade>
              {/* item */}
              <Fade>
                <div>
                  <h5 className="mt-5">
                    What are the Weights of the AeroChair & Cargo Loader?
                  </h5>
                  <p>
                    <i>
                      (Note: All weights/dimensions approximate and subject to
                      verification)
                    </i>
                  </p>
                  <Table className="mt-5" responsive>
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
              </Fade>
              {/* part 2 */}
              <Fade>
                <h5 class="mt-3 mb-3">Cargo Loader Weights</h5>
                <Table className="mt-5" responsive>
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
              </Fade>
              {/* item */}
              <Fade>
                <div>
                  <h5 className="mt-5">
                    What are the Dimensions for AeroChair & Cargo Loader?
                  </h5>
                </div>
                <div>
                  <p className="pt-5">
                    <b style={{ textDecoration: "underline" }}>Battery</b>
                    <br />
                    <b>Weight:</b> 19lbs
                    <br />
                    <b>Dimensions: 7”H x 11”D x 12”W</b>
                  </p>

                  <p>
                    <b style={{ textDecoration: "underline" }}>
                      Motor Drive Unit:
                    </b>
                    <br />
                    <b>Weight:</b> 19lbs
                    <br />
                    <b>Dimensions:</b> 14”H x 10”D x 19”W
                  </p>

                  <h6 class="mt-5 mb-3">Track Weight & Dimensions</h6>
                  <Table responsive>
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

                  <p className="pt-4">
                    <b style={{ textDecoration: "underline" }}>
                      AeroChair™ Trolley Base
                    </b>
                    <br />
                    <b>Weight:</b> 12lbs
                    <br />
                    <b>Dimensions:</b> 13”H x 19”D x 15”W
                  </p>

                  <p>
                    <b style={{ textDecoration: "underline" }}>
                      AeroChair™ Chair{" "}
                    </b>
                    <br />
                    <b>Weight:</b> 19lbs
                    <br />
                    <b>Dimensions:</b> 12”H x 19”D x 23”W (Folded)
                  </p>

                  <p>
                    <b style={{ textDecoration: "underline" }}>
                      Cargo Loader Trolley Base
                    </b>
                    <br />
                    <b>Weight:</b> 16lbs
                    <br />
                    <b>Dimensions:</b> 17”H x 13”D x 7”W
                  </p>

                  <p>
                    <b style={{ textDecoration: "underline" }}>
                      Cargo Loader Tray
                    </b>
                    <br />
                    <b>Weight:</b> 48lbs
                    <br />
                    <b>Dimensions:</b> 5”H x 34”D x 22”W (Stowed)
                  </p>
                </div>
              </Fade>
              {/* item */}
              <ul>
                <div>
                  <h5 className="mt-5">What does the Spares Package Include</h5>
                  <ul>
                    <li>Battery Power Box w/ charging cord</li>
                    <li>2 remote controls</li>
                    <li>Lanyards Pack (for track)</li>
                    <li>Pins (track, trolley pins)</li>
                    <li>Waterproof connectors</li>
                  </ul>
                </div>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
