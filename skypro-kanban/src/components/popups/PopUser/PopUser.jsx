import { Link } from "react-router-dom";
import { PopUserExitButton } from "../../../styles/Button.styled";
import * as S from "./PopUser.styled";
import { AppRoutes } from "../../../lib/appRoutes";
import { useUserContext } from "../../../hooks/useUserContext";
import { useThemeContext } from "../../../hooks/useThemeContext";

// eslint-disable-next-line react/prop-types
function PopUser() {
  const { user } = useUserContext();
  const {theme, setTheme} = useThemeContext();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <S.PopUser>
      <S.Name>{user.name}</S.Name>
      <S.Mail>{user.login}</S.Mail>
      <S.Theme>
        <S.DarkThemeText>Темная тема</S.DarkThemeText>
        <S.Checkbox type="checkbox" name="checkbox" onChange={toggleTheme} />
      </S.Theme>
      <PopUserExitButton>
        <Link to={AppRoutes.EXIT}>Выйти</Link>
      </PopUserExitButton>
    </S.PopUser>
  );
}

export default PopUser;
