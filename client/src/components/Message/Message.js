import React, { Component } from "react";
import API from "../../utils/API"
import moment from "moment";

let userId = window.location.pathname.replace('/profile/','');

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            stage: '',
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
            this.setState({user: res.data}, console.log(res.data)))
        .catch(err => console.log(err))
    }
    determineCycleStage = () => {
        let today = moment.utc()
        let firstdayofcycle = moment.utc(this.state.user.firstdayofcycle)
      
        if (moment(firstdayofcycle).add(1, "day").isSame(today, "day")) {
            console.log("1")
            this.setState ({stage: "one"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(2, "day").isSame(today, "day")){
            console.log("2")
            this.setState ({stage: "one"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(3, "day").isSame(today, "day")){
            console.log("3")
            this.setState ({stage: "one"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(4, "day").isSame(today, "day")){
            console.log("4")
            this.setState ({stage: "one"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(5, "day").isSame(today, "day")){
            console.log("5")
            this.setState ({stage: "two"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(6, "day").isSame(today, "day")){
            console.log("6")
            this.setState ({stage: "two"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(7, "day").isSame(today, "day")) {
            console.log("7")
            this.setState ({stage: "two"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(8, "day").isSame(today, "day")) {
            console.log("8")
            this.setState ({stage: "three"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(9, "day").isSame(today, "day")){
            console.log("9")
            this.setState ({stage: "three"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(10, "day").isSame(today, "day")) {
            console.log("10")
            this.setState ({stage: "three"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(11, "day").isSame(today, "day")) {
            console.log("11")
            this.setState ({stage: "four"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(12, "day").isSame(today, "day")) {
            console.log("12")
            this.setState ({stage: "four"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(13, "day").isSame(today, "day")) {
            console.log("13")
            this.setState ({stage: "five"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(14, "day").isSame(today, "day")) {
            console.log("14")
            this.setState ({stage: "five"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(15, "day").isSame(today, "day")) {
            console.log("15")
            this.setState ({stage: "six"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(16, "day").isSame(today, "day")){
            console.log("16")
            this.setState ({stage: "six"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(17, "day").isSame(today, "day")) {
            console.log("17")
            this.setState ({stage: "six"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(18, "day").isSame(today, "day")) {
            console.log("18")
            this.setState ({stage: "six"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(19, "day").isSame(today, "day")) {
            console.log("19")
            this.setState ({stage: "seven"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(20, "day").isSame(today, "day")) {
            console.log("20")
            this.setState ({stage: "seven"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(21, "day").isSame(today, "day")) {
            console.log("21")
            this.setState ({stage: "seven"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(22, "day").isSame(today, "day")) {
            console.log("22")
            this.setState ({stage: "eight"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(23, "day").isSame(today, "day")){
            console.log("23")
            this.setState ({stage: "eight"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(24, "day").isSame(today, "day")) {
            console.log("24")
            this.setState ({stage: "eight"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(25, "day").isSame(today, "day")) {
            console.log("25")
            this.setState ({stage: "eight"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(26, "day").isSame(today, "day")) {
            console.log("26")
            this.setState ({stage: "nine"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(27, "day").isSame(today, "day")) {
            console.log("27")
            this.setState ({stage: "nine"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(28, "day").isSame(today, "day")) {
            console.log("28")
            this.setState ({stage: "nine"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(29, "day").isSame(today, "day")) {
            console.log("29")
            this.setState ({stage: "nine"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(30, "day").isSame(today, "day")){
            console.log("30")
            this.setState ({stage: "nine"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(31, "day").isSame(today, "day")) {
            console.log("31")
            this.setState ({stage: "nine"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(31, "day").isSame(today, "day")) {
            console.log("32")
            this.setState ({stage: "nine"}, console.log(this.state))
        }
        else if (moment(firstdayofcycle).add(31, "day").isSame(today, "day")) {
            console.log("33")
            this.setState ({stage: "nine"}, console.log(this.state))
        }
        else 
        this.setState ({stage: "checkinfo"}, console.log(this.state))
    }


    handleStageResult = stage => {
        let stageincycle = this.state.stage
        switch(stageincycle) {
            case "one":
                return "Your period just started. With low estrogent, you may feel fatigue. Cramping is common. You should exercise gently in this stage";
                break;
            case "two":
                return "Your period ends or about to end. Estrogen increases, energy rises! Feeling a little upbeat yeah?. It is a good time to push yourself through!";
                break;
            case "three":
                return "Estrogen is UP! Your face looks more symmetrical, and wow your skin is GLOWING! Testosterone is up as well, so you feel that you are on top of the world. Good time to try new things!";
                break;
            case "four":
                return "Estogen is at its peak. You are at your sexiest and most fertile. You may feel more optimistic and super social than usual. If so, go have fun!";
                break;
            case "five":
                return "Ovaluation is here. Your ovary releases an egg. If it's not fertalized, it dissolves";
                break;
            case "six":
                return "Oh no, hormones change!. This may intensify your emotions and tiredness";
                break;
            case "seven":
                return "Estrogen drops. Testosterone and progesteron surge. Yeah, this means excess oil which leads to breakouts and sensitive skin. Eat healthy.";
                break;
            case "eight":
                return "Progesterone at its peak. You may feel bloated with low libido. Some might not feel like doing anything at all. Don't let PMS take over. Do some exercises!";
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
                <div id="result">
                    Hello, {this.state.user.name}. Your last date of period was on {moment.utc(this.state.user.lastdateoflastperiod).format("dddd, MMMM Do YYYY")}. Since your cycle lenght is about {this.state.user.lengthofcycle} days. We predict that your first day of next period will come on {moment.utc(this.state.user.lastdateoflastperiod).subtract(this.state.user.lengthofperiod, "day").add(this.state.user.lengthofcycle, "day").format("dddd, MMMM Do YYYY")}. 
                </div>
                <div> 
                    <button onClick={this.determineCycleStage}> Click </button>
                    <h5>{this.handleStageResult(this.state.stage)}</h5>
                </div>
            </div>
        )
    }
}
export default Message; 