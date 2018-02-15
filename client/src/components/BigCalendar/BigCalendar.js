import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./BigCalendar.css";

BigCalendar.momentLocalizer(moment);

function Event({ event }) {
  return (
    <span>
      <div style={{ marginRight: "10px" }}>
        {event.symptoms && ":  " + event.symptoms}
      </div>
      <img
        src={event.icon}
        style={{ width: "20px", height: "20px" }}
        alt="icon"
      />
    </span>
  );
}

const MyCalendar = props => {
  const MyEvents = [
    {
      id: 0,
      symptoms: "Acne",
      icon:
        "https://cdn.iconscout.com/public/images/icon/premium/png-512/acne-face-pimples-heal-beauty-cosmetics-34f09b0cbda7b58d-512x512.png",
      allDay: true,
      start: new Date(2018, 1, 12),
      end: new Date(2018, 1, 12)
    },
    {
      id: 1,
      symptoms: "Period",
      icon: "https://image.flaticon.com/icons/svg/150/150654.svg",
      allDay: true,
      start: new Date(2018, 1, 11),
      end: new Date(2018, 1, 17)
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
