import styled from "styled-components";
import { breakpoints } from "../../../lib/breakpoints";
import { topicStyles } from "../../../lib/topicStyles";
import { subtitle01, title01 } from "../../../styles/Common.styled";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    top: 70px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.container};

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.block};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.blockBorder};
  position: relative;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    border-radius: 0;
  }

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    adding: 20px 16px 32px;
  }
`;

export const CategoryThemeName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const CategoryTheme = styled.div`
  width: 115px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
  text-align: center;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94A6BE"};

  ${CategoryThemeName} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#FFFFFF"};
  }
`;

export const CategoryThemeTop = styled(CategoryTheme)`
  display: block;

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: block;
  text-align: left;

  ${CategoryTheme}
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  ${title01}
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;

export const StatusThemeText = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  ${StatusThemeText}
`;

export const StatusThemeHide = styled(StatusTheme)`
  display: none;
`;

export const StatusThemeGray = styled(StatusTheme)`
  background-color: ${topicStyles._gray.backgroundColor};
`;

export const StatusThemeTextGray = styled(StatusThemeText)`
  color: ${topicStyles._gray.color};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    display: block;
  }
`;

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md}) {
    max-width: 100%;
  }
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBlockTitle = styled.label`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;  

export const FormTextarea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.main};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder,
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    max-width: 100%;
    height: 34px;
  }
`;

export const ThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const CategorySubtitle = styled.p`
  margin-bottom: 14px;
  ${subtitle01}
`;
