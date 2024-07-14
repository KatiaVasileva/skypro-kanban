import styled from "styled-components";
import { breakpoints } from "../lib/breakpoints";
import { Link } from "react-router-dom";

export const ContainerSignin = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.sm + "px"}) {
    background-color: #ffffff;
  }
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.block};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.blockBorder};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: ${breakpoints.sm + "px"}) {
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.span`
  font-family: "Arial", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -1%;
  color: #f84d4d;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  background-color: ${(props) => props.theme.block};
  color: ${(props => props.theme.body)};

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const InputError = styled(Input)`
  border: 0.7px solid #F84D4D;
`;

export const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;

  ${Input}
  ${ErrorMessage}
`;

export const FormGroupRegisterText = styled.p`
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

export const FormGroupRegisterLink = styled(Link)`
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  text-decoration: underline;
`;

export const FormGroup = styled.div`
  text-align: center;

  ${FormGroupRegisterText}
  ${FormGroupRegisterLink}
`;
