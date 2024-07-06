import { AppRoutes } from "../../lib/appRoutes";
import { ButtonEnter, ButtonEnterLink } from "../../styles/Button.styled";
import * as S from "../../styles/Auth.styled";
import { useState } from "react";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";

function Login() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const { updateUser } = useUserContext();

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleLoginButton = async () => {
    try {
      const newUser = await login({
        login: formData.login,
        password: formData.password,
      });

      updateUser(newUser.user);

      navigate(AppRoutes.MAIN);

      setFormData({ login: "", password: "" });
    } catch (error) {
      setLoginError(error.message);
    }
  };

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
              value={formData.login}
              onChange={handleInputChange}
              id="formlogin"
              placeholder="Эл. почта"
            />
            <S.Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              id="formpassword"
              placeholder="Пароль"
            />
            <S.ErrorMessage>{loginError}</S.ErrorMessage>
            <ButtonEnter id="btnEnter">
              <ButtonEnterLink onClick={handleLoginButton}>
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
