import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calender";
import PropTypes from "prop-types";
import { AppRoutes } from "../../../lib/appRoutes";
import { useTaskContext } from "../../../hooks/useTaskContext";
import * as S from "./PopBrowse.styled";
import { colors } from "../../../lib/topicStyles";
import {
  BrowseFormButtonBg,
  BrowseFormButtonBor,
  ButtonBrowse,
  ButtonBrowseGroup,
} from "../../../styles/Button.styled";
import { format } from "date-fns";
import { removeTask } from "../../../api";
import { useUserContext } from "../../../hooks/useUserContext";
import { useState } from "react";

function PopBrowse({ cardId }) {
  const { user } = useUserContext();
  const { tasks, setTasks } = useTaskContext();
  const navigate = useNavigate();
  const [isEditActive, setIsEditActive] = useState(false);

  const task = tasks.filter((task) => task._id === cardId);

  const handleEditButton = () => {
    setIsEditActive(true);
  };

  const handleDeleteButton = async () => {
    const newTasks = await removeTask({ id: cardId, token: user.token });
    setTasks(newTasks.tasks);
    navigate(AppRoutes.MAIN);
  };

  return (
    <S.PopBrowse id="popBrowse">
      <S.Container>
        <S.Block>
          <S.Content>
            <S.TopBlock>
              <S.Title>{task[0].title}</S.Title>
              <S.CategoryThemeTop $themeColor={colors.get(task[0].topic)}>
                <S.CategoryThemeName>{task[0].topic}</S.CategoryThemeName>
              </S.CategoryThemeTop>
            </S.TopBlock>
            <S.Status>
              <S.Id>{"Идентификационный номер задачи: " + cardId}</S.Id>
              <br />
              <S.StatusTitle>Статус</S.StatusTitle>
              <S.StatusThemes>
                <S.StatusThemeHide>
                  <S.StatusThemeText>Без статуса</S.StatusThemeText>
                </S.StatusThemeHide>
                <S.StatusThemeGray>
                  <S.StatusThemeTextGray>Нужно сделать</S.StatusThemeTextGray>
                </S.StatusThemeGray>
                <S.StatusThemeHide>
                  <S.StatusThemeText>В работе</S.StatusThemeText>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeText>Тестирование</S.StatusThemeText>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeText>Готово</S.StatusThemeText>
                </S.StatusThemeHide>
              </S.StatusThemes>
            </S.Status>
            <S.Wrap>
              <S.Form id="formBrowseCard" action="#">
                <S.FormBlock>
                  <S.FormBlockTitle htmlFor="textArea01">
                    Описание задачи
                  </S.FormBlockTitle>
                  <S.FormTextarea
                    name="description"
                    value={task[0].description}
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></S.FormTextarea>
                </S.FormBlock>
              </S.Form>

              <Calendar
                dateEnd={"Срок исполнения: "}
                dateControl={format(task[0].date, "dd.MM.yy")}
              />
            </S.Wrap>

            <S.ThemeDown>
              <S.CategorySubtitle>Категория</S.CategorySubtitle>
              <S.CategoryTheme $themeColor={colors.get(task[0].topic)}>
                <S.CategoryThemeName>{task[0].topic}</S.CategoryThemeName>
              </S.CategoryTheme>
            </S.ThemeDown>

            {!isEditActive && (
              <ButtonBrowse>
                <ButtonBrowseGroup>
                  <BrowseFormButtonBor onClick={handleEditButton}>
                    <a href="#">Редактировать задачу</a>
                  </BrowseFormButtonBor>
                  <BrowseFormButtonBor onClick={handleDeleteButton}>
                    <a href="#">Удалить задачу</a>
                  </BrowseFormButtonBor>
                </ButtonBrowseGroup>
                <BrowseFormButtonBg>
                  <Link to={AppRoutes.MAIN}>Закрыть</Link>
                </BrowseFormButtonBg>
              </ButtonBrowse>
            )}

            {isEditActive && <ButtonBrowse className="_hide">
              <ButtonBrowseGroup>
                <BrowseFormButtonBg>
                  <a href="#">Сохранить</a>
                </BrowseFormButtonBg>
                <BrowseFormButtonBor>
                  <a href="#">Отменить</a>
                </BrowseFormButtonBor>
                <BrowseFormButtonBor id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </BrowseFormButtonBor>
              </ButtonBrowseGroup>
              <BrowseFormButtonBg>
                <Link to={AppRoutes.MAIN}>Закрыть</Link>
              </BrowseFormButtonBg>
            </ButtonBrowse>}
            
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopBrowse>
  );
}

PopBrowse.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default PopBrowse;
