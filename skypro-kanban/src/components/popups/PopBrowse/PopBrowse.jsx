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
import { removeTask, updateTask } from "../../../api";
import { useUserContext } from "../../../hooks/useUserContext";
import { useState } from "react";
import { statusList } from "../../../lib/data";

function Status({ isStatusActive, statusTheme, onClick }) {
  return (
    <>
      {isStatusActive ? (
        <S.StatusThemeGray onClick={onClick}>
          <S.StatusThemeTextGray>{statusTheme}</S.StatusThemeTextGray>
        </S.StatusThemeGray>
      ) : (
        <S.StatusTheme onClick={onClick}>
          <S.StatusThemeText>{statusTheme}</S.StatusThemeText>
        </S.StatusTheme>
      )}
    </>
  );
}

function PopBrowse({ cardId }) {
  const { user } = useUserContext();
  const { tasks, setTasks } = useTaskContext();
  const navigate = useNavigate();
  const [isEditActive, setIsEditActive] = useState(false);
  const [isReadonly, setIsReadonly] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);

  const task = tasks.filter((task) => task._id === cardId);

  const [formData, setFormData] = useState({
    title: task[0].title,
    topic: task[0].topic,
    status: task[0].status,
    description: task[0].description,
    date: task[0].date,
  });

  const [dateControl, setDateControl] = useState(
    format(task[0].date, "dd.MM.yy")
  );
  const [dateEnd, setDateEnd] = useState("Срок исполнения: ");

  const handleEditButton = () => {
    setStatusIndex(statusList.indexOf(task[0].status));
    setIsEditActive(true);
    setIsReadonly(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveButton = async () => {
    const newTasks = await updateTask({
      title: formData.title,
      topic: formData.topic,
      status: formData.status,
      description: formData.description,
      date: formData.date,
      token: user.token,
      id: cardId,
    });
    setTasks(newTasks.tasks);
    navigate(AppRoutes.MAIN);
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
              <S.StatusTitle>Статус</S.StatusTitle>
              {!isEditActive && (
                <S.StatusThemes>
                  <S.StatusThemeGray>
                    <S.StatusThemeTextGray>
                      {task[0].status}
                    </S.StatusThemeTextGray>
                  </S.StatusThemeGray>
                </S.StatusThemes>
              )}
              {isEditActive && (
                <S.StatusThemes>
                  <Status
                    isStatusActive={statusIndex === 0}
                    statusTheme="Без статуса"
                    onClick={() => {
                      setStatusIndex(0);
                      setFormData({
                        ...formData,
                        ["status"]: "Без статуса",
                      });
                    }}
                  />
                  <Status
                    isStatusActive={statusIndex === 1}
                    statusTheme="Нужно сделать"
                    onClick={() => {
                      setStatusIndex(1);
                      setFormData({
                        ...formData,
                        ["status"]: "Нужно сделать",
                      });
                    }}
                  />
                  <Status
                    isStatusActive={statusIndex === 2}
                    statusTheme="В работе"
                    onClick={() => {
                      setStatusIndex(2);
                      setFormData({
                        ...formData,
                        ["status"]: "В работе",
                      });
                    }}
                  />
                  <Status
                    isStatusActive={statusIndex === 3}
                    statusTheme="Тестирование"
                    onClick={() => {
                      setStatusIndex(3);
                      setFormData({
                        ...formData,
                        ["status"]: "Тестирование",
                      });
                    }}
                  />
                  <Status
                    isStatusActive={statusIndex === 4}
                    statusTheme="Готово"
                    onClick={() => {
                      setStatusIndex(4);
                      setFormData({
                        ...formData,
                        ["status"]: "Готово",
                      });
                    }}
                  />
                </S.StatusThemes>
              )}
            </S.Status>

            <S.Wrap>
              <S.Form id="formBrowseCard" action="#">
                <S.FormBlock>
                  <S.FormBlockTitle htmlFor="textArea01">
                    Описание задачи
                  </S.FormBlockTitle>
                  <S.FormTextarea
                    name="description"
                    defaultValue={task[0].description}
                    id="textArea01"
                    readOnly={isReadonly}
                    placeholder="Введите описание задачи..."
                    onChange={handleInputChange}
                  >
                  </S.FormTextarea>
                </S.FormBlock>
              </S.Form>

              {!isEditActive && (
                <Calendar dateEnd={dateEnd} dateControl={dateControl} />
              )}
              {isEditActive && (
                <Calendar
                  dateEnd={dateEnd}
                  setDateEnd={setDateEnd}
                  dateControl={dateControl}
                  setDateControl={setDateControl}
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
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

            {isEditActive && (
              <ButtonBrowse className="_hide">
                <ButtonBrowseGroup>
                  <BrowseFormButtonBg onClick={handleSaveButton}>
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
              </ButtonBrowse>
            )}
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopBrowse>
  );
}

Status.propTypes = {
  isStatusActive: PropTypes.bool.isRequired,
  statusTheme: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

PopBrowse.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default PopBrowse;
