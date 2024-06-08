// import Card from "../Card/Card";
import { statusList, cardList } from "../../data";
import Column from "../Column/Column";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                column={"column"}
                columnTitle={status}
                cards={cardList.filter((card) => card.status === status)}
              ></Column>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
