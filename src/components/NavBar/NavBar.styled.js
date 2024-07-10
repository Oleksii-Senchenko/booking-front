import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { subSize } from "../Fonts/fonts";

export const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 25px;
  background-color: transparent;
  transition: 250ms;
  font-size: ${subSize};

  background-color: transparent;
  color: #fff;
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    border: solid 1px white
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Page = styled.div`
  padding: 20px;
  text-align: center;
`;
