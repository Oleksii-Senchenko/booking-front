import React, { useState } from "react";
import {
  Title,
  BoxHeader,
  SubInformation,
  AddYourAppartamnts,
  Btn
} from "./Header.Styled";
import { useDispatch } from "react-redux";
import ChooseCurrency from "../chooseCurrensy/chooseCurrency";
import { Link } from "react-router-dom";

const Header = () => {
  const [currency, setCurrency] = useState("");
  const dispatch = useDispatch();
  return (
    <BoxHeader>
      <Title>Booking.com</Title>
      <SubInformation>
        <ChooseCurrency />
        <AddYourAppartamnts>Add Your Appartamnts</AddYourAppartamnts>
        {/* Кнопки реестрации */}

        <Link to="auth">
          <Btn>Sign Up</Btn>
        </Link>
        <Link to="auth">
          <Btn>Log In</Btn>
        </Link>
      </SubInformation>
    </BoxHeader>
  );
};

export default Header;
