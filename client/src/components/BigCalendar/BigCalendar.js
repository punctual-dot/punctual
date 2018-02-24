import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import API from "../../utils/API";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./BigCalendar.css";

BigCalendar.momentLocalizer(moment);

let userId = window.location.pathname.replace("/profile/", "");

class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            myevents: []
            };
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser(userId);
    }

    loadUser = id => {
        API.getUser(userId)
        .then(res =>
            this.setState({user: res.data,myevents: [
                    {
                        title: "Last Month's Period",
                        allDay: true,
                        start: moment(res.data.firstdayofcycle).add(1, "day"),
                        end: moment(res.data.lastdateoflastperiod).add(1, "day")
                    },
                    {
                        title: "Next Period, Maybe?",
                        allDay: true,
                        start: moment(res.data.lastdateoflastperiod)
                        .subtract(res.data.lengthofperiod, "day")
                        .add(res.data.lengthofcycle, "day")
                        .add(1, "day"),
                        end: moment(res.data.lastdateoflastperiod)
                        .subtract(res.data.lengthofperiod, "day")
                        .add(res.data.lengthofcycle, "day")
                        .add(res.data.lengthofperiod, "day")
                    }
                ]
            }))
        .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <BigCalendar
                    events={this.state.myevents}
                    step={30}
                    showMultiDayTimes
                    onSelectEvent={event => alert(event.title)}
                    Components={{ event: Event }}
                    views={["month", "week"]}
                />
            </div>
        );
    }
}

export default MyCalendar;
