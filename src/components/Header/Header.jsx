import React from "react";
import {
  Title,
  BoxHeader,
  SubInformation,
  AddYourAppartamnts,
  Btn,
  HeaderWrapper,
} from "./Header.Styled";
// import { useDispatch } from "react-redux";
import ChooseCurrency from "../chooseCurrensy/chooseCurrency";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  // const [currency, setCurrency] = useState("");
  // const dispatch = useDispatch();
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};

export default Header;
