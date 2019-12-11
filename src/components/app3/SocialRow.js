import React from "react";
import { Image } from "react-bootstrap";

import footerFbRed from "../../images/general/footer-fb-Red.png";
import footerTwRed from "../../images/general/footer-tw-Red.png";
import footerInRed from "../../images/general/footer-in-Red.png";

function SocialRow() {
  return (
    <div className="mt-5" id="SocialRow">
      <a
        href="https://www.facebook.com/AirStairSolutions"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="ml-3 mr-3 social-row-button-red-shadow"
          src={footerFbRed}
          alt="social"
        ></Image>
      </a>
      <a
        href="https://twitter.com/aimeeweaver_1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={footerTwRed}
          className="social-row-button-red-shadow"
          alt="social"
        ></Image>
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="ml-3 mr-3 social-row-button-red-shadow"
          src={footerInRed}
          alt="social"
        ></Image>
      </a>
    </div>
  );
}
export default SocialRow;
