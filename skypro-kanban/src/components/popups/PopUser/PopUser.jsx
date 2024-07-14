import { Link } from "react-router-dom";
import { PopUserExitButton } from "../../../styles/Button.styled";
import * as S from "./PopUser.styled";
import { AppRoutes } from "../../../lib/appRoutes";
import { useUserContext } from "../../../hooks/useUserContext";

// eslint-disable-next-line react/prop-types
function PopUser({ toggleTheme }) {
  const { user } = useUserContext();

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
