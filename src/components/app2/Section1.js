import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import YouTubeVideo from "./YouTubeVideo";

function Section2() {
  return (
    <div>
      <Container>
        {/* First row */}
        <Row>
          <Col className="mt-5 mb-5">
            <Fade bottom>
              <h1 className="text-center mt-5">HOW DOES IT WORK</h1>
            </Fade>
            <div className="text-center mt-5">
              <YouTubeVideo></YouTubeVideo>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section2;
