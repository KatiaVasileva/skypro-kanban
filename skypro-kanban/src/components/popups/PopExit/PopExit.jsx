import { useUserContext } from "../../../hooks/useUserContext";
import { AppRoutes } from "../../../lib/appRoutes";
import {
  PopExitYesButton,
  PopExitNoButton,
  ExitYes,
  ExitNo,
} from "../../../styles/Button.styled";
import * as S from "./PopExit.styled";

function PopExit() {
  const { updateUser } = useUserContext();

  const handleExitButton = () => {
    updateUser(null);
  };

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

export default PopExit;
