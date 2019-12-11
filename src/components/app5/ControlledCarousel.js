import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import img1 from "../../images/carousel/carousel-img-1.jpeg";
import img3 from "../../images/carousel/carousel-img-3.jpeg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className="products-carousel">
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First Fade" />
          {/* <Carousel.Caption>
          <h3>First Fade label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third Fade" />

          {/* <Carousel.Caption>
          <h3>Third Fade label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
