import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";

export const Content = styled.div`
  max-width: 100%;
  height: 122px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  flex-wrap: wrap;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 40px;
  color: #111;
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
`;

export const StyledLogo = styled(Logo)`
  margin-left: 245px;
  width: 239px;
  height: 29px;
  flex-shrink: 0;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1486px) {
    width: 100%;
    position: static;
    margin: 20px 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    margin: 20px 0 auto;
  }
`;

export const StyledNavButtons = styled(NavLink)`
  border: none;
  background: none;
  text-transform: uppercase;
  cursor: pointer;
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  text-decoration: none;

  @media (max-width: 400px) {
    font-size: 12px;
  }

  &.active {
    text-decoration: underline;
  }
`;
