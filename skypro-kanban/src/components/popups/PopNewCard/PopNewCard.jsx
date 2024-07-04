import Calendar from "../../Calendar/Calender";
import { AppRoutes } from "../../../lib/appRoutes";
import * as S from "./PopNewCard.styled";
import { CreateButton } from "../../../styles/Button.styled";

function PopNewCard() {
  return (
    <S.PopNewCard>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.Title>Создание задачи</S.Title>
            <S.WindowCloseLink to={AppRoutes.MAIN}>&#10006;</S.WindowCloseLink>
            <S.Wrap>
              <S.Form id="formNewCard" action="#">
                <S.FormBlock>
                  <S.Subtitle htmlFor="formTitle">Название задачи</S.Subtitle>
                  <S.TaskNameInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Subtitle htmlFor="textArea">Описание задачи</S.Subtitle>
                  <S.TaskDescriptionInput
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.TaskDescriptionInput>
                </S.FormBlock>
              </S.Form>
              <Calendar
                dateEnd={"Выберите срок исполнения."}
                dateControl={""}
              />
            </S.Wrap>
            <S.Categories>
              <S.CategoriesSubtitle>Категория</S.CategoriesSubtitle>
              <S.CategoriesTheme>
                <S.ActiveCategoriesTheme className="_orange">
                  <S.CategoryThemeName className="_orange">
                    Web Design
                  </S.CategoryThemeName>
                </S.ActiveCategoriesTheme>
                <S.CategoryTheme className="_green">
                  <S.CategoryThemeName className="_green">
                    Research
                  </S.CategoryThemeName>
                </S.CategoryTheme>
                <S.CategoryTheme className="_purple">
                  <S.CategoryThemeName className="_purple">
                    Copywriting
                  </S.CategoryThemeName>
                </S.CategoryTheme>
              </S.CategoriesTheme>
            </S.Categories>
            <CreateButton id="btnCreate">Создать задачу</CreateButton>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopNewCard>
  );
}

export default PopNewCard;
