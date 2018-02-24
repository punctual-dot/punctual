import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from "../../components/BigCalendar/BigCalendar.js";
import React, { Component } from "react";

class CalendarPage extends Component {
  render() {
    return (
      <div>
            <BigCalendar />
      </div>
    );
  }
}
export default CalendarPage;
