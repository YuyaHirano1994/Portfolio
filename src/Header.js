import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <div class="col-lg-8 col-md-12 header">
      <div>
        <h5>Y.H</h5>
      </div>
      <div>
        <ul className="menu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
