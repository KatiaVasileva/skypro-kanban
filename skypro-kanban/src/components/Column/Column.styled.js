import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints.js";

export const Column = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: ${breakpoints.xl + "px"}) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitleText = styled.p`
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  ${ColumnTitleText}
`;
