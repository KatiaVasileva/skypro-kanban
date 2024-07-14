import styled from "styled-components";

export const PopUser = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: ${(props) => props.theme.popUserBorder};
  background: ${(props) => props.theme.popUserBackground};
  box-shadow: ${(props) => props.theme.popUserBoxShadow};
  padding: 34px;
  text-align: center;
  z-index: 2;

  &:target {
    display: block;
  }
`;

export const Name = styled.p`
  color: ${(props) => props.theme.body};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const Mail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const DarkThemeText = styled.p`
  color: ${(props) => props.theme.body};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const Checkbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.popUserCheckBox};
    transition: 0.5s;
  }

  &:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

export const Theme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  ${DarkThemeText}

  ${Checkbox}
`;
