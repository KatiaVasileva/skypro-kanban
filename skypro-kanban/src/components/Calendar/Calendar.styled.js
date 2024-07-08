import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md + "px"}) {
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    padding: 0;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    padding: 0;
  }
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavActionImage = styled.svg`
  fill: #94a6be;
`;

export const NavAction = styled(NavActions)`
  width: 18px;
  height: 25px;
  cursor: pointer;
  justify-content: center;

  ${NavActionImage}
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDays = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const WorkDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    font-size: 14px;
  }
`;

export const WeekendDayName = styled(WorkDayName)``;

export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    width: 344px;
    height: auto;
    justify-content: space-around;
  }
`;

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 60%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CellDay = styled(Cell)`
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;

export const OtherMonth = styled(CellDay)`
  opacity: 0;
`;

export const Weekend = styled(CellDay)``;

export const CurrentDay = styled(CellDay)`
  font-weight: 700;
`;

export const ActiveDay = styled(Cell)`
  background-color: #94a6be;
  color: #ffffff;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    padding: 0;
  }
`;

export const CalendarPeriodDate = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
  }
  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    font-size: 14px;
  }
`;
