import { Component } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
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
            <div className="logo">
                <a href="/">
                    <svg
                    id="logo-15"
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    {" "}
                    <path
                        d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                        className="ccustom"
                        fill="#17CF97"
                    ></path>{" "}
                    <path
                        d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                        className="ccustom"
                        fill="#17CF97"
                    ></path>{" "}
                    <path
                        d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                        className="ccustom"
                        fill="#17CF97"
                    ></path>{" "}
                    <path
                        d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                        className="ccustom"
                        fill="#17CF97"
                    ></path>{" "}
                    </svg>
                </a>

                <h1 className="title">Officina LV</h1>
            </div>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link to="/"
                  className={
                    this.state.activeLink === "home" ? "active" : "" // impostare la classe "active" se il link è attivo
                  }
                  onClick={() => this.setActiveLink("home")} // impostare il link attivo al click
                >
                  Home
                </Link>
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
                  <Link to="tel:+391234567899" className={
                    this.state.activeLink === "contatti" ? "active" : ""
                  }>
                    Chiama ora
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>

          </nav>
        </>
      );
    }
  }
  
  export default Navbar4;
  