// import { Link } from "react-router-dom";
// import { AppRoutes } from "../../../lib/appRoutes";
import { PopUserExitButton } from "../../../styles/Button.styled";
import * as S from "./PopUser.styled";

function PopUser() {
  return (
    <S.PopUser id="user-set-target">
      <S.Name>Ivan Ivanov</S.Name>
      <S.Mail>ivan.ivanov@gmail.com</S.Mail>
      <S.Theme>
        <S.DarkThemeText>Темная тема</S.DarkThemeText>
        <S.Checkbox type="checkbox" name="checkbox" />
      </S.Theme>
      <PopUserExitButton>
        {/* <Link to={AppRoutes.LOGIN}>Выйти</Link> */}
        <a href="#popExit">Выйти</a>
      </PopUserExitButton>
    </S.PopUser>
  );
}

export default PopUser;
