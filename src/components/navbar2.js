import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/Logo.jpg";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo-link">
        <img src={Logo} alt="Officina Mobile Logo" className="logo" />
      </Link>
      <h1>Officina Mobile LV</h1>
      <a href="tel:+391234567899" className="nav-button2">Chiama Ora</a>
    </nav>
  );
}

export default Navbar;
