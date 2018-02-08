import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Input, FormBtn } from "../../components/Form";


class Main extends Component {

  render() {
    return (
		<div>
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <label>What 's your name?</label>
              <Input
                name="name"
                placeholder="Required"
              />
              <label>What 's your email address?</label>
              <Input
                name="email"
                placeholder="Required"
              />
              <label>How long does your period last on average?</label>
              <Input
                name="periodlength"
                placeholder="Days"
              />
              <label>When was the last date of your last period?</label>
              <Input
                name="lastperiod"
                type="date"
              />
              <FormBtn
              >
                Submit Your Info
              </FormBtn>
            </form>
      </div>
    )
}
}
export default Main;
