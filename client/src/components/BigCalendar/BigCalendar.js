import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import API from "../../utils/API";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./BigCalendar.css";

BigCalendar.momentLocalizer(moment);

// 1- Import User Info from user db
// 2- Pull (inital)first day of last period, length of period, length of cycle
// 3- Show Event of that above
// 4- Show subsequent periods moving foward based on calculations from 2
// 5- Add drop icon to each event

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
      symptoms: "Period",
      icon: "https://image.flaticon.com/icons/svg/150/150654.svg",
      allDay: true,
      start: new Date(2018, 0, 12),
      end: new Date(2018, 0, 17)
    },
    {
      id: 1,
      symptoms: "Period",
      icon: "https://image.flaticon.com/icons/svg/150/150654.svg",
      allDay: true,
      start: new Date(2018, 1, 12),
      end: new Date(2018, 1, 17)
    },
    {
      id: 1,
      symptoms: "Period",
      icon: "https://image.flaticon.com/icons/svg/150/150654.svg",
      allDay: true,
      start: new Date(2018, 2, 12),
      end: new Date(2018, 2, 17)
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

// let userId = window.location.pathname.replace('/profile/','');

// class Message extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             user:''
//         }
//         this.loadUser = this.loadUser.bind(this)
//     };

//     componentDidMount() {
//         this.loadUser(userId);

//     }

//     loadUser = id => {
//         API.getUser(userId)
//         .then(res =>
//             this.setState({user: res.data}, console.log(res.data)))
//         .catch(err => console.log(err))
//     }
//     render() {
//         return (
//             <div>
//                 <div id="result">
//                     Hello, {this.state.user.name}. Your last date of period was on {moment.utc(this.state.user.lastdateoflastperiod).format("dddd, MMMM Do YYYY")}. Since your cycle lenght is about {this.state.user.lengthofcycle} days. We predict that your first day of next period will come on {moment.utc(this.state.user.lastdateoflastperiod).subtract(this.state.user.lengthofperiod, "day").add(this.state.user.lengthofcycle, "day").format("dddd, MMMM Do YYYY")}
//              </div>
//             </div>
//         )
//     }
// }
// export default Message;
