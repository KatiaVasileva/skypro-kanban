import styled, { css } from "styled-components";
import { breakpoints } from "../../../lib/breakpoints";
import { Link } from "react-router-dom";
import { topicStyles } from "../../../lib/topicStyles";
import { subtitle01, title01 } from "../../../styles/Common.styled";

export const PopNewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  &:target {
    display: block;
  }

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

  @media screen and (max-width: ${breakpoints.md + "px"}) {
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
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.blockBorder};
  position: relative;
  box-shadow: ${(props) => props.theme.popNewCardBoxShadow};

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    border-radius: 0;
  }

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    padding: 20px 16px 32px;
  }
`;

export const Content = styled.div`
  .pop-new-card__content {
    display: block;
    text-align: left;
  }
`;

export const Title = styled.h3`
  ${title01}
  margin-bottom: 20px;
`;

export const WindowCloseLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
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

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.label`
  ${subtitle01}
`;

export const Input = css`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${(props => props.theme.body)};

  &::-moz-placeholder,
  &::-webkit-placeholder,
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const TaskNameInput = styled.input`
  ${Input}
  margin: 20px 0;
`;

export const TaskDescriptionInput = styled.textarea`
  ${Input}
  font-family: "Roboto", sans-serif;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    max-width: 100%;
    height: 34px;
  }
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesSubtitle = styled.p`
  ${subtitle01}
  margin-bottom: 14px;
`;

export const CategoriesTheme = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoryThemeName = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const CategoryTheme = styled.div`
  display: inline-block;
  width: 115px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  cursor: pointer;
  text-align: center;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94A6BE"};

  ${CategoryThemeName} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#FFFFFF"};
  }
`;

export const ActiveCategoryTheme = styled(CategoryTheme)`
  opacity: 1 !important;
`;
