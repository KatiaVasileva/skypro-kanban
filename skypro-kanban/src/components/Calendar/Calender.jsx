import PropTypes from "prop-types";
import * as S from "./Calendar.styled";
import CalendarDayPicker from "./CalendarDayPicker";

function Calendar({ dateEnd, dateControl, formData, setFormData }) {
  return (
    <S.Calendar>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <CalendarDayPicker
          dateEnd={dateEnd}
          dateControl={dateControl}
          formData={formData}
          setFormData={setFormData}
        />
      </S.CalendarBlock>
    </S.Calendar>
  );
}

Calendar.propTypes = {
  dateEnd: PropTypes.string.isRequired,
  dateControl: PropTypes.string.isRequired,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default Calendar;
