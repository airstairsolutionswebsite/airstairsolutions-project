import React, { useState } from "react";
import { Carousel, Container, Image, Row } from "react-bootstrap";
import carouselimg1 from "../../images/carousel/carousel-img-1.jpeg";
import carouselimg2 from "../../images/carousel/carousel-img-2.jpeg";
import carouselimg3 from "../../images/carousel/carousel-img-3.jpeg";
import carouselcontact from "../../images/carousel/carousel-contact.png";
import Fade from "react-reveal/Fade";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className="carousel-main-div">
      <Container>
        <Fade>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            fade={true}
          >
            {/* Item 1 */}
            <Carousel.Item className="carousel-item-c">
              <img
                className="d-block ml-auto img-fluid"
                src={carouselimg1}
                alt="First Fade"
              />
              <Carousel.Caption className="carousel-caption-c">
                <h1>
                  Providing A Tool
                  <br /> For Dignified Accessibility
                </h1>
                <p className="carousel-p">
                  Our passenger lift provides safety and dignity to persons
                  unable to navigate aircraft stairs.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Item 2 */}
            <Carousel.Item className="carousel-item-c">
              <img
                className="d-block ml-auto img-fluid"
                src={carouselimg2}
                alt="Second Fade"
              />
              <Carousel.Caption className="carousel-caption-c">
                <h1>
                  Providing A Tool
                  <br /> For Dignified Accessibility
                </h1>
                <p className="carousel-p">
                  Our cargo lift restores safety to the loading process by
                  decreasing injury.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Item 3 */}
            <Carousel.Item className="carousel-item-c">
              <img
                className="d-block ml-auto img-fluid"
                src={carouselimg3}
                alt="Three Fade"
              />
              <Carousel.Caption className="carousel-caption-c">
                <h1>
                  Providing A Tool
                  <br /> For Dignified Accessibility
                </h1>
                <p className="carousel-p">
                  Our passenger lift provides safety and dignity to persons
                  unable to navigate aircraft stairs.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Fade>
        <Row>
          <Fade left>
            <div className="carouselcontact">
              <a href="mailto:aimee@airstairsolutions.com">
                <Image
                  className="mt-5"
                  src={carouselcontact}
                  alt="contact"
                ></Image>
              </a>
            </div>
          </Fade>
        </Row>
      </Container>
    </div>
  );
}

export default ControlledCarousel;
