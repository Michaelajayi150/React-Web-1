import React from "react";
import { Link } from "react-router-dom";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import Button from "../Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn-outline" children="Subscribe" />
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>

          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
            <Link to="/">Destinations</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencers</Link>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">WA Services</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              SEMS <SiIcons.SiTypo3 />
            </Link>
          </div>
          <small className="website-rights">SEMS &copy; 2021</small>
          <div className="social-icons">
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="facebook"
            >
              <FaIcons.FaFacebookF />
            </Link>
            <Link
              to="/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="instagram"
            >
              <FaIcons.FaInstagram />
            </Link>
            <Link
              to="/"
              className="social-icon-link youtube"
              target="_blank"
              aria-label="youtube"
            >
              <FaIcons.FaYoutube />
            </Link>
            <Link
              to="/"
              className="social-icon-link twitter"
              target="_blank"
              aria-label="twitter"
            >
              <FaIcons.FaTwitter />
            </Link>
            <Link
              to="/"
              className="social-icon-link linkedin"
              target="_blank"
              aria-label="linkedin"
            >
              <FaIcons.FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
