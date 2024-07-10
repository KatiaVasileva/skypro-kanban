import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const PopWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const ErrorMessage = styled.p`
  padding: 40px;
  font-weight: 500;
  color: #F84D4D;
`;

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;

    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const hover03 = css`
  &:hover {
    background-color: #565eef;
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }
`;
