import styled from "styled-components";
import { hover01, hover03 } from "../Common/Common.styled";

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
