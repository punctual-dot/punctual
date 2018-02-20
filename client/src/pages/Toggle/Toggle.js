import React, { Component } from "react";
import BigCalendar from "../../components/BigCalendar/BigCalendar.js";
import { Accordion, AccordionItem } from "react-sanfona";
import "./toggle.css";
import Food from "../../pages/Food";
import Symptoms from "../../components/Symptoms/Symptoms.js"
import Message from "../../components/Message/"
import Jumbotron from "../../components/Jumbotron/Jumbotron.js";
import {Images} from "../../components/Images/Images.js"

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

  state = {
    buttons: [
      {
        country: 'Israel',
        url: 'http://img.freeflagicons.com/thumb/round_icon/israel/israel_64.png',
        myth: 'you get slapped in the face when you get your first period so you have “beautiful” red cheeks all your life??'

      },{
        country: 'Poland',
        url:'http://img.freeflagicons.com/thumb/round_icon/poland/poland_64.png',
        myth: 'having sex while menstruating can kill your partner??'

      },{
        country: 'Malaysia',
        url:'http://img.freeflagicons.com/thumb/round_icon/malaysia/malaysia_64.png',
        myth: 'you need to wash your pads before throwing them out, otherwise ghosts will come and haunt you??'
      },
      {
        country: 'Mexico',
        url:'http://img.freeflagicons.com/thumb/round_icon/mexico/mexico_64.png',
        myth: 'you should avoid dancing to very active rhythms in order to take care of your uterus??'

      },
      {
        country: 'Argentina',
        url:'http://img.freeflagicons.com/thumb/round_icon/argentina/argentina_64.png',
        myth: 'you can’t make whipped cream, because it will curdle??'

      },
      {
        country: 'Italy',
        url:'http://img.freeflagicons.com/thumb/round_icon/italy/italy_64.png',
        myth: 'any dough you make won’t rise??'

      }
    ]
  };

  clickMe(country, myth){
    console.log("Can you believe in " + country + ", they think " + myth);
  }

  render() {
    return (
     
      <div>
    {/*change out to make sense with this page*/}
       <Jumbotron />
        <Accordion>
          {/*Calendar*/}
          <AccordionItem title={`Cycle`} className={`cycle`}>
            <BigCalendar />
            <Message />
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
          {/*Myths*/}
          <AccordionItem title={`Myths`} className={`myths`}>
          <h1>Click on a country's flag to find out an interesting period myth!</h1>

          {this.state.buttons.map(button => (
            <Images clickMe={this.clickMe} url={button.url} country={button.country} myth={button.myth} />
            ))}
          </AccordionItem>
         
        </Accordion>
      </div>
    );
  }
}
export default Toggle;
