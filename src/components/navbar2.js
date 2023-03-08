import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar2.css";
import Logo from "../assets/Logo.jpg";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <a href = "/">Home</a>
        <a href = "/servizi">Servizi</a>
        <a href = "/chisiamo">Chi siamo</a>
        <a href = "/contatti">Contatti</a>
      </nav>
    </div>
  );
}

export default Navbar;
