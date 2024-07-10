import PropTypes from "prop-types";
import * as S from "./Calendar.styled";
import CalendarDayPicker from "./CalendarDayPicker";

function Calendar({ dateEnd, setDateEnd, dateControl, setDateControl, formData, setFormData }) {
  return (
    <S.Calendar>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <CalendarDayPicker
          dateEnd={dateEnd}
          setDateEnd={setDateEnd}
          dateControl={dateControl}
          setDateControl={setDateControl}
          formData={formData}
          setFormData={setFormData}
        />
      </S.CalendarBlock>
    </S.Calendar>
  );
}

Calendar.propTypes = {
  dateEnd: PropTypes.string.isRequired,
  setDateEnd: PropTypes.func,
  dateControl: PropTypes.string.isRequired,
  setDateControl: PropTypes.func,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default Calendar;
