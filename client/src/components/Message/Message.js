import React, { Component } from "react";
import API from "../../utils/API"
import moment from "moment";

let userId = window.location.pathname.replace('/profile/','');

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:''
        }
        this.loadUser = this.loadUser.bind(this)
    };

    componentDidMount() {
        this.loadUser(userId);

    }

    loadUser = id => {
        API.getUser(userId)
        .then(res =>
            this.setState({user: res.data}, console.log(res.data)))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <div id="result">
                    Hello, {this.state.user.name}. Your last date of period was on {moment.utc(this.state.user.lastdateoflastperiod).format("dddd, MMMM Do YYYY")}. Since your cycle lenght is about {this.state.user.lengthofcycle} days. We predict that your first day of next period will come on {moment.utc(this.state.user.lastdateoflastperiod).subtract(this.state.user.lengthofperiod, "day").add(this.state.user.lengthofcycle, "day").format("dddd, MMMM Do YYYY")}
             </div>
            </div>
        )
    }
}
export default Message; 