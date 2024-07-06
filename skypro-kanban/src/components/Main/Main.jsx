import { statusList } from "../../lib/data";
import Column from "../Column/Column";
import PropTypes from "prop-types";
import * as S from "./Main.styled";
import { Container } from "../../styles/Common.styled";

function Main({ tasks }) {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                columnTitle={status}
                tasks={tasks.filter((task) => task.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

Main.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Main;
