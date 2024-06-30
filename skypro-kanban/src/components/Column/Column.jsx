import PropTypes from "prop-types";
import Card from "../Card/Card";
import * as S from "./Column.styled";
import { Cards } from "../Card/Card.styled";

function Column({ columnTitle, tasks }) {
  return (
    <S.Column>
      <S.ColumnTitle>
        <S.ColumnTitleText>{columnTitle}</S.ColumnTitleText>
      </S.ColumnTitle>
      <Cards>
        {tasks.map((task) => (
          <Card key={task._id} task={task} />
        ))}
      </Cards>
    </S.Column>
  );
}

Column.propTypes = {
  columnTitle: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default Column;
