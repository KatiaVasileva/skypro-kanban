import { statusList } from "../../data";
import Column from "../Column/Column";
import PropTypes from "prop-types";

function Main({ cards }) {
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
                cards={cards.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Main;
