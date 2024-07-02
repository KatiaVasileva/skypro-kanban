import { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Header.styled";
import PopUser from "../popups/PopUser/PopUser";
import { HeaderButton } from "../../styles/Button.styled.js";
import { Container } from "../../styles/Common.styled.js";

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
              <S.LogoImage src="../images/logo.png" alt="logo" />
            </a>
          </S.Logo>
          <S.LogoDark>
            <a href="" target="_self">
              <S.LogoImage src="../images/logo_dark.png" alt="logo" />
            </a>
          </S.LogoDark>
          <S.Nav>
            <HeaderButton id="btnMainNew" onClick={onCardAdd}>
              Создать новую задачу
            </HeaderButton>
            <S.HeaderUser onClick={toggleWindow}>Ivan Ivanov</S.HeaderUser>
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
