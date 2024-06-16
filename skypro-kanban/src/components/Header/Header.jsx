import { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Header.styled";
import PopUser from "../popups/PopUser/PopUser";
import { HeaderButton } from "../Button/Button.styled";
import { Container } from "../Common/Common.styled";

function Header({ onCardAdd }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.Logo>
            <a href="" target="_self">
              <img src="../images/logo.png" alt="logo" />
            </a>
          </S.Logo>
          <S.LogoDark>
            <a href="" target="_self">
              <img src="../images/logo_dark.png" alt="logo" />
            </a>
          </S.LogoDark>
          <S.Nav>
            <HeaderButton id="btnMainNew" onClick={onCardAdd}>
              <span>Создать новую задачу</span>
            </HeaderButton>
            <S.HeaderUser href="#user-set-target" onClick={toggleWindow}>
              Ivan Ivanov
            </S.HeaderUser>
            {isOpen && <PopUser />}
          </S.Nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

Header.propTypes = {
  onCardAdd: PropTypes.func.isRequired,
};

export default Header;
