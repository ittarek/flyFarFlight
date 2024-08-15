import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import "./sharedComponentCss.css"
import { MdPlayArrow } from "react-icons/md";
import { BiSolidLeftArrow } from "react-icons/bi";
const DateFigure = () => {
  const [startDate, setStartDate] = useState(new Date());

  const range = (start, end, step) => {
    const length = Math.floor((end - start) / step) + 1;
    return Array.from({ length }, (v, i) => start + i * step);
  };
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
 const filterPassedDates = date => {
   const today = new Date();
   return date >= today;
 };
  return (
    <DatePicker
      className="custom_datePicker"
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="datePicker">
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <BiSolidLeftArrow />
          </button>

          <div>
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            <MdPlayArrow />
          </button>
        </div>
      )}
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat="d  MMM  yyyy"
      minDate={new Date()}
      filterDate={filterPassedDates}
    />
  );
};

export default DateFigure;
