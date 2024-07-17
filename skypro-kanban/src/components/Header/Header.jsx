import { useState } from "react";
import * as S from "./Header.styled";
import PopUser from "../popups/PopUser/PopUser";
import { HeaderButton } from "../../styles/Button.styled.js";
import { Container } from "../../styles/Common.styled.js";
import { useUserContext } from "../../hooks/useUserContext.js";
import { AppRoutes } from "../../lib/appRoutes.js";
import { useThemeContext } from "../../hooks/useThemeContext.js";

// eslint-disable-next-line react/prop-types
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();
  const { theme } = useThemeContext();

  console.log(theme);

  const toggleWindow = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.Logo>
            <a href="" target="_self">
              <S.LogoImage
                src={
                  theme === "light"
                    ? "../images/logo.png"
                    : "../images/logo_dark.png"
                }
                alt="logo"
              />
            </a>
          </S.Logo>
          <S.Nav>
            <HeaderButton id="btnMainNew">
              <S.HeaderLink to={AppRoutes.NEW_CARD}>
                Создать новую задачу
              </S.HeaderLink>
            </HeaderButton>
            <S.HeaderUser onClick={toggleWindow}>{user.name}</S.HeaderUser>
            {isOpen && <PopUser />}
          </S.Nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

export default Header;
