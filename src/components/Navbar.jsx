import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const navbarItems = [
  {id:'dashboard', label:''}
]

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <button
          className="logo-button"
          onClick={() => setCurrentPage("dashboard")}
        >
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="navbar-text">Mobile CRM</span>
        </button>
      </div>
      <ul className="navbar-links">
        <li>
          <button
            onClick={() => setCurrentPage("service")}
            className={currentPage === "service" ? "active" : ""}
          >
            Service
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage("addon")}
            className={currentPage === "addon" ? "active" : ""}
          >
            Add-on
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
