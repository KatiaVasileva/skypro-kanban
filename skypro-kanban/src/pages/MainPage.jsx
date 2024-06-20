import { useState, useEffect } from "react";
import { cardList } from "../lib/data";
import { GlobalStyle } from "../styles/Global.styled";
import { Wrapper } from "../styles/Common.styled";
import PopExit from "../components/popups/PopExit/PopExit";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";

export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header onCardAdd={addCard} />

        {isLoading ? <Loader /> : <Main cards={cards} />}
      </Wrapper>
    </>
  );
}
