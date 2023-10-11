import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";

export const Content = styled.div`
  max-width: 1920px;
  height: 122px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Navigation = styled.div`
  display: flex;
  gap: 40px;
  color: #111;
  font-family: Futura PT;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-right: 784px;
`;

export const StyledLogo = styled(Logo)`
  margin-left: 245px;
  width: 239px;
  height: 29px;
  flex-shrink: 0;
`;

export const NavButtons = styled.button`
  border: none;
  background: none;
  text-transform: uppercase;
  cursor: pointer;
`;
