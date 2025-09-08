import React from "react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const Navlink = ["Home", "service", "about", "contact"];
  const [currentLink, setCurrentLink] = useState("home");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="header-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="about-header">
            <h3 className="footer-subtitle">KAMIINORI</h3>
            <h2 className="footer-title">Real Stories of Change.</h2>
          </div>

          <div className="contact-info">
            <div className="location-info">
              <span className="location-icon">📍</span>
              <span className="location-text">
                123 Street Name City Name, State, Country, 12345
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <ul className="nav-links">
              {Navlink.map((link, index) => (
                <li key={index} onClick={() => setCurrentLink(link)}>
                  <a
                    href={`#${link}`}
                    className={`nav-link ${
                      currentLink === link ? "active" : ""
                    }`}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>

            <div className="subscription-section">
              <p className="subscription-text">Can You Put Your Email Here?</p>
              <form onSubmit={handleSubscribe} className="subscription-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="email-input"
                />
                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="footer-bar">
        <div className="container">
          <div className="footer-links">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Site History
            </a>
            <a href="#" className="footer-link">
              What We Do
            </a>
          </div>
          <div className="copyright">
            © 2024 Copyright Text. All rights reserved for demo purposes only.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
