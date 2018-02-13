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
      		
      		<Accordion>
      			{/*Calendar*/}
      			<AccordionItem title={`Cycle`} className={`cycle`}>
				    <BigCalendar />
		        </AccordionItem>
		        
		        {/*Symptoms*/}
		        <AccordionItem title={`Symptoms`} className={`symptoms`}>
						<h1> Placeholder for symptoms </h1>
		        </AccordionItem>
		       
		        {/*Foods*/}
		        <AccordionItem title={`Food`} className={`food`}>
						<Food />
		        </AccordionItem>

		        {/*Moods*/}
		        <AccordionItem title={`Moods`} className={`moods`}>
						<h1> Placeholder for symptoms </h1>
		        </AccordionItem>
		        
		      
		        

		        
   
      		</Accordion>
  		</div>
   )
  }
}
export default Toggle;
