import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import img2 from "../../images/carousel/carousel-img-2.jpeg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className="products-carousel x2">
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second Fade" />

          {/* <Carousel.Caption>
          <h3>Second Fade label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
