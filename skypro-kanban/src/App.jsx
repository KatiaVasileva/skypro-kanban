import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import { cardList } from "./data";

function App() {
  const [cards, setCards] = useState(cardList);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Новая задача",
      date: "08.06.2024",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  return (
    <>
      <div className="wrapper">
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header onCardAdd={addCard} />

        <Main cards={cards} />
      </div>
    </>
  );
}

export default App;
