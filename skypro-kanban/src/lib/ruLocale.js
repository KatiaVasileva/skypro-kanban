import formatDistance from "date-fns/locale/ru/_lib/formatDistance";
import formatRelative from "date-fns/locale/ru/_lib/formatRelative";
import localize from "date-fns/locale/ru/_lib/localize";
import match from "date-fns/locale/ru/_lib/match";
import formatLong from "date-fns/locale/ru/_lib/formatLong";
import buildLocalizeFn from 'date-fns/locale/_lib/buildLocalizeFn'

const monthValues = {
  wide: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ]
};

const ruLocale = {
  formatDistance,
  formatLong,
  formatRelative,
  localize: {
    ...localize,
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide",
      defaultFormattingWidth: "wide"
    })
  },
  match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};

export default ruLocale;