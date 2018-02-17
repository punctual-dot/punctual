import React from "react";

const Symptoms = (props) => {
	this.handleClick = (e) => {
		e.preventDefault();

		let food = e.target.dataset.food;

		console.log(food);

		props.setFood(food);
	}

	return (
		<nav className="navbar">
	      <ul>
	      	<li className="item">
	      		<a onClick={this.handleClick} data-food="banana">banana</a>
	      	</li>
	      	<li className="item">
	      		<a onClick={this.handleClick} data-food="pineapple">pineapple</a>
	      	</li>
	      	<li className="item">
	      		<a onClick={this.handleClick} data-food="spinach">spinach</a>
	      	</li>
	      </ul>
		</nav>
	)
}

export default Symptoms;