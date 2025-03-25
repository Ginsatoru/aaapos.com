import React from "react";
import "./Nav.css";
import logo from "./Bo Project.png";
import { Link } from "react-router-dom";
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
            <Link to={"/"}>
            <li>
              Home
            </li>
            </Link>
            <Link to={"/Contact"}>
            <li>
              Contact
            </li>
            </Link>
            <Link to={"/Aboutus"}>
            <li>
              About Us
            </li>
            </Link>
            <Link to={"/Project"}>
            <li>
              Project
            </li>
            </Link>
            <li>
            <div class="dropdown">
            <Link to={"/Pages"}>
              <a href="" class="dropbtn">
                Pages ▿
              </a>
              </Link>
              <div class="dropdown-content">
              <Link to={"/Support"}><a className="text-menu" href="">Support</a></Link>
              <Link to={"/Services"}><a className="text-menu" href="">Sevices</a></Link>
              <Link to={"/Whoweare"}><a className="text-menu" href="">Who we are?</a></Link>
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
