import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <Link to="/">Officina Mobile</Link>
      <ul className={`nav-list ${isOpen ? "mobile" : ""}`}>
        <li className={`nav-item ${isOpen ? "mobile" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`nav-item ${isOpen ? "mobile" : ""}`}>
          <Link to="/servizi">Servizi</Link>
        </li>
        <li className={`nav-item ${isOpen ? "mobile" : ""}`}>
          <Link to="/chisiamo">Chi siamo</Link>
        </li>
        <li className={`nav-item ${isOpen ? "mobile" : ""}`}>
          <Link to="/contatti">Contatti</Link>
        </li>
        <li className={`nav-button ${isOpen ? "mobile" : ""}`}>
          <Link onClick={() => window.location.href = "tel:+393279974508"}>Chiama Ora</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
