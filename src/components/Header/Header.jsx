import React from "react";
import {
  Title,
  BoxHeader,
  SubInformation,
  AddYourAppartamnts,
  Btn,
  HeaderWrapper,
  HandleSize,
  StrongText
} from "./Header.Styled";
// import { useDispatch } from "react-redux";
import ChooseCurrency from "../chooseCurrensy/chooseCurrency";
import { Link, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <HandleSize>
        <BoxHeader>
          <Title>Booking.com</Title>

          <SubInformation>
            <ChooseCurrency />
            <AddYourAppartamnts>Add Your Appartamnts</AddYourAppartamnts>
            <Link to="auth">
              <Btn>Sign Up</Btn>
            </Link>
            <Link to="auth">
              <Btn>Log In</Btn>
            </Link>
          </SubInformation>
        </BoxHeader>
        <NavBar />
      </HandleSize>
      {location.pathname === "/" ? (
        <StrongText>
          Find your next stay 
          <span>Search deals on hotels, homes, and much more...</span>
        </StrongText>
      ) : null}
    </HeaderWrapper>
  );
};

export default Header;
