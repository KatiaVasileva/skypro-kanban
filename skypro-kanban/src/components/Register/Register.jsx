import { AppRoutes } from "../../lib/appRoutes";
import * as S from "../../styles/Auth.styled";
import { ButtonEnter, ButtonEnterLink } from "../../styles/Button.styled";

function Register() {
  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.Block>
          <S.Title>
            <h2>Регистрация</h2>
          </S.Title>
          <S.InputForm id="formLogUp" action="#">
            <S.Input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя"
            />
            <S.Input
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
            />
            <S.Input
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <ButtonEnter id="SignUpEnter">
              <ButtonEnterLink to={AppRoutes.MAIN}>
                Зарегистрироваться
              </ButtonEnterLink>
            </ButtonEnter>
            <S.FormGroup>
              <S.FormGroupRegisterText>
                Уже есть аккаунт?{" "}
                <S.FormGroupRegisterLink to={AppRoutes.LOGIN}>
                  Войдите здесь
                </S.FormGroupRegisterLink>
              </S.FormGroupRegisterText>
            </S.FormGroup>
          </S.InputForm>
        </S.Block>
      </S.Modal>
    </S.ContainerSignin>
  );
}

export default Register;
