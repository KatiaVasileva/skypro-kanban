import { useState, useEffect } from "react";
import { cardList } from "../lib/data";
import { Wrapper } from "../styles/Common.styled";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";

export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      topic: "Web Design",
      title: "Новая задача",
      date: "08.06.2024",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
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

        <Header onCardAdd={addCard} />

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
