import React from "react";
import "../css/style.css";
import logo from "../assets/images/Sample Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="features">Features</a>
          </li>
          <li>
            <a href="pricing">Pricing</a>
          </li>
          <li>
            <a href="community">Community</a>
          </li>
          <li>
            <a href="support">Support</a>
          </li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button type="button" className="btn-login">
          Login
        </button>
        <button type="button" className="btn-register">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
