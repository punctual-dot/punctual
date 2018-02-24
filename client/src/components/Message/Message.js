import React, { Component } from "react";
import API from "../../utils/API"
import moment from "moment";
import "./Message.css";

let userId = window.location.pathname.replace('/profile/','');

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            stage: '',
            dayincycle: ''
        }
        this.loadUser = this.loadUser.bind(this)
        this.determineCycleStage = this.determineCycleStage.bind(this)
        this.handleStageResult = this.handleStageResult.bind(this)
    };

    componentDidMount () {
        this.loadUser(userId);
    }  

    loadUser = id => {
        API.getUser(userId)
        .then(res =>
            this.setState({user: res.data}, this.determineCycleStage(res.data.firstdayofcycle, moment.utc())))
        .catch(err => console.log(err))
    }

    determineCycleStage = (firstdayofcycle,today) => {
        if (moment(firstdayofcycle).isSame(today, "day")) {
            this.setState ({stage: "one"})
        }
        else if (moment(firstdayofcycle).add(1, "day").isSame(today, "day")) {
            this.setState ({stage: "one"})
        }
        else if (moment(firstdayofcycle).add(2, "day").isSame(today, "day")){
            this.setState ({stage: "one"})
        }
        else if (moment(firstdayofcycle).add(3, "day").isSame(today, "day")){
            this.setState ({stage: "one"})
        }
        else if (moment(firstdayofcycle).add(4, "day").isSame(today, "day")){
            this.setState ({stage: "one"})
        }
        else if (moment(firstdayofcycle).add(5, "day").isSame(today, "day")){
            this.setState ({stage: "two"})
        }
        else if (moment(firstdayofcycle).add(6, "day").isSame(today, "day")){
            this.setState ({stage: "two"})
        }
        else if (moment(firstdayofcycle).add(7, "day").isSame(today, "day")) {
            this.setState ({stage: "two"})
        }
        else if (moment(firstdayofcycle).add(8, "day").isSame(today, "day")) {
            this.setState ({stage: "three"})
        }
        else if (moment(firstdayofcycle).add(9, "day").isSame(today, "day")){
            this.setState ({stage: "three"})
        }
        else if (moment(firstdayofcycle).add(10, "day").isSame(today, "day")) {
            this.setState ({stage: "three"})
        }
        else if (moment(firstdayofcycle).add(11, "day").isSame(today, "day")) {
            this.setState ({stage: "four"})
        }
        else if (moment(firstdayofcycle).add(12, "day").isSame(today, "day")) {
            this.setState ({stage: "four"})
        }
        else if (moment(firstdayofcycle).add(13, "day").isSame(today, "day")) {
            this.setState ({stage: "five"})
        }
        else if (moment(firstdayofcycle).add(14, "day").isSame(today, "day")) {
            this.setState ({stage: "five"})
        }
        else if (moment(firstdayofcycle).add(15, "day").isSame(today, "day")) {
            this.setState ({stage: "six"})
        }
        else if (moment(firstdayofcycle).add(16, "day").isSame(today, "day")){
            this.setState ({stage: "six"})
        }
        else if (moment(firstdayofcycle).add(17, "day").isSame(today, "day")) {
            this.setState ({stage: "six"})
        }
        else if (moment(firstdayofcycle).add(18, "day").isSame(today, "day")) {
            this.setState ({stage: "six"})
        }
        else if (moment(firstdayofcycle).add(19, "day").isSame(today, "day")) {
            this.setState ({stage: "seven"})
        }
        else if (moment(firstdayofcycle).add(20, "day").isSame(today, "day")) {
            this.setState ({stage: "seven"})
        }
        else if (moment(firstdayofcycle).add(21, "day").isSame(today, "day")) {
            this.setState ({stage: "seven"})
        }
        else if (moment(firstdayofcycle).add(22, "day").isSame(today, "day")) {
            this.setState ({stage: "eight"})
        }
        else if (moment(firstdayofcycle).add(23, "day").isSame(today, "day")){
            this.setState ({stage: "eight"})
        }
        else if (moment(firstdayofcycle).add(24, "day").isSame(today, "day")) {
            this.setState ({stage: "eight"})
        }
        else if (moment(firstdayofcycle).add(25, "day").isSame(today, "day")) {
            this.setState ({stage: "eight"})
        }
        else if (moment(firstdayofcycle).add(26, "day").isSame(today, "day")) {
            this.setState ({stage: "nine"})
        }
        else if (moment(firstdayofcycle).add(27, "day").isSame(today, "day")) {
            this.setState ({stage: "nine"})
        }
        else if (moment(firstdayofcycle).add(28, "day").isSame(today, "day")) {
            this.setState ({stage: "nine"})
        }
        else if (moment(firstdayofcycle).add(29, "day").isSame(today, "day")) {
            this.setState ({stage: "nine"})
        }
        else if (moment(firstdayofcycle).add(30, "day").isSame(today, "day")){
            this.setState ({stage: "nine"})
        }
        else if (moment(firstdayofcycle).add(31, "day").isSame(today, "day")) {
            this.setState ({stage: "nine"})
        }
        else if (moment(firstdayofcycle).add(31, "day").isSame(today, "day")) {
            this.setState ({stage: "nine"})
        }
        else if (moment(firstdayofcycle).add(31, "day").isSame(today, "day")) {
            this.setState ({stage: "nine"})
        }
        else 
        this.setState ({stage: "checkinfo"})
    }


    handleStageResult = stage => {
        let stageincycle = this.state.stage
        switch(stageincycle) {
            case "one":
                return "Your period has just started. With low estrogent, you may feel fatigue. Cramping is common. You should exercise gently in this stage.";
                break;
            case "two":
                return "Your period has ended or about to end. Estrogen is increasing, energy is rising! Feeling a little upbeat yeah?. It is a good time to push yourself through!";
                break;
            case "three":
                return "Estrogen is UP! Your face looks more symmetrical, and wow your skin is GLOWING! Testosterone is up as well, so you feel that you are on top of the world. This is a good time to try new things!";
                break;
            case "four":
                return "At this stage of your cycle, estogen is at its peak. You are at your sexiest and most fertile. You may feel more optimistic and super social than usual. Make sure to have fun!";
                break;
            case "five":
                return "At this stage of your cycle, ovaluation is here. Your ovary releases an egg. If it's not fertalized, it dissolves.";
                break;
            case "six":
                return "Oh no, hormones change!. This may intensify your emotions and tiredness.";
                break;
            case "seven":
                return "Estrogen is dropping. Testosterone and progesteron are surging. Yeah, this means excess oil which leads to breakouts and sensitive skin. Remember to eat healthy.";
                break;
            case "eight":
                return "Progesterone is at its peak. You may feel bloated with low libido. Some of you might not feel like doing anything at all. Don't let PMS take over. Do some exercises!";
                    break;
            case "nine":
                return "Breast soreness is common. Cut down on caffine and sugar intake. Stay hydrated";
                break;
            default:
                return "Update your period info or click the button to understand where you are in the period cycle"
        }
    }
    render() {
        return (
            <div>   
                <div id="form" className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div className="container-fluid form">
                            <div className="fact-section">
                                <h1 className="title"> THE FACTS</h1>

                                <div className="result-text-first" id="result"> Hello, {this.state.user.name}! The date of your last period was <strong>{moment.utc(this.state.user.lastdateoflastperiod).format("dddd, MMMM Do YYYY")}</strong>. Since your cycle length is about <strong> {this.state.user.lengthofcycle} days</strong>, we predict that your next period will come on <strong>{moment.utc(this.state.user.lastdateoflastperiod).subtract(this.state.user.lengthofperiod, "day").add(this.state.user.lengthofcycle, "day").format("dddd, MMMM Do YYYY")}</strong>.</div>

                                <h1 className="stage">At this stage of your cycle...</h1>

                                <div className="extra-info">{this.handleStageResult(this.state.stage)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Message; 