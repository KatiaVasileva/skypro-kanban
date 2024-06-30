import { useState, useEffect } from "react";
import { ErrorMessage, Wrapper } from "../styles/Common.styled";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { addTask, getTasks } from "../api";
import { inputHandler } from "../lib/helpers";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [getTasksError, setGetTasksError] = useState(false);

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
    getTasks()
      .then((tasks) => {
        setIsLoading(false);
        setTasks(tasks.tasks);
      })
      .catch(() => {
        setGetTasksError("Не удалось загрузить данные, попробуйте позже.");
      });
  }, []);

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
