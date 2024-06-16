import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import { cardList } from "./data";
import { GlobalStyle } from "./components/Global/Global.styled";

function App() {
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
      <div className="wrapper">
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header onCardAdd={addCard} />

        {isLoading ? (
          <div className="loader">Данные загружаются...</div>
        ) : (
          <Main cards={cards} />
        )}
      </div>
    </>
  );
}

export default App;
