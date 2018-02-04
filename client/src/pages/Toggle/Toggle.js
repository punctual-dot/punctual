import React, { Component } from "react";
import BigCalendar from "../../components/BigCalendar/BigCalendar.js"
import { Accordion, AccordionItem } from 'react-sanfona';

class Toggle extends Component {

  render() {
    return (
		<div>
      		<h1>Toggle toggle <small>Subtext for profile if we want to</small></h1>
      		
      		<Accordion>
		        {["Cycle", "Moods", "Symptoms", "Food"].map(item => {
		        
		        	if (item === "Cycle"){
		             	return (
		             		<AccordionItem title={`${item}`} expanded={item === 5}>
				             <BigCalendar />
				            </AccordionItem>
		             	)
					} else {
		          		return (
				            <AccordionItem title={`${item}`} expanded={item === 5}>
				              <div>
				                {`${item} is this where the text goes?`}
				              </div>
				            </AccordionItem>
				       	);
					}
		        })}
      		</Accordion>
  		</div>
   )
  }
}
export default Toggle;
