import PropTypes from "prop-types";
import * as S from "./Calendar.styled";
import CalendarDayPicker from "./CalendarDayPicker";

function Calendar({ dateEnd, dateControl }) {
  return (
    <S.Calendar>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <CalendarDayPicker/>
        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <S.CalendarPeriod>
          <S.CalendarPeriodDate>
            {dateEnd} <span>{dateControl}</span>
          </S.CalendarPeriodDate>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.Calendar>
  );
}

Calendar.propTypes = {
  dateEnd: PropTypes.string.isRequired,
  dateControl: PropTypes.any.isRequired,
};

export default Calendar;
