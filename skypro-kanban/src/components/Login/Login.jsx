import { AppRoutes } from "../../lib/appRoutes";
import {
  LoginButtonEnter,
  LoginButtonEnterLink,
} from "../../styles/Button.styled";
import * as S from "./Login.styled";

function Login() {
  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.Block>
          <S.Title>
            <h2>Вход</h2>
          </S.Title>
          <S.FormLogin id="formLogIn" action="#">
            <S.Input
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <S.Input
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <LoginButtonEnter id="btnEnter">
              <LoginButtonEnterLink to={AppRoutes.MAIN}>
                Войти
              </LoginButtonEnterLink>
            </LoginButtonEnter>
            <S.FormGroup>
              <S.FormGroupRegisterText>
                Нужно зарегистрироваться?
              </S.FormGroupRegisterText>
              <S.FormGroupRegisterLink to="/">
                Регистрируйтесь здесь
              </S.FormGroupRegisterLink>
            </S.FormGroup>
          </S.FormLogin>
        </S.Block>
      </S.Modal>
    </S.ContainerSignin>
  );
}

export default Login;
