import Card from "../Card/Card";
import { themes } from "../../data";
import Column from "../Column/Column";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column column={"column"} columnTitle={"Без статуса"}>
              <Card theme={themes.orange} />
              <Card theme={themes.green} />
              <Card theme={themes.orange} />
              <Card theme={themes.purple} />
              <Card theme={themes.orange} />
            </Column>

            <Column column={""} columnTitle={"Нужно сделать"}>
              <Card theme={themes.green} />
            </Column>

            <Column column={""} columnTitle={"В работе"}>
              <Card theme={themes.green} />
              <Card theme={themes.purple} />
              <Card theme={themes.orange} />
            </Column>

            <Column column={""} columnTitle={"Тестирование"}>
              <Card theme={themes.green} />
            </Column>

            <Column column={""} columnTitle={"Готово"}>
              <Card theme={themes.green} />
            </Column>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
