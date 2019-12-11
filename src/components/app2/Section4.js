import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import app2section4background from "../../images/app2/safety.jpeg";
import Fade from "react-reveal/Fade";

function Section4() {
  return (
    <div>
      <div className="hideAtMobile">
        <Row className="app2-section4-main-row">
          {/* className="app2-section4-image-div" */}
          <Col className="pr-0 hideAtMobile">
            <Image
              id="app2-section4-image"
              src={app2section4background}
              alt="bg"
              fluid
            ></Image>
          </Col>
          <Col className="app2-section4-red-div">
            <div className="m-5 p-5 pad">
              <Fade bottom>
                <h1 className="text-white">SAFETY</h1>
                {/* <p className="text-white">
              The safety of the passenger, crew and assisting ground support
              personnel are critically important. The AeroChair™ alleviates the
              responsibility of crew members and FBO personnel from physically
              lifting and carrying the passenger. Factors such as rain, snow,
              ice, make for treacherous conditions, putting everyone safety in
              jeopardy.
            </p>
            <h6 className="text-white">
              SAFETY FEATURES OF THE AEROCHAIR™ INCLUDE:
            </h6> */}
                <ul className="text-white">
                  <li>
                    Steel safety break automatically engages instantly if
                    tension on the rope cable is not maintained
                  </li>
                  <li>
                    Trolley base rollers are contained within the channels of
                    the track
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
            </div>
          </Col>
        </Row>
      </div>
      <div className="safety">
        <Col className="app2-section4-red-div">
          <div className="m-5 p-5 pad">
            <Fade bottom>
              <h1 className="text-white">SAFETY</h1>
              {/* <p className="text-white">
              The safety of the passenger, crew and assisting ground support
              personnel are critically important. The AeroChair™ alleviates the
              responsibility of crew members and FBO personnel from physically
              lifting and carrying the passenger. Factors such as rain, snow,
              ice, make for treacherous conditions, putting everyone safety in
              jeopardy.
            </p>
            <h6 className="text-white">
              SAFETY FEATURES OF THE AEROCHAIR™ INCLUDE:
            </h6> */}
              <ul className="text-white">
                <li>
                  Steel safety break automatically engages instantly if tension
                  on the rope cable is not maintained
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
          </div>
        </Col>
      </div>
    </div>
  );
}
export default Section4;
