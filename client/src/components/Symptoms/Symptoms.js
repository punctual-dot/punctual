import React, { Component } from "react";
import API from "../../utils/API"
import {FormBtn} from "../../components/Form";

let UserId = window.location.pathname.replace('/profile/','');

class Symptoms extends Component {
    constructor(props){
    super(props)
    this.state = {
        symptoms: [],
        symptom:'',
        user:'',
        advice: '',
        foods: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadSymptoms = this.loadSymptoms.bind(this)
    this.loadSymptom = this.loadSymptom.bind(this)
    this.handleFoodClick = this.handleFoodClick.bind(this)
    this.loadUser = this.loadUser.bind(this)
};

    componentDidMount() {
	    this.loadSymptoms();
    }

    loadSymptoms = () => {
        API.getSymptoms()
        .then(res => 
            this.setState({symptoms: res.data}))
        .catch(err => console.log(err))
    }

    loadSymptom = (sympid) => {
        API.getSymptom(sympid)
        .then(res => 
            this.setState({advice: res.data.advice, foods: res.data.foods, symptom: ""}))
        .catch(err => console.log(err))
    }

    loadUser = id => {
        API.getUser(UserId)
        .then(res =>
            this.setState({user: res.data}))
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target; 
        this.setState({
        [name]: value
        });
        console.log(name, value)
    };


    handleFormSubmit = (event, id)=> {
	event.preventDefault();
    this.loadUser(this.state.user._id)
        if (this.state.symptom) {
            for (var i=0; i < this.state.symptoms.length; i ++ ) {
                if (this.state.symptoms[i].symptom.indexOf(this.state.symptom) >= 0) {
                    const sympid = this.state.symptoms[i]._id
                    API.addSymptomtoUser (this.state.user.id, {
                        symptoms: [
                            {   
                                symptom: this.state.symptoms[i].symptom,
                                dateofsymptom: Date.now(), 
                                symptomid: this.state.symptoms[i]._id
                            }
                        ]
                    })
                    .then(res => this.loadUser(UserId))
                    .catch(err => console.log(err))
                    this.loadSymptom(sympid)
                }
            }
        }
    };

    handleFoodClick = event => {
    event.preventDefault();
        let food = event.target.dataset.food;
        this.props.setFood(food);
     }


    render() {
        return (
            <div>
                <form id="form">
                    <select
				        onChange={this.handleInputChange}
                        name="symptom" className="form-control">
                        {this.state.symptoms.map(symptom => (
                            <option key={symptom._id} > 
                                {symptom.symptom}
                            </option>
                        ))}
                    </select>
                    <FormBtn
                        disabled={!(this.state.symptom)}
                        onClick={this.handleFormSubmit} >
                            Submit Your Info
                    </FormBtn>
                </form>
    		
                <div id="result">
                    {this.state.user.name}
                    {this.state.advice}
                    {this.state.foods.map(food => (]
    				    <ul>    
                            <li className="item"> 
    				            <a onClick={this.handleFoodClick} data-food={food}>{food}</a>
    				        </li>
    				    </ul>
    			     ))}
                </div>
            </div>
        )
    }
}
export default Symptoms;