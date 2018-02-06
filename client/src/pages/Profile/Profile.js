import React, { Component } from "react";
import API from "../../utils/API"


class Profile extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
  	console.log("works!")
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data}, console.log(res.data[0].name),console.log(res.data[0]._id),console.log(res.data) )
        )
      .catch(err => console.log(err))
  }

  render() {
    return (
		<div>

      		<h1>Profile Profile Profile <small>Subtext for profile if we want to</small></h1>

  		</div>
   )
  }
}
export default Profile;
