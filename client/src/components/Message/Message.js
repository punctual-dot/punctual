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
                return "Your period just started. With low estrogen, you may feel fatigue. Cramping is also common. You should exercise gently when in this stage.";
                break;
            case "two":
                return "Your period is over or about to end. Estrogen increases, and your energy rises! Feeling a little upbeat, yeah?. Now's a great time to put yourself out there!";
                break;
            case "three":
                return "Estrogen is UP! Your face looks more symmetrical, and wow your skin is GLOWING! Testosterone is up as well, so you feel like you are on top of the world. Good time to try new things!";
                break;
            case "four":
                return "Estogen is at its peak. You are at your sexiest and most fertile. You may feel more optimistic and social than usual. If so, go have fun!";
                break;
            case "five":
                return "Ready for a baby? Because you're ovulating. This means your ovary releases an egg; get busy if you want that mini-me! If not, be extra careful...";
                break;
            case "six":
                return "Oh no, your hormones are changing! This may intensify your emotions and tiredness.";
                break;
            case "seven":
                return "Estrogen drops. Testosterone and progesteron surge. Yeah, this means excess oil which leads to breakouts and sensitive skin. Eat healthy, and check out that new face mask!";
                break;
            case "eight":
                return "Progesterone is at its peak. You may feel bloated with low libido. Some might not feel like doing anything at all. Don't let PMS take over. Do some exercises! YOU CAN DO THIS!";
                    break;
            case "nine":
                return "Breast soreness is common. Cut down on caffine and sugar intake. Stay hydrated!";
                break;
            default:
                return "Update your period info or click the button to understand where you are in your cycle"
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
                                    <div className="result-text-first" id="result"> Hello, {this.state.user.name}! The date of your last period was {moment.utc(this.state.user.lastdateoflastperiod).format("dddd, MMMM Do YYYY")}. Since your cycle length is about {this.state.user.lengthofcycle} days, we predict that your next period will come on {moment.utc(this.state.user.lastdateoflastperiod).subtract(this.state.user.lengthofperiod, "day").add(this.state.user.lengthofcycle, "day").format("dddd, MMMM Do YYYY")}.</div>
                  
                                    <div className="extra-info">{this.handleStageResult(this.state.stage)} <button onClick={this.determineCycleStage}> Click </button></div>
                    
                        </div>
                    </div>
                </div>
            </div>

            </div>



  


        )
    }
}
export default Message; 