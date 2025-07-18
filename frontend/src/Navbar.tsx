import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Payton Dennis</div>
      <ul className="navbar-links">
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropbtn">Menu ▼</span>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#option1">Option 1</a>
              <a href="#option2">Option 2</a>
              <a href="#option3">Option 3</a>
            </div>
          )}
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
