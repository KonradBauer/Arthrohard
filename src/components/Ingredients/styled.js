import styled from "styled-components";
import { ReactComponent as Line } from "../../images/line.svg";

export const Container = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  background: #fff;
  margin-top: 116px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  text-align: center;
  font-family: Futura PT;
  font-size: 48px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  background: linear-gradient(90deg, #111 -8.85%, #b1b1b1 58.84%, #696969 91.39%, #b1b1b1 116.12%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubHeader = styled.div`
  color: #111;
  text-align: center;
  font-family: Futura PT;
  font-size: 31px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-top: 100px;
`;

export const StyledLine = styled(Line)`
  width: 100%;
  max-width: 730px;
  margin-top: 20px;
  stroke-width: 1px;
  stroke: #111;
  justify-content: center;
`;
