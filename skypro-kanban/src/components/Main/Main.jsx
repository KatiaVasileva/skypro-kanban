import { statusList } from "../../lib/data";
import Column from "../Column/Column";
import PropTypes from "prop-types";
import * as S from "./Main.styled";
import { Container } from "../Common/Common.styled";

function Main({ cards }) {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                columnTitle={status}
                cards={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

Main.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Main;
