import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import Button from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            SEMS <SiIcons.SiTypo3 />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className="nav-links-mobile btn-outline"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="btn-primary nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
            {button && <Button buttonStyle="btn-outline" children="SIGN UP" />}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
