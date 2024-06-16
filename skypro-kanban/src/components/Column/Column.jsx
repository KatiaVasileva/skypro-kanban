import PropTypes from "prop-types";
import Card from "../Card/Card";
import * as S from "./Column.styled";
import { Cards } from "../Card/Card.styled";

function Column({ columnTitle, cards }) {
  return (
    <S.Column>
      <S.ColumnTitle>
        <p>{columnTitle}</p>
      </S.ColumnTitle>
      <Cards>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Cards>
    </S.Column>
  );
}

Column.propTypes = {
  columnTitle: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

export default Column;
