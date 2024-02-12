import {
  addMonths,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  isBefore,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useMemo, useState } from "react";
import { formatDate } from "./formatDate";
import { cc } from "./cc";
import "./Calendar.scss";
import { Link } from "react-router-dom";

function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const calendarDays = useMemo(() => {
    const firstWeekOfMonth = startOfWeek(startOfMonth(selectedMonth));
    const lastWeekOfMonth = endOfWeek(endOfMonth(selectedMonth));
    return eachDayOfInterval({
      start: firstWeekOfMonth,
      end: lastWeekOfMonth,
    });
  }, [selectedMonth]);

  return (
    <div className="container calendar">
      <div className="header">
        <button
          className="btn"
          onClick={() => {
            setSelectedMonth(new Date());
          }}
        >
          Today
        </button>
        <div>
          <button
            className="month-change-btn"
            onClick={(selectedMonth) => {
              setSelectedMonth((m) => subMonths(m, 1));
            }}
          >
            &lt;
          </button>
          <button
            className="month-change-btn"
            onClick={(selectedMonth) => {
              setSelectedMonth((m) => addMonths(m, 1));
            }}
          >
            &gt;
          </button>
        </div>
        <span className="month-title">
          {formatDate(selectedMonth, { month: "long", year: "numeric" })}
        </span>
      </div>
      <div className="days">
        {calendarDays.map((day, index) => (
          <CalendarDay
            key={day.getTime()}
            day={day}
            showWeekName={index < 7}
            selectedMonth={selectedMonth}
          />
        ))}
      </div>
      <div className="button-double">
        <Link to=".." relative="path">
          <button>Back</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}

function CalendarDay({ day, showWeekName, selectedMonth }) {
  return (
    <div
      className={cc(
        "day",
        !isSameMonth(day, selectedMonth) && "non-month-day",
        isBefore(endOfDay(day), new Date()) && "old-month-day"
      )}
    >
      <div className="day-header">
        {showWeekName && (
          <div className="week-name">
            {formatDate(day, { weekday: "long" })}
          </div>
        )}
        <div className={cc("day-number", isToday(day) && "today")}>
          {formatDate(day, { day: "numeric" })}
        </div>
      </div>

      {/*<button className="add-event-btn">+</button>
      
        <div className="events">
        <button className="all-day-event blue event">
          <div className="event-name">Short</div>
        </button>
        <button className="all-day-event green event">
          <div className="event-name">
            Long Event Name That Just Keeps Going
          </div>
        </button>
        <button className="event">
          <div className="color-dot blue"></div>
          <div className="event-time">7am</div>
          <div className="event-name">Event Name</div>
        </button>
  </div> */}
    </div>
  );
}

export default Calendar;
