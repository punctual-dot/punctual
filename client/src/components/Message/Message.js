import React from "react";
import API from "../../utils/API"

class Message extends React.Component {
    state = {
        users: [],
        name:'',
        email:'',
        lengthofperiod: '',
        lastdateoflastperiod: ''
      };
    
      componentDidMount() {
        console.log("works!")
        this.loadUsers();
      }
    
      loadUsers = () => {
        API.getUsers()
          .then(res =>
            this.setState({ users: res.data,  name:'',email:'',lengthofperiod: '', lastdateoflastperiod: ''}, console.log(res.data[0].name))
            )
          .catch(err => console.log(err))
      }

    render() {
        return (
        <div>
            <h1>Hello,</h1>
            {this.state.users.map(user => (
                  <div key={user._id}> 
                      <strong>
                        {user.name} 
                        {user.email}
                      </strong>
                  </div>
              ))}
        </div>
        )

    }




}
export default Message;