import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../lib/breakpoints.js";
import { topicStyles } from "../../lib/topicStyles.js";

const cardAnimation = keyframes`
    0% {
        height: 0;
        opacity: 0;
    }

    100% {
        height: auto;
        opacity: 1;
    }
`;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: ${breakpoints.xl + "px"}) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const DateImage = styled.svg`
  width: 13px;
`;

export const Date = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${DateImage}

  ${Date}
`;

export const ThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94A6BE"};

  ${ThemeText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#FFFFFF"};
  }
`;
