import PropTypes from "prop-types";
import * as S from "./Card.styled";
import { colors } from "../../lib/topicStyles.js";
import { CardButton, CardButtonDot } from "../../styles/Button.styled.js";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <S.CardsItem>
      <S.Card>
        <S.CardGroup>
          <S.CardTheme $themeColor={colors.get(card.topic)}>
            <S.ThemeText>{card.topic}</S.ThemeText>
          </S.CardTheme>
          <Link to={"/card/" + card.id}>
            <CardButton>
              <CardButtonDot />
              <CardButtonDot />
              <CardButtonDot />
            </CardButton>
          </Link>
        </S.CardGroup>
        <S.CardContent>
          <a href="" target="_blank">
            <S.CardTitle>{card.title}</S.CardTitle>
          </a>
          <S.CardDate>
            <S.DateImage
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </S.DateImage>
            <S.Date>{card.date}</S.Date>
          </S.CardDate>
        </S.CardContent>
      </S.Card>
    </S.CardsItem>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
