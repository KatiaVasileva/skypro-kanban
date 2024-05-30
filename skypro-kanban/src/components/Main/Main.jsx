import Card from "../Card/Card";
import { themes } from "../../data";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <div className="main__column column">
              <div className="column__title">
                <p>Без статуса</p>
              </div>
              <div className="cards">
                <Card theme={themes.orange} />
                <Card theme={themes.green} />
                <Card theme={themes.orange} />
                <Card theme={themes.purple} />
                <Card theme={themes.orange} />
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>Нужно сделать</p>
              </div>
              <div className="cards">
                <Card theme={themes.green} />
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>В работе</p>
              </div>
              <div className="cards">
                <Card theme={themes.green} />
                <Card theme={themes.purple} />
                <Card theme={themes.orange} />
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>Тестирование</p>
              </div>
              <div className="cards">
                <Card theme={themes.green} />
              </div>
            </div>
            <div className="main__column">
              <div className="column__title">
                <p>Готово</p>
              </div>
              <div className="cards">
                <Card theme={themes.green} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
