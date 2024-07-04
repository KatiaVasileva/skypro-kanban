import styled from "styled-components";
import { hover01, hover03 } from "./Common.styled.js";
import { breakpoints } from "../lib/breakpoints.js";
import { Link } from "react-router-dom";

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

  a {
    color: #ffffff;
  }

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

  a {
    color: #565eef;
  }

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

export const ExitYes = styled(Link)`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExitNo = styled(Link)`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const PopExitNoButton = styled(Button)`
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
  background-color: transparent;
  border: 0.7px solid var(--palette-navy-60, #565eef);

  ${hover03}

  ${ExitNo}

  @media screen and (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
    height: 40px;
  }
`;

export const LoginButton = styled.button`
  cursor: pointer;
`;

export const ButtonEnterLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonEnter = styled(LoginButton)`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
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

  ${ButtonEnterLink}

  ${hover01}

  @media screen and (max-width: ${breakpoints.sm + "px"}) {
    height: 40px;
  }
`;

export const CreateButton = styled(Button)`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  ${hover01}

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    width: 100%;
    height: 40px;
  }
`;
