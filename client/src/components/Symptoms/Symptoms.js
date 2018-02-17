import React, { Component } from "react";
import API from "../../utils/API"
import  {FormBtn} from "../../components/Form";

class Sypmtoms extends Component {
  constructor(props){
  super(props)
  this.state = {
    user:[],
    symptoms:[],
    symptom:'',
  }
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.loadSymptoms = this.loadSymptoms.bind(this)

  };

  componentDidMount() {
    console.log("works!")
    this.loadSymptoms();
  }

  loadSymptoms = () => {
    API.getSymptoms()
      .then(res =>
        this.setState({ symptoms: res.data,  user:'',symptom: ''}, console.log(res.data)))
      .catch(err => console.log(err))
  }

  loadUser = id => {
    API.getUser(id)
      .then(res =>
        this.setState({ user: res.data,  name:'',lengthofperiod: '', lastdateoflastperiod: ''}, console.log("CURRENT USER ID: "+res.data._id))
        )
      .catch(err => console.log(err))
  }
  
  handleInputChange = event => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    });
    console.log(name, value)
    console.log(this.state)
};

  handleFormSubmit = (event, id)=> {
    event.preventDefault();
    console.log("yay")
    console.log(this.state)
    this.loadUser(this.state.user._id)
    if (this.state.symptom) {
      API.addSymptomtoUser (id) ({
        symptoms: this.state.symptom,
        dateofsymptom: Date.now() 
      })
        .then(res => this.loadUser(this.state.user._id))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
    <div>
     
            <form>
            <select value={this.state.symptoms}
                 onChange={this.handleInputChange}
                 name="symptom" className="form-control">
                  {this.state.symptoms.map(symptom => (
                  <option key={symptom._id}> 
                        {symptom.symptom} 
                  </option>
              ))}
              </select>
          
            <FormBtn
              disabled={!(this.state.symptom)}
              onClick={this.handleFormSubmit}
              >
              Submit Your Info
            </FormBtn>
          </form>


          <h1>Hello,</h1>
                {/* {this.state.users.map(user => (
                  <div key={user._id}> 
                      <strong>
                        {user.name} 
        
                      </strong>
                  </div>
              ))} */}


      </div>
   )
  }
}
export default Sypmtoms;