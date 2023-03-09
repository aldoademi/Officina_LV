import { Component } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar4.css";

class Navbar4 extends Component {
  state = {
    clicked: false,
    activeLink: "home", // variabile di stato per memorizzare il link attivo
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // funzione per impostare il link attivo
  setActiveLink = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    const isMobile = window.innerWidth <= 768; // Check if the screen size is mobile
    const callButton = isMobile ? ( // If the screen size is mobile, create a call button that starts the call
      <a href="tel:+391234567899" className="nav-button">
        Chiama ora
      </a>
    ) : (
      // If the screen size is not mobile, create a link to the contact page
      <Link to="/contatti" className="nav-button">
        Contatti
      </Link>
    );
    return (
      <>
        <nav>
          <a href="/">
            <svg
              id="logo-15"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              ...
            </svg>
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a
                  className={
                    this.state.activeLink === "home" ? "active" : "" // impostare la classe "active" se il link è attivo
                  }
                  href="/"
                  onClick={() => this.setActiveLink("home")} // impostare il link attivo al click
                >
                  Home
                </a>
              </li>
              <li>
                <Link to="/servizi"
                  className={
                    this.state.activeLink === "servizi" ? "active" : ""
                  }
                  
                  onClick={() => this.setActiveLink("servizi")}
                >
                  Servizi
                  </Link>
              </li>
              <li>
                <Link to="/chisiamo"
                  className={
                    this.state.activeLink === "chisiamo" ? "active" : ""
                  }
                  onClick={() => this.setActiveLink("chisiamo")}
                >
                  Chi siamo
                </Link>
              </li>
              <li className="nav-button">
                {window.innerWidth > 768 ? (
                  <Link
                    to="/contatti"
                    className={
                      this.state.activeLink === "contatti" ? "active" : ""
                    }
                    onClick={() => this.setActiveLink("contatti")}
                  >
                    Contatta ora
                  </Link>
                ) : (
                  <a href="tel:+391234567899" className="active">
                    Chiama ora
                  </a>
                )}
              </li>
            </ul>
          </div>
          </nav>
        </>
      );
    }
  }
  
  export default Navbar4;
  