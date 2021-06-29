import React from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import { useState, useEffect } from "react";
import "react-day-picker/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { allIneligiblePeriod } from "../../modules/ineligibleperiod";

const getInitialState = () => {
  return {
    from: undefined,
    to: undefined,
  };
};
function Ineligibleperiod(props) {
  const dispatch = useDispatch();
  const { ineligibleperiod } = useSelector((state) => state);
  const [counter, setState] = useState(new Date());
  const [disableDateRange, setDisableDateRange] = useState([]);
  useEffect(() => {
    dispatch(allIneligiblePeriod());
    fetchDates();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, counter);
    setState(range);
  };

  const handleResetClick = () => {
    setState(getInitialState());
  };
  const fetchDates = async () => {
    const dates = await ineligibleperiod;
    const disabledDates = dates.map((date) => {
      const [startYear, startMonth, startDay] = date.start
        .replace("T", "-")
        .split("-");
      const [endYear, endMonth, endDay] = date.end.replace("T", "-").split("-");
      return {
        before: new Date(endYear, endMonth - 1, endDay), // end
        after: new Date(startYear, startMonth - 1, startDay), // start
      };
    });
    setDisableDateRange(disabledDates);
  };
  setTimeout(() => {
    fetchDates();
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      fetchDates();
    }, 10);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { from, to } = counter;
  const modifiers = { start: from, end: to };

  return (
    <div className="RangeExample">
      <p>
        {!from && !to && ""}
        {from && !to && ""}
        {from &&
          to &&
          `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
        {from && to && (
          <button className="link" onClick={handleResetClick}>
            Reset
          </button>
        )}
      </p>

      <DayPicker
        initialMonth={new Date()}
        disabledDays={disableDateRange}
        className="Selectable"
        numberOfMonths={props.numberOfMonths}
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={handleDayClick}
      />
      <Helmet>
        <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
      </Helmet>
    </div>
  );
}

export default Ineligibleperiod;
