import { useState, useEffect } from "react";
import { Wrapper } from "../styles/Common.styled";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { addTask, getTasks } from "../api";
import { inputHandler } from "../lib/helpers";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const newCard = {
    title: " ",
    topic: " ",
    status: "Тестирование",
    description: "Подробное описание задачи",
    date: "",
  }

  const handleAddCardButton = async () => {
    const newTasks = await addTask({
      title: inputHandler(newCard.title, "Новая задача"),
      topic: inputHandler(newCard.topic, "Research"),
      status: inputHandler(newCard.status, "Без статуса"),
      description: inputHandler(newCard.description, " "),
      date: inputHandler(newCard.date, Date.now()),
    });
    setTasks(newTasks.tasks);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks.tasks);
    });
  }, []);

  return (
    <>
      <Wrapper>
        <PopNewCard />

        <Header onCardAdd={handleAddCardButton} />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Main tasks={tasks}></Main>
            <Outlet />
          </>
        )}
      </Wrapper>
    </>
  );
}
