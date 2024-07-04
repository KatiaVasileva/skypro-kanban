import { useState, useEffect } from "react";
import { ErrorMessage, Wrapper } from "../styles/Common.styled";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { addTask, getTasks } from "../api";
import { inputHandler } from "../lib/helpers";
import { useUserContext } from "../hooks/useUserContext";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [getTasksError, setGetTasksError] = useState(false);
  const { user } = useUserContext();

  const newCard = {
    title: " ",
    topic: " ",
    status: " ",
    description: "Подробное описание задачи",
    date: "",
  };

  const handleAddCardButton = async () => {
    setGetTasksError(false);
    const newTasks = await addTask({
      title: inputHandler(newCard.title, "Новая задача"),
      topic: inputHandler(newCard.topic, "Research"),
      status: inputHandler(newCard.status, "Без статуса"),
      description: inputHandler(newCard.description, " "),
      date: inputHandler(newCard.date, Date.now()),
      token: user.token,
    });
    setTasks(newTasks.tasks);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getTasks({ token: user.token })
      .then((tasks) => {
        setIsLoading(false);
        setTasks(tasks.tasks);
      })
      .catch(() => {
        setGetTasksError("Не удалось загрузить данные, попробуйте позже.");
      });
  }, [user.token]);

  return (
    <>
      <Wrapper>
        <PopNewCard />

        <Header onCardAdd={handleAddCardButton}></Header>

        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            {getTasksError && <ErrorMessage>{getTasksError}</ErrorMessage>}
            {!getTasksError && (
              <>
                <Main tasks={tasks}></Main>
                <Outlet />
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
}
