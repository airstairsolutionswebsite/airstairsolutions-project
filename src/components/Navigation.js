import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import AirstairLogo from "../images/general/Airstair-Logo.png";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }
  render() {
    return (
      <div className="navbar-div">
        <Navbar
          expand="lg"
          fixed="top"
          id={this.state.isTop ? "bg-transparent" : "bg-red"}
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <Image src={AirstairLogo} alt="logo" fluid />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/">
                  <Nav.Link className="text-white mr-5">Home</Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to="how-it-works">
                  <Nav.Link className="text-white mr-5">
                    AeroChair&#8482;
                  </Nav.Link>
                </LinkContainer> */}
                {/* dd */}
                <NavDropdown
                  className="mr-5"
                  title="Products"
                  id="basic-nav-dropdown"
                >
                  <LinkContainer to="aero-chair">
                    <Nav.Link className="text-white toRi">
                      AeroChair&#8482;
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="cargo-loader">
                    <Nav.Link className="text-white toRi">
                      Cargo Loader
                    </Nav.Link>
                  </LinkContainer>
                </NavDropdown>
                {/* dd */}
                <LinkContainer to="how-it-works">
                  <Nav.Link className="text-white mr-5">How It Works</Nav.Link>
                </LinkContainer>
                <LinkContainer to="team-and-vision">
                  <Nav.Link className="text-white mr-5">Team & Vision</Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to="/specsandwarranty">
                  <Nav.Link className="text-white mr-5">
                    Specs & Warranty
                  </Nav.Link>
                </LinkContainer> */}
                <LinkContainer to="faq">
                  <Nav.Link className="text-white mr-5">FAQ</Nav.Link>
                </LinkContainer>
                <LinkContainer to="contact">
                  <Nav.Link className="text-white">Contact</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
