import styled from "styled-components";
import { hover01, hover03 } from "../Common/Common.styled";
import { breakpoints } from "../../lib/breakpoints.js";

export const Button = styled.button`
  cursor: pointer;
  outline: none;
`;

export const HeaderButton = styled(Button)`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  ${hover01}

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const PopUserExitButton = styled(Button)`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;

  ${hover03}
`;

export const CardButtonDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const CardButton = styled(Button)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  border: none;
  background-color: #fff;

  ${CardButtonDot}
`;

export const ExitYes = styled.a`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExitNo = styled(ExitYes)`
  color: #565eef;
`;

export const PopExitYesButton = styled(Button)`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  ${hover01}

  ${ExitYes}

  @media screen and (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const PopExitNoButton = styled(PopExitYesButton)`
  background-color: transparent;
  border: 0.7px solid var(--palette-navy-60, #565eef);

  ${hover03}

  ${ExitNo}

  @media screen and (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
    height: 40px;
  }
`;
