import Card from "../Card/Card";
import { statusList, cardList } from "../../data";
import Column from "../Column/Column";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column key={status} column={"column"} columnTitle={status}>
                {cardList.filter((card) => card.status === status).map((card) => (
                  <Card key={card.id} card={card} />
                ))}
                {/* <Card theme={themes.orange} />
                <Card theme={themes.green} />
                <Card theme={themes.orange} />
                <Card theme={themes.purple} />
                <Card theme={themes.orange} /> */}
              </Column>
            ))}
            {/* <Column column={"column"} columnTitle={"Без статуса"}>
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
            </Column> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
