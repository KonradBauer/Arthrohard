import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";

export const Content = styled.div`
  position: relative;
  max-width: 100%;
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
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  margin: 0 auto;
`;

export const StyledLogo = styled(Logo)`
  position: absolute;
  margin-left: 245px;
  width: 239px;
  height: 29px;
  flex-shrink: 0;
`;

export const StyledNavButtons = styled(NavLink)`
  border: none;
  background: none;
  text-transform: uppercase;
  cursor: pointer;
  color: #111;
  font-family: "Futura PT", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;
