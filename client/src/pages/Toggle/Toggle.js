import React, { Component } from "react";
import BigCalendar from "../../components/BigCalendar/BigCalendar.js";
import { Accordion, AccordionItem } from "react-sanfona";
import "./toggle.css";
import Food from "../../pages/Food";
import Symptoms from "../../components/Symptoms/Symptoms.js"
import Message from "../../components/Symptoms/"

class Toggle extends Component {
  /* create state for symptoms results*/
  state = {
    foodQuery: null,
    newQuery: true
  }


  /* function that sets state for symptom result*/
  setFoodQuery = (data) => {
    this.setState({
      foodQuery: data,
      newQuery: true
    });
  }

  setNewQuery = (data) => {
    this.setState({
      newQuery: data
    });
  }

  render() {
    return (
      <div>
        <Accordion>
          {/*Calendar*/}
          <AccordionItem title={`Cycle`} className={`cycle`}>
            <BigCalendar />
          </AccordionItem>

          {/*Symptoms*/}
          <AccordionItem title={`Symptoms`} className={`symptoms`}>
           {/* pass function that sets symptom state into component as a prop */}
            <Symptoms
              setFood={this.setFoodQuery}
            />
          </AccordionItem>

          {/*Foods*/}
          <AccordionItem 
            title={`Food`} 
            className={`food`}
            expanded={ this.state.newQuery ? false : true }
          >
          {/* pass symptom state variable into this component */}
            <Food 
              foodQuery={this.state.foodQuery}
              newQuery={this.state.newQuery}
              setNewQuery={this.setNewQuery}
            />
          </AccordionItem>
       
         
        </Accordion>
      </div>
    );
  }
}
export default Toggle;
