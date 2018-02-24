import React, { Component } from "react";
import BigCalendar from "../../components/BigCalendar/BigCalendar.js";
import { Accordion, AccordionItem } from "react-sanfona";
import "./toggle.css";
import Food from "../../pages/Food";
import Symptoms from "../../components/Symptoms/Symptoms.js"
import Message from "../../components/Message/"
import Jumbotronquote from "../../components/Jumbotronquote/Jumbotronquote.js";
import Myths from "../../components/Myths/"

class Toggle extends Component {
    state = {
        foodQuery: null,
        newQuery: true
    }
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
                <Jumbotronquote />
                <Accordion>
                    <AccordionItem title={`Calendar`} className={`calendar`}>
                        <BigCalendar />
                        <Message />
                    </AccordionItem>

                    <AccordionItem title={`Symptoms`} className={`symptoms`}>
                        <Symptoms setFood={this.setFoodQuery}/>
                    </AccordionItem>

                    <AccordionItem 
                        title={`Food`} 
                        className={`food`}
                        expanded={ this.state.newQuery ? false : true }
                    >
                        <Food 
                        foodQuery={this.state.foodQuery}
                        newQuery={this.state.newQuery}
                        setNewQuery={this.setNewQuery}
                        />
                    </AccordionItem>

                    <AccordionItem title={`Myths`} className={`myths`}>
                        <Myths />
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}
export default Toggle;
