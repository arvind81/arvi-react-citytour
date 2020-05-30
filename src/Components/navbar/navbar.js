import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar ">
      <img src={logo} alt="Logo" />

      <ul className="navbar-links">
        <li class="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
