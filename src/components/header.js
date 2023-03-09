import React from "react";
import { Link } from "react-router-dom";
import Navbar4 from "./navbar4";
import Logo from "../assets/Logo.jpg";

function Header() {
  return (
    <header>
      {/* <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo officina mobile" />
        </Link>
      </div> */}
      <Navbar4 />
    </header>
  );
}

export default Header;
