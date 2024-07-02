import { AppRoutes } from "../../../lib/appRoutes";
import {
  PopExitYesButton,
  PopExitNoButton,
  ExitYes,
  ExitNo,
} from "../../../styles/Button.styled";
import * as S from "./PopExit.styled";
import PropTypes from "prop-types";

function PopExit({ setIsAuth }) {
  const handleExitButton = () => {
    setIsAuth(false);
  }

  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <S.TitleText>Выйти из аккаунта?</S.TitleText>
          </S.PopExitTitle>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <PopExitYesButton id="exitYes">
                <ExitYes onClick={handleExitButton}>Да, выйти</ExitYes>
              </PopExitYesButton>
              <PopExitNoButton id="exitNo">
                <ExitNo to={AppRoutes.MAIN}>Нет, остаться</ExitNo>
              </PopExitNoButton>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

PopExit.propTypes = {
  setIsAuth: PropTypes.func.isRequired,
};

export default PopExit;
