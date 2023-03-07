import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import "../styles/Sidebar.css";

export default props => {
  return (
    <div className="sidebar-wrapper">
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/servizi">
          Servizi
        </a>
        <a className="menu-item" href="/contatti">
          Contatti
        </a>
        <a className="menu-item" href="/chisiamo">
          Chi Siamo
        </a>
        <a href="tel:+391234567899" className="nav-button2">
          Chiama Ora
        </a>
      </Menu>
    </div>
  );
};