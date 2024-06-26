import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints.js";

export const Main = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const MainBlock = styled(Main)`
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: ${breakpoints.xl + "px"}) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled(Main)`
  display: flex;

  @media screen and (max-width: ${breakpoints.xl + "px"}) {
    display: block;
  }
`;
