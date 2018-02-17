import React, { Component } from "react";
import BigCalendar from "../../components/BigCalendar/BigCalendar.js";
import { Accordion, AccordionItem } from "react-sanfona";
import "./toggle.css";
import Food from "../../pages/Food";
import Symptoms from "../../components/Symptoms/Symptoms.js"
import Message from "../../components/Symptoms/"

class Toggle extends Component {
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
            <Symptoms />
          </AccordionItem>
          <AccordionItem title={`Food`} className={`food`}>
            <Food />
          </AccordionItem>

          {/*Moods*/}
          <AccordionItem title={`Moods`} className={`moods`}>
            <h1> Placeholder for symptoms </h1>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
export default Toggle;
