import { Container } from "../../styles/Common.styled";
import * as S from "./Loader.styled";

function Loader() {
  return (
    <Container>
      <S.Loader>Данные загружаются...</S.Loader>
    </Container>
  );
}

export default Loader;
