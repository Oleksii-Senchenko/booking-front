import styled from "styled-components";
import { btnSize, sectionTitleSize, subSize } from "../Fonts/fonts";
import { sectionTitleColors } from "../Colors/Сolors";

export const OffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const Title = styled.h4`
  font-size: ${sectionTitleSize};
  font-weight: bold;
  text-decoration: none;
  color: ${sectionTitleColors};
  margin-bottom: 10px;
`;
export const SubDesk = styled.p`
  font-size: ${sectionTitleSize};
  text-decoration: none;
  color: ${sectionTitleColors};
  margin-bottom: 15px;
`;

export const Recomendated = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  justify-content: space-between;
`;
export const OneOfRecomed = styled.div`
  border: solid 1px grey;
  padding: 20px 10px;
  border-radius: 10px;
  width: 1000px;
`;
export const SubTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 15px;
`;
export const NavigationBtn = styled.button`
  color: white;
  padding: 5px 10px;
  background-color: #006ce4;
  font-size: ${btnSize};
  border-radius: 5px;
  border: none;
  &:hover{
    font-size: ${subSize};
  }
`;
