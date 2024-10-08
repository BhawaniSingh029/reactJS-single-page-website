import React from "react";
import imgSrc from "../assets/images/Sample Logo light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">
          <img src={imgSrc} alt="" />
        </div>
        <div className="footer-links">
          <div className="footer-navs">
            <div className="app-links">
              <div className="app-link-head">Mobile app</div>
              <ul>
                <li>Features</li>
                <li>Live share</li>
                <li>Video record</li>
              </ul>
            </div>
            <div className="comm-links">
              <div className="comm-link-head">Community</div>
              <ul>
                <li>Featured artists</li>
                <li>The Portal</li>
                <li>Live Events</li>
              </ul>
            </div>
            <div className="company-links">
              <div className="company-link-head">Company</div>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>History</li>
              </ul>
            </div>
          </div>
          <div className="login-btns">
            <button className="btn-register">Register</button>
            <button className="btn-login">Login</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">© Photo, Inc. 2019. We love our users!</div>
        <div className="social-widgets">
          <div className="follow-us">Follow us:</div>
          <span>
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span>
            <FontAwesomeIcon icon={faXTwitter} />
          </span>
          <span>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
