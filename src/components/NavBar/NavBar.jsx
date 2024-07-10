import React from "react";
import { NavContainer, NavItem, StyledNavLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <div>
      <NavContainer>
        <NavItem>
          <StyledNavLink to='/'>Rooms</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="auto-rent">Rent a car</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to='taxi'>Taxi from/to airpot</StyledNavLink>
        </NavItem>
      </NavContainer>
    </div>
  );
};

export default NavBar;
