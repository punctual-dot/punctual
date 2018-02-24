import React, { Component } from "react";
import Images from "../../components/Images/Images.js"
import "./myths.css";

class Myths extends Component {
    constructor(props){
        super(props)
        this.state = {
		    buttons: [
		     {  
		        country: 'India',
		        url: 'https://i.imgur.com/hGvRmkM.png',
		        myth: 'If you wash your hair, your flow will be less and it will affect your fertility later in life.'
		     


		     },{
		        country: 'Poland',
		        url:'https://i.imgur.com/DKO2yiJ.png',
		        myth: 'having sex while menstruating can kill your partner!'

		      },{
		        country: 'Malaysia',
		        url:'https://i.imgur.com/YKT5nY0.png',
		        myth: 'you need to wash your pads before throwing them out, otherwise ghosts will come and haunt you!'
		      },{
		        country: 'Mexico',
		        url:'https://i.imgur.com/baT1rQf.png',
		        myth: 'you should avoid dancing to very active rhythms in order to take care of your uterus!'

		      },{
		        country: 'United Kingdom',
		        url:'https://i.imgur.com/NF1F8rk.png',
		        myth: 'If you touch any vegetable before or during the pickling process they would not pickle and would go bad.'

		      },{
		        country: 'Italy',
		        url:'https://i.imgur.com/blQoWCT.png',
		        myth: 'any dough you make won’t rise!'

		      }
		    ]
		}
	}

	render() {
	    return (
	        <div className="container-fluid myths-div">
	           	<h1 className="myth-header">Check out interesting <br /> period myths from around the world!</h1>
	          { this.state.buttons.map(button => (
                <Images key= {button.country}
                        className="flags"
	            		url={button.url} 
	            		country={button.country} 
	           			myth={button.myth} 
	           			style={{display: "inline-block"}}/>
	            ))}  
	         </div>

	    )
	}
};


export default Myths;






  


