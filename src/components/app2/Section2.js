import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tilt from "react-tilt";
import app2section2img1 from "../../images/app2/app2-section2-img1.jpg";
import app2section2img2 from "../../images/app2/app2-section2-img2.jpg";
import app2section2img3 from "../../images/app2/app2-section2-img3.jpg";
import app2section2img4 from "../../images/app2/app2-section2-img4.jpg";
import boeing from "../../images/app2/boeing-737.jpg";
import pilatus from "../../images/app2/pilatus-pc12.jpg";
import cessna from "../../images/app2/cessna-citation.jpg";
import Fade from "react-reveal/Fade";

function Section3() {
  return (
    <div className="app2-section3-main-div">
      <Container>
        <Row>
          <Col className="mt-5">
            <h3 className="text-center mt-5 mb-5 text-white">
              COMPATIBLE AIRCRAFT
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Fade left>
              <Tilt
                className="Tilt"
                options={{
                  max: 25,
                  reverse: true
                }}
              >
                <Image src={app2section2img1} alt="product" fluid></Image>
              </Tilt>
            </Fade>
            <h6 className="text-center text-white mt-5">BOMBARDIER</h6>
            <p className="text-center text-white mt-2">
              Global series & Challenger 600 series
            </p>
          </Col>
          <Col>
            <Fade right>
              <Tilt
                className="Tilt"
                options={{
                  max: 25,
                  reverse: true
                }}
              >
                <Image src={app2section2img2} alt="product" fluid></Image>
              </Tilt>
            </Fade>
            <h6 className="text-center text-white mt-5">DASSAULT FALCON</h6>
            <p className="text-center text-white mt-2">
              Falcon 50, 900, 2000 series & Falcon 7X
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Fade left>
              <Tilt
                className="Tilt"
                options={{
                  max: 25,
                  reverse: true
                }}
              >
                <Image src={app2section2img3} alt="product" fluid></Image>
              </Tilt>
            </Fade>
            <h6 className="text-center text-white mt-5">GULFSTREAM</h6>
            <p className="text-center text-white mt-2">
              GII-IV, G450, G-V, G550 & G650
            </p>
          </Col>
          <Col>
            <Fade right>
              <Tilt
                className="Tilt"
                options={{
                  max: 25,
                  reverse: true
                }}
              >
                <Image src={app2section2img4} alt="product" fluid></Image>
              </Tilt>
            </Fade>
            <h6 className="text-center text-white mt-5">EMBRAER</h6>
            <p className="text-center text-white mt-2">Legacy</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Fade left>
              <Tilt
                className="Tilt"
                options={{
                  max: 25,
                  reverse: true
                }}
              >
                <Image src={cessna} alt="cassna" fluid></Image>
              </Tilt>
            </Fade>
            <h6 className="text-center text-white mt-5">Cessna</h6>
            <p className="text-center text-white mt-2">
              Citation XLS, Citation X, Sovereign
            </p>
          </Col>
          <Col>
            <Fade right>
              <Tilt
                className="Tilt"
                options={{
                  max: 25,
                  reverse: true
                }}
              >
                <Image src={pilatus} alt="pilatus" fluid></Image>
              </Tilt>
            </Fade>
            <h6 className="text-center text-white mt-5">Pilatus</h6>
            <p className="text-center text-white mt-2">PC-12</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <Fade bottom>
              <Tilt
                className="Tilt"
                options={{
                  max: 25,
                  reverse: true
                }}
              >
                <Image src={boeing} alt="product" fluid></Image>
              </Tilt>
            </Fade>
            <h6 className="text-center text-white mt-5">Boeing</h6>
            <p className="text-center text-white mt-2">
              G650, G500-600, G450 - 550, G280, G2-4
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5">
            <p className="text-light text-center mt-5 mb-5">
              If you do not see your aircraft not listed, we may be able to
              custom fit your aircraft. Please contact us find out more.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section3;
