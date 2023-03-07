import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo officina mobile" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
