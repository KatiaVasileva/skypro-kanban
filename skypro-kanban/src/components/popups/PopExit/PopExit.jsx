
import { PopExitYesButton, PopExitNoButton, ExitYes, ExitNo } from "../../../styles/Button.styled";
import * as S from "./PopExit.styled";

function PopExit() {
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
                <ExitYes href="modal/signin.html">Да, выйти</ExitYes>
              </PopExitYesButton>
              <PopExitNoButton id="exitNo">
                <ExitNo href="main.html">Нет, остаться</ExitNo>
              </PopExitNoButton>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

export default PopExit;
