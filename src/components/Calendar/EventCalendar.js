import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allRequests } from "../../modules/requests";

const EventCalendar = () => {
  const dispatch = useDispatch();
  const [disableDateRange, setDisableDateRange] = useState([]);
  const { requests } = useSelector((state) => state);
  let request = requests.filter(
    (z) => z.state !== "Pending" && z.state !== "Denied"
  );

  const fetchDates = () => {
    const dates =  request;
    const Events = dates.map((date) => {
      const start = date.periodStart;
      const end = date.periodEnd;

      const user = date.ownerName;
      const ColorCode =
        "rgb(" +
        Math.floor(Math.random() * 100) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";
      return {
        start: start, // start
        end: end, // end
        title:   user,
        backgroundColor: ColorCode,
      };
    });
    setDisableDateRange(Events);
  };

  useEffect(() => {
    dispatch(allRequests());
    fetchDates()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (

    <div>
      <FullCalendar
        defaultView="daygridMonth"
        plugins={[dayGridPlugin]}
        events={disableDateRange}
      />
    </div>
  );
};

export default EventCalendar;
