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

// eslint-disable-next-line react/prop-types
function Theme({ isActive, topic, onClick }) {
  return (
    <>
      {isActive ? (
        <S.ActiveCategoryTheme
          $themeColor={colors.get(topic)}
          onClick={onClick}
        >
          <S.CategoryThemeName>{topic}</S.CategoryThemeName>
        </S.ActiveCategoryTheme>
      ) : (
        <S.CategoryTheme $themeColor={colors.get(topic)} onClick={onClick}>
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddCardButton = async () => {
    const newTasks = await addTask({
      title: inputHandler(formData.title, "Новая задача"),
      topic: inputHandler(formData.topic, "Research"),
      status: inputHandler(formData.status, "Нужно сделать"),
      description: inputHandler(formData.description, " "),
      date: inputHandler(formData.date, Date.now()),
      token: user.token,
    });
    setTasks(newTasks.tasks);
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
                dateEnd={"Выберите срок исполнения."}
                dateControl={""}
                onChange={handleInputChange}
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
                    handleInputChange;
                  }}
                  name="topic"
                  value="Web Design"
                />
                <Theme
                  isActive={activeIndex === 1}
                  topic="Research"
                  onClick={() => {
                    setActiveIndex(1);
                    handleInputChange;
                  }}
                  name="topic"
                  value="Research"
                />
                <Theme
                  isActive={activeIndex === 2}
                  topic="Copywriting"
                  onClick={() => {
                    setActiveIndex(2);
                    handleInputChange;
                  }}
                  name="topic"
                  value="Copywriting" 
                />
              </S.CategoriesTheme>
            </S.Categories>
            <CreateButton id="btnCreate" onClick={handleAddCardButton}>
              Создать задачу
            </CreateButton>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopNewCard>
  );
}

export default PopNewCard;
