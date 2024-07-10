import { Link } from "react-router-dom";
import styled from "styled-components";
import { hover02 } from "../../styles/Common.styled";

export const NotFoundTitle = styled.h2`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const LinkBlock = styled.div`
  text-align: center;
`;

export const MainPageLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: #565eef;

  ${hover02}
`;
