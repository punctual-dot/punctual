import React, { Component } from "react";
import BigCalendar from "../../components/BigCalendar/BigCalendar.js"
import { Accordion, AccordionItem } from 'react-sanfona';
import "./toggle.css"

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
				    <h1> This is Mood</h1>
		        </AccordionItem>
		        <AccordionItem title={`Symptoms`} className={`symptoms`}>
				    <h1> This is Symptoms</h1>
		        </AccordionItem>
		        <AccordionItem title={`Food`} className={`food`}>
				   <h1> This is for food</h1>
		        </AccordionItem>
		        <AccordionItem title={`Myths`} className={`myth`}>
				   <h1> This is for your mama's myths</h1>
		        </AccordionItem>
   
      		</Accordion>
  		</div>
   )
  }
}
export default Toggle;
