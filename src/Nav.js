import React from "react";
import "./Nav.css";
import logo from "./Bo Project.png";

function Nav() {
  return (
    <div className="nav">
      <div className="space">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Support Cambodia</h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
            <div class="dropdown">
              <a href="#" class="dropbtn">
                Pages ▿
              </a>
              <div class="dropdown-content">
                <a className="text-menu" href="#">Support</a>
                <a className="text-menu" href="#">Learn more</a>
                <a className="text-menu" href="#">Who we are?</a>
              </div>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
