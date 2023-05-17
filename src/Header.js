import React from "react";
import "./styles/Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="col-lg-8 col-md-12 header">
      <div>
        <h5>Y.H</h5>
      </div>
      <div className="menu-area">
        <ul className="menu gnavi">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={500}>
              Project
            </Link>
          </li>
          <li>
            <Link to="career" smooth={true} duration={500}>
              Career
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
