import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Logo from "../assets/Logo.jpg";

function Header() {
  return (
    <header>
      <div className="logo">
        {/* <Link to="/">
          <img src={Logo} alt="Logo officina mobile" />
        </Link> */}
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
