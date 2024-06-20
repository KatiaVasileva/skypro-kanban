import { AppRoutes } from "../../lib/appRoutes";
import {
  ButtonEnter,
  ButtonEnterLink,
} from "../../styles/Button.styled";
import * as S from "../../styles/Auth.styled"

function Login() {
  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.Block>
          <S.Title>
            <h2>Вход</h2>
          </S.Title>
          <S.InputForm id="formLogIn" action="#">
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
            <ButtonEnter id="btnEnter">
              <ButtonEnterLink to={AppRoutes.MAIN}>
                Войти
              </ButtonEnterLink>
            </ButtonEnter>
            <S.FormGroup>
              <S.FormGroupRegisterText>
                Нужно зарегистрироваться?
              </S.FormGroupRegisterText>
              <S.FormGroupRegisterLink to={AppRoutes.REGISTER}>
                Регистрируйтесь здесь
              </S.FormGroupRegisterLink>
            </S.FormGroup>
          </S.InputForm>
        </S.Block>
      </S.Modal>
    </S.ContainerSignin>
  );
}

export default Login;
