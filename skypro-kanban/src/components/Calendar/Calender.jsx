import PropTypes from "prop-types";
import * as S from "./Calendar.styled";

function Calendar({ dateEnd, dateControl }) {
  return (
    <S.Calendar>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction data-action="prev">
              <S.NavActionImage
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </S.NavActionImage>
            </S.NavAction>
            <S.NavAction data-action="next">
              <S.NavActionImage
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </S.NavActionImage>
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.CalendarDays>
            <S.WorkDayName>пн</S.WorkDayName>
            <S.WorkDayName>вт</S.WorkDayName>
            <S.WorkDayName>ср</S.WorkDayName>
            <S.WorkDayName>чт</S.WorkDayName>
            <S.WorkDayName>пт</S.WorkDayName>
            <S.WeekendDayName>сб</S.WeekendDayName>
            <S.WeekendDayName>вс</S.WeekendDayName>
          </S.CalendarDays>
          <S.Cells>
            <S.OtherMonth>28</S.OtherMonth>
            <S.OtherMonth>29</S.OtherMonth>
            <S.OtherMonth>30</S.OtherMonth>
            <S.CellDay>31</S.CellDay>
            <S.CellDay>1</S.CellDay>
            <S.Weekend>2</S.Weekend>
            <S.Weekend>3</S.Weekend>
            <S.CellDay>4</S.CellDay>
            <S.CellDay>5</S.CellDay>
            <S.CellDay>6</S.CellDay>
            <S.CellDay>7</S.CellDay>
            <S.CurrentDay>8</S.CurrentDay>
            <S.ActiveDay>9</S.ActiveDay>
            <S.Weekend>10</S.Weekend>
            <S.CellDay>11</S.CellDay>
            <S.CellDay>12</S.CellDay>
            <S.CellDay>13</S.CellDay>
            <S.CellDay>14</S.CellDay>
            <S.CellDay>15</S.CellDay>
            <S.Weekend>16</S.Weekend>
            <S.Weekend>17</S.Weekend>
            <S.CellDay>18</S.CellDay>
            <S.CellDay>19</S.CellDay>
            <S.CellDay>20</S.CellDay>
            <S.CellDay>21</S.CellDay>
            <S.CellDay>22</S.CellDay>
            <S.Weekend>23</S.Weekend>
            <S.Weekend>24</S.Weekend>
            <S.CellDay>25</S.CellDay>
            <S.CellDay>26</S.CellDay>
            <S.CellDay>27</S.CellDay>
            <S.CellDay>28</S.CellDay>
            <S.CellDay>29</S.CellDay>
            <S.Weekend>30</S.Weekend>
            <S.OtherMonth>
              <S.Weekend>1</S.Weekend>
            </S.OtherMonth>
          </S.Cells>
        </S.CalendarContent>
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
