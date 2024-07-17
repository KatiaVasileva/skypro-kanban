import Calendar from "../../Calendar/Calender";
import { AppRoutes } from "../../../lib/appRoutes";
import * as S from "./PopNewCard.styled";
import { CreateButton } from "../../../styles/Button.styled";
import { colors } from "../../../lib/topicStyles";
import { addTask } from "../../../api";
import { inputHandler } from "../../../lib/helpers";
import { useUserContext } from "../../../hooks/useUserContext";
import { useTaskContext } from "../../../hooks/useTaskContext";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../../styles/Common.styled";
import { useThemeContext } from "../../../hooks/useThemeContext";

function Theme({ isActive, topic, onClick }) {
  const { theme } = useThemeContext();
  const topicStyle = colors.get(topic);

  return (
    <>
      {isActive ? (
        <S.ActiveCategoryTheme
          $themeColor={theme === "light" ? topicStyle : topicStyle + "_dark"}
          onClick={onClick}
        >
          <S.CategoryThemeName topic="topic">{topic}</S.CategoryThemeName>
        </S.ActiveCategoryTheme>
      ) : (
        <S.CategoryTheme
          $themeColor={theme === "light" ? topicStyle : topicStyle + "_dark"}
          onClick={onClick}
        >
          <S.CategoryThemeName>{topic}</S.CategoryThemeName>
        </S.CategoryTheme>
      )}
    </>
  );
}

function PopNewCard() {
  const { user } = useUserContext();
  const { setTasks } = useTaskContext();
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    status: "",
    description: "",
    date: "",
  });
  const [activeIndex, setActiveIndex] = useState(1);
  const [addTaskError, setAddTaskError] = useState(false);
  const [dateEnd, setDateEnd] = useState("Выберите срок исполнения.");
  const [dateControl, setDateControl] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddCardButton = async () => {
    try {
      const newTasks = await addTask({
        title: inputHandler(formData.title, "Новая задача"),
        topic: inputHandler(formData.topic, "Research"),
        status: inputHandler(formData.status, "Без статуса"),
        description: inputHandler(formData.description, " "),
        date: inputHandler(formData.date, Date.now()),
        token: user.token,
      });
      setTasks(newTasks.tasks);
      navigate(AppRoutes.MAIN);
    } catch (error) {
      setAddTaskError(error.message);
    }
  };

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
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Subtitle htmlFor="textArea">Описание задачи</S.Subtitle>
                  <S.TaskDescriptionInput
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.TaskDescriptionInput>
                </S.FormBlock>
              </S.Form>

              <Calendar
                dateEnd={dateEnd}
                setDateEnd={setDateEnd}
                dateControl={dateControl}
                setDateControl={setDateControl}
                formData={formData}
                setFormData={setFormData}
              />
            </S.Wrap>
            <S.Categories>
              <S.CategoriesSubtitle>Категория</S.CategoriesSubtitle>
              <S.CategoriesTheme>
                <Theme
                  isActive={activeIndex === 0}
                  topic="Web Design"
                  onClick={() => {
                    setActiveIndex(0);
                    setFormData({
                      ...formData,
                      ["topic"]: "Web Design",
                    });
                  }}
                />
                <Theme
                  isActive={activeIndex === 1}
                  topic="Research"
                  onClick={() => {
                    setActiveIndex(1);
                    setFormData({
                      ...formData,
                      ["topic"]: "Research",
                    });
                  }}
                />
                <Theme
                  isActive={activeIndex === 2}
                  topic="Copywriting"
                  onClick={() => {
                    setActiveIndex(2);
                    setFormData({
                      ...formData,
                      ["topic"]: "Copywriting",
                    });
                  }}
                />
              </S.CategoriesTheme>
            </S.Categories>
            <ErrorMessage>{addTaskError}</ErrorMessage>
            <CreateButton id="btnCreate" onClick={handleAddCardButton}>
              Создать задачу
            </CreateButton>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopNewCard>
  );
}

Theme.propTypes = {
  isActive: PropTypes.bool.isRequired,
  topic: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PopNewCard;
