import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.wrapper};
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
  color: #f84d4d;
`;

export const title01 = css`
  color: ${(props) => props.theme.body};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const subtitle01 = css`
  color: ${(props) => props.theme.body};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
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
    border-color: #565eef;

    a {
      color: #ffffff;
    }
  }
`;
