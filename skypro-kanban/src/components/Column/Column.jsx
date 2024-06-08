import PropTypes from "prop-types";
import Card from "../Card/Card";

function Column({ column, columnTitle, cards }) {
  return (
    <div className={"main__column " + column}>
      <div className="column__title">
        <p>{columnTitle}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

Column.propTypes = {
  column: PropTypes.string.isRequired,
  columnTitle: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

export default Column;
