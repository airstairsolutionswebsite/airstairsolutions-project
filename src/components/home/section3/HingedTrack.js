import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Container, Row, Col, Figure, Button } from "react-bootstrap";

import homesection3img2 from "../../../images/home/home-section3-img2.jpg";

class HindgedTrack extends Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol>
            <MDBView hover>
              <img src={homesection3img2} className="img-fluid" alt="section" />
              <MDBMask className="flex-center" overlay="red-strong">
                <p className="white-text">SEE MORE</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default HindgedTrack;
