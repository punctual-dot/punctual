import React, { Component } from "react";
import BigCalendar from "../../components/BigCalendar/BigCalendar.js"
import { Accordion, AccordionItem } from 'react-sanfona';
import "./toggle.css"
import Jumbotron from "../../components/Jumbotron";
import Message from "../../components/Message";
import Food from "../../pages/Food";


class Toggle extends Component {

  render() {
    return (
		<div>
      		<h1>Toggle toggle <small>Subtext for profile if we want to</small></h1>
      		
      		<Accordion>
      			<AccordionItem title={`Cycle`} className={`cycle`}>
				    <BigCalendar />
		        </AccordionItem>
		        <AccordionItem title={`Moods`} className={`moods`}>
						<Jumbotron> <Message /> </Jumbotron>
		        </AccordionItem>
		        <AccordionItem title={`Symptoms`} className={`symptoms`}>
						<h1> Placeholder for symptoms </h1>
		        </AccordionItem>
		        <AccordionItem title={`Food`} className={`food`}>
						<Food />
		        </AccordionItem>
		        <AccordionItem title={`Myths`} className={`myth`}>
						<h1> Placeholder for myth </h1>
		        </AccordionItem>
   
      		</Accordion>
  		</div>
   )
  }
}
export default Toggle;
