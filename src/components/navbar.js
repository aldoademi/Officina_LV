import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/Logo.jpg";
import hamburger from "../assets/hamburger.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo-link">
        <img src={Logo} alt="Officina Mobile Logo" className="logo" />
      </Link>

      {/* Aggiungi l'icona del menu */}
      {/* <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
      <img src={hamburger} alt="Officina Mobile Logo" className="logo" />
      </div> */}

      {/* Aggiungi la lista di navigazione */}
      <div className="nav-wrapper">
        <h1 className="nav-title"> Officina Mobile LV </h1>
          <ul className={`nav-list ${isOpen ? "hidden" : ""}`}>
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
              <Link onClick={() => window.location.href = "tel:+391234567899"}>Chiama Ora</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
