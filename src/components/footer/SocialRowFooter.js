import React from "react";
import { Image } from "react-bootstrap";
import footerFb from "../../images/general/footer-fb.png";
import footerTw from "../../images/general/footer-tw.png";
import footerIn from "../../images/general/footer-in.png";

function SocialRowFooter() {
  return (
    <div className="text-center mt-5 mb-5">
      <a
        href="https://www.facebook.com/AirStairSolutions"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="ml-3 mr-3 social-row-button-white-shadow"
          src={footerFb}
          alt="social"
        ></Image>
      </a>
      <a
        href="https://twitter.com/aimeeweaver_1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={footerTw}
          alt="social"
          className="social-row-button-white-shadow"
        ></Image>
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="ml-3 mr-3 social-row-button-white-shadow"
          src={footerIn}
          alt="social"
        ></Image>
      </a>
    </div>
  );
}
export default SocialRowFooter;
