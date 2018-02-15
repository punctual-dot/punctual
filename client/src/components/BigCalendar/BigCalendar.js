import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./BigCalendar.css"

BigCalendar.momentLocalizer(moment);

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      <div style={{ marginRight: "10px" }}>
        {event.mood && ":  " + event.mood}
      </div>
      <img src={event.icon} style={{ width: "20px", height: "20px" }} alt="icon" />
    </span>
  );
}

const MyCalendar = props => {
  const MyEvents = [
    {
      id: 0,
      title: "Title",
      mood: "Energetic",
      icon:
        "https://www.iconexperience.com/_img/v_collection_png/512x512/shadow/heart.png",
      allDay: true,
      start: new Date(2018, 1, 3),
      end: new Date(2018, 1, 5)
    }
  ];
  return (
    <div>
      <BigCalendar
        events={MyEvents}
        step={30}
        showMultiDayTimes
        components={{ event: Event }}
      />
    </div>
  );
};

export default MyCalendar;
