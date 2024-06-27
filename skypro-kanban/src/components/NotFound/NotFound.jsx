import { AppRoutes } from "../../lib/appRoutes";
import * as S from "./NotFound.styled";

export default function NotFound() {
  return (
    <>
      <S.NotFoundTitle>Страница не найдена</S.NotFoundTitle>
      <S.LinkBlock>
        <S.MainPageLink to={AppRoutes.MAIN}>На главную</S.MainPageLink>
      </S.LinkBlock>
    </>
  );
}
