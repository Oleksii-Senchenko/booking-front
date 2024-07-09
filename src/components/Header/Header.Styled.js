import styled from "styled-components";
import { mainSize, subSize } from "../fonts";
import { Link } from "react-router-dom";
export const Title = styled(Link)`
font-size: ${mainSize};
font-weight:bold;
text-decoration: none;
color: white;
`;
export const BoxHeader = styled.div`
  display: flex;

  padding: 10px;
  justify-content: space-between;
`;

export const SubInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

export const AddYourAppartamnts = styled.button`
  color: white;
  border: none;

  background-color: transparent;
  font-size: ${subSize};
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
export const Btn = styled.button`
  color: #5077ec;
  border: none;

  background-color: white;
  font-size: ${subSize};
  
  
  &:hover {
    box-shadow: 0 0 100px rgba(255, 255, 255, 0.5)
  }
`;