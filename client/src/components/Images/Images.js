import React, { Component } from "react";
import "./Images.css";

class Images extends Component {
	constructor(props){
        super(props)
        this.state = {
			isVisible: false
		}
	}

	toggleVisibility() {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}

	render () {
	  return (
	    <div className="list-overflow-container">
	    	<img onClick={ () => this.toggleVisibility() } src={ this.props.url } alt='country'></img>
	    	{ this.state.isVisible && <div className="myths">{ 'In '+ this.props.country + ', some believe that ' + this.props.myth}</div> }
	    	
	    </div>
	  );
	}
};


export default Images;