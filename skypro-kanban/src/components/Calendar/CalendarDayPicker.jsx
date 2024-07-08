import { useState } from "react";
import { default as defaultStyles } from "react-day-picker/dist/style.module.css";
import { CalendarBlock } from "./CalendarDayPicker.styled";
import { ru } from "date-fns/locale";
import { CalendarPeriod, CalendarPeriodDate } from "./Calendar.styled";
import PropTypes from "prop-types";

const CalendarDayPicker = ({ dateEnd, dateControl, formData, setFormData }) => {

  const [month, setMonth] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState();

  const handleDayPickerSelect = (date) => {
    setSelectedDate(date);
    setMonth(date);
    setFormData({
      ...formData,
      date: date,
    });
  };

  return (
    <CalendarBlock
      mode="single"
      classNames={defaultStyles}
      locale={ru}
      month={month}
      onMonthChange={setMonth}
      selected={selectedDate}
      onSelect={handleDayPickerSelect}
      footer={
        <CalendarPeriod>
          <CalendarPeriodDate aria-live="assertive" aria-atomic="true">
            {dateEnd} <span>{dateControl}</span>
          </CalendarPeriodDate>
        </CalendarPeriod>
      }
    >
    </CalendarBlock>
  );
};

CalendarDayPicker.propTypes = {
  dateEnd: PropTypes.string.isRequired,
  dateControl: PropTypes.string.isRequired,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
}

export default CalendarDayPicker;
