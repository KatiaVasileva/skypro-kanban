import { useState } from "react";
import * as S from "./Header.styled";
import PopUser from "../popups/PopUser/PopUser";
import { HeaderButton } from "../../styles/Button.styled.js";
import { Container } from "../../styles/Common.styled.js";
import { useUserContext } from "../../hooks/useUserContext.js";
import { AppRoutes } from "../../lib/appRoutes.js";

// eslint-disable-next-line react/prop-types
function Header({ toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

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
            <HeaderButton id="btnMainNew">
              <S.HeaderLink to={AppRoutes.NEW_CARD}>
                Создать новую задачу
              </S.HeaderLink>
              {/* Создать новую задачу */}
            </HeaderButton>
            <S.HeaderUser onClick={toggleWindow}>{user.name}</S.HeaderUser>
            {isOpen && <PopUser toggleTheme={toggleTheme}/>}
          </S.Nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

export default Header;
