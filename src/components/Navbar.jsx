import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import navbarItems from "./navbarItems.js";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const isParentActive = (item) => {
    if (currentPage === item.id) return true;
    if (item.subItems){
      return item.subItems.some(subItem => subItem.id === currentPage);
    }
    return false;
  }
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
        {navbarItems.map((item) => (
          <li key={item.id} className="navbar-item-wrapper">
            <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`navbar-item ${isParentActive(item) ? "active" : ""}`}
          >
            {item.label}
          </button>
          {item.subItems &&(
            <ul className="dropdown-menu">
              {item.subItems.map((subItem)=>(
                <li key={subItem.id}>
                  <button
                  onClick={()=> setCurrentPage(subItem.id)}
                  className={`dropdown-item ${currentPage === subItem.id ? 'active':''}`}>
                    {subItem.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
          </li>    
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
