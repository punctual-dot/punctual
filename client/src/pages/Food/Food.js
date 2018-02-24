import React from 'react';
import Request from 'superagent';
import "./food.css";


class Food extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            recipes: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.search = this.search.bind(this);    
    }

    componentDidUpdate() {
        console.log(this.props.foodQuery);
        console.log('food component updated!');
        if(this.props.newQuery) {
            this.search(this.props.foodQuery);
        }
    }
    
    handleInputChange = event => {
        const { name, value } = event.target; 
        this.setState({
          [name]: value
        });
        console.log(name, value)
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchQuery) {
            this.search(this.state.searchQuery)
        }
    };

    search(searchQuery) {
        const url = `https://api.yummly.com/v1/api/recipes?_app_id=f009d8ed&_app_key=51efe345d8aee0dfafd461250280bd9b&q=${searchQuery}&maxResult=8`
        Request.get(url).then((response) => {
            this.setState({
                recipes: [],
                searchQuery: ''
            })
            response.body.matches.forEach(match => {
                console.log("MATCH", match);
                const url = `https://api.yummly.com/v1/api/recipe/${match.id}?_app_id=f009d8ed&_app_key=51efe345d8aee0dfafd461250280bd9b`
                Request.get(url).then((response) => {
                    console.log("MATCH RESPONSE", response)
                    match.fullImageUrl = response.body.images[0].imageUrlsBySize["360"]
                    match.sourceUrl = response.body.source.sourceRecipeUrl;
                    this.state.recipes.push(
                        match
                    );
                    console.log("STATE.RECIPES", this.state.recipes)
                    this.setState({
                        recipes:this.state.recipes
                    })
                });
            });

        })

        this.props.setNewQuery(false);
    }
    
    render(){
        return (
            <div className="whole-food-div">
                <h1 className="calloutquotes">You are what you eat, <br/> so let's make something delicious.</h1>
              
               
                
                {this.state.recipes.map(recipe => (
                    <div style={{display: "inline-block"}}>
                    <div className="container">
                        <img src={recipe.fullImageUrl} alt = "fullsize" className="image"/>
                            <div className="overlay">
                                <div className="text"> 
                                    <h2 className="ingredients">
                                        ingredients
                                    </h2>
                                          {recipe.ingredients.map(ingredient =>(
                                            <ul className="list">
                                                <li>{ingredient}</li>
                                            </ul>
                                        ))} 
                                </div>
                            </div>
                    </div>
                    <a href={recipe.sourceUrl} className="active" target="_blank">{recipe.recipeName}</a>
                    </div>

                ))}
                 <form className="search-form">
                  
                    <div id="form" className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="container-fluid form">
                                
                                <label>
                                Search Food
                                <input value={this.state.searchQuery} onChange={this.handleInputChange} type="text" name="searchQuery" />
                                </label>
                                <input type="submit" value="Submit" onClick={this.handleFormSubmit} />

                               
                            </div>
                        </div>
                    </div>
                </form>
        </div>
        )
    }

}

export default Food;