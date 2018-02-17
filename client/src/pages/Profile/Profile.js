import React, { Component } from "react";
import API from "../../utils/API"
import { Input, FormBtn } from "../../components/Form";
import "./profile.css"


class Profile extends Component {
  state = {
    users: [],
    name:'',
    lengthofperiod: '',
    lastdateoflastperiod: '',
    lengthofcycle:''
  };

  componentDidMount() {
    console.log("works!")
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data,  name:'',lengthofperiod: '', lastdateoflastperiod: '', lengthofcycle: ''}, console.log(res.data[0].name))
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
        lastdateoflastperiod: this.state.lastdateoflastperiod,
        lengthofcycle: this.state.lengthofcycle
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
    <div>
      <div id="form" className="row form-row">
        <div className="col-lg-8 col-lg-offset-2">
          <div className="container-fluid form">
            <h1 className="header-intro">Give us a little info about you & your period...</h1>
            <p className="main-text"><em>and we'll help you keep all the right plates spinning</em></p>
            <form>
              <label className="form-questions">Hey Girl, what's your name?</label>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Required"
              />

              <label className="form-questions">how long is your cycle?</label>
              <Input

              value={this.state.lengthofcycle}
                onChange={this.handleInputChange}
                name="lengthofcycle"
                type="number"
                placeholder="Days"
              />  

              <label className="form-questions">How long does this chick usually stick around?</label>
              <Input
                type="number"
                value={this.state.lengthofperiod}
                onChange={this.handleInputChange}
                name="lengthofperiod"
                placeholder="Days"
              />
              <label className="form-questions">When was the last time she came to visit?</label>
              <Input

              value={this.state.lastdateoflastperiod}
                onChange={this.handleInputChange}
                name="lastdateoflastperiod"
                type="date"
              />

              <FormBtn className="submit-button"
                disabled={!(this.state.name && this.state.lengthofcycle && this.state.lengthofperiod && this.state.lastdateoflastperiod && this.state.lengthofcycle)}
                onClick={this.handleFormSubmit}
                >
                Submit
              </FormBtn>
            </form>
          </div>
        </div>
      </div>

        <div className="container-fluid">
          <h1>Hello,</h1>
                {this.state.users.map(user => (
                  <div key={user._id}> 
                      <strong>
                        {user.name} 
        
                      </strong>
                  </div>
              ))}
          </div>
    </div>       

   )
  }
}
export default Profile;