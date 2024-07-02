import { useState } from "react";
import { AppRoutes } from "../../lib/appRoutes";
import * as S from "../../styles/Auth.styled";
import { ButtonEnter, ButtonEnterLink } from "../../styles/Button.styled";
import { register } from "../../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterButton = async () => {
    try{
      await register({
        login: formData.login,
        name: formData.name,
        password: formData.password,
      });
  
      navigate(AppRoutes.LOGIN);
    } catch(error) {
      setRegisterError(error.message);
    }
    
  };

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
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              id="first-name"
              placeholder="Имя"
            />
            <S.Input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleOnChange}
              id="loginReg"
              placeholder="Эл. почта"
            />
            <S.Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              id="passwordFirst"
              placeholder="Пароль"
            />
            <S.ErrorMessage>{registerError}</S.ErrorMessage>
            <ButtonEnter id="SignUpEnter">
              <ButtonEnterLink onClick={handleRegisterButton}>
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
