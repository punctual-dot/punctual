import React, {Component} from "react";
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

// function Event({ event }) {
//   return (
//     <span>
//       <div style={{ marginRight: "10px" }}>
//         {event.symptoms && ":  " + event.symptoms}
//       </div>
//       <img
//         src={event.icon}
//         style={{ width: "20px", height: "20px" }}
//         alt="icon"
//       />
//     </span>
//   );
// }

let userId = window.location.pathname.replace('/profile/','');

class MyCalendar extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            myevents: []
        }
        this.loadUser = this.loadUser.bind(this)
    };

    componentDidMount () {
        this.loadUser(userId);
    }  

    loadUser = id => {
        API.getUser(userId)
        .then(res =>
            this.setState({user: res.data, myevents: [
                {
                    //symptoms: "Period",
                    //icon: "https://image.flaticon.com/icons/svg/150/150654.svg",
                    allDay: true,
                    start: moment(res.data.firstdayofcycle).add(1, "day"),
                    end: moment(res.data.lastdateoflastperiod).add(1, "day")
                },
                {
                    allDay: true,
                    start: moment(res.data.lastdateoflastperiod).subtract(res.data.lengthofperiod, "day").add(res.data.lengthofcycle, "day").add(1, "day"),
                    end: moment(res.data.lastdateoflastperiod).subtract(res.data.lengthofperiod, "day").add(res.data.lengthofcycle, "day").add(res.data.lengthofperiod, "day")
                }
            ]}, console.log(res.data)))
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                <BigCalendar
                    events={this.state.myevents}
                    step={30}
                    showMultiDayTimes
                    //components={{ event: Event }}
                />
            </div>
        );
    };
}

export default MyCalendar;
