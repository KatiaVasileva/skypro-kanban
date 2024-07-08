import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const CalendarBlock = styled(DayPicker)`
  font-size: 10px;
  color: #94a6be;
  --rdp-cell-size: 24px;
  --rdp-caption-font-size: 14px;
  --rdp-accent-color: #94a6be;
  --rdp-background-color: #eaeef6;
  --rdp-selected-color: #ffffff;

  @media screen and (max-width: ${breakpoints.lg + "px"}) {
    font-size: 14px;
    --rdp-cell-size: 42px;
  }
`;

