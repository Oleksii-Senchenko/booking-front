import React from "react";
import {
  OffersContainer,
  Title,
  Recomendated,
  OneOfRecomed,
  SubTitle,
  Description,
  SubDesk,
  NavigationBtn,
} from "./Offers.styled";

const Offers = () => {
  return (
    <OffersContainer>
      <Title>Offers</Title>
      <SubDesk>Promotions, deals, and special offers for you</SubDesk>
      <Recomendated>
        <OneOfRecomed>
          <SubTitle>Fly away to your dream vacation</SubTitle>
          <Description>Get inspired – compare and book flights with flexibility</Description>
          <NavigationBtn>Search for fligth</NavigationBtn>
        </OneOfRecomed>
        <OneOfRecomed>
          <SubTitle>Seize the moment</SubTitle>
          <Description>Save 15% or more when you book and stay before October</Description>
          <NavigationBtn>Find getaway Deal</NavigationBtn>
        </OneOfRecomed>
      </Recomendated>
    </OffersContainer>
  );
};

export default Offers;
