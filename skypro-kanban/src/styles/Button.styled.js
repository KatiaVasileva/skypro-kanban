import styled from "styled-components";
import { hover01, hover03 } from "./Common.styled.js";
import { breakpoints } from "../lib/breakpoints.js";
import { Link } from "react-router-dom";

export const Button = styled.button`
  height: 30px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const HeaderButton = styled(Button)`
  width: 178px;
  background-color: #565eef;
  color: #ffffff;
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
    margin-right: 0;
  }
`;

export const PopUserExitButton = styled(Button)`
  width: 72px;
  background: transparent;
  color: #565eef;
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
  background-color: #565eef;
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
  background-color: #565eef;
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

export const LoginButton = styled(Button)`
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
  background-color: #565eef;
  margin-top: 20px;
  margin-bottom: 20px;
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
  background-color: #565eef;
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

export const ButtonBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonBrowseGroup = styled.div``;

export const BrowseFormButtonBor = styled(Button)`
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  background: transparent;
  color: #565eef;

  a {
    color: #565eef;
  }

  ${hover03}
`;

export const BrowseFormButtonBg = styled(Button)`
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  background: #565eef;
  color: #ffffff;

  a {
    color: #ffffff;
  }

  ${hover01}
`;
