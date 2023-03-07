import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  font-weight: bold;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333333;

  &:hover {
    color: #666666;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Officina Mobile</NavLink>
      <NavList>
        <NavItem>
          <NavLink to="/servizi">Servizi</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/chisiamo">Chi siamo</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contatti">Contatti</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
