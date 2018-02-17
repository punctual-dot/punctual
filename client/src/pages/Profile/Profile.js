import React, { Component } from "react";
import API from "../../utils/API"
import { Input, FormBtn } from "../../components/Form";



class Profile extends Component {
  state = {
    user: '',
    name:'',
    lengthofperiod: '',
    lastdateoflastperiod: '',
  };

  componentDidMount() {
    console.log("works!")
    this.loadUser(this.state.user._id);
  }

  loadUser = id => {
    API.getUser(id)
      .then(res =>
        this.setState({ user: res.data,  name:'',lengthofperiod: '', lastdateoflastperiod: ''}, console.log("CURRENT USER ID: "+res.data._id), window.open("/profile/" + res.data._id, "_self"))
        )
      .catch(err => console.log(err))
  }
  
  handleInputChange = event => {
    const { name, value } = event.target; 
    console.log(name, value)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.lengthofperiod && this.state.lastdateoflastperiod) {
      API.saveUser({
        name: this.state.name,
        lengthofperiod: this.state.lengthofperiod,
        lastdateoflastperiod: this.state.lastdateoflastperiod
      })
        .then(res => this.loadUser(res.data._id))
        .catch(err => console.log(err))
      }
  };

  render() {
    return (
    <div>

            <form>
            <label>What 's your name?</label>
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Required"
            />
          
            <label>How long does your period last on average?</label>
            <Input
              type="number"
              value={this.state.lengthofperiod}
              onChange={this.handleInputChange}
              name="lengthofperiod"
              placeholder="Days"
            />
            <label>When was the last date of your last period?</label>
            <Input

            value={this.state.lastdateoflastperiod}
              onChange={this.handleInputChange}
              name="lastdateoflastperiod"
              type="date"
            />
            <FormBtn
              disabled={!(this.state.name && this.state.lengthofperiod && this.state.lengthofperiod)}
              onClick={this.handleFormSubmit}
              >
              Submit Your Info
            </FormBtn>
          </form>
      </div>
   )
  }
}
export default Profile;