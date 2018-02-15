import React from 'react';
import Request from 'superagent';


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
                    match.fullImageUrl = response.body.images[0].hostedLargeUrl
                    match.sourceUrl = response.body.source.sourceRecipeUrl;
                    this.state.recipes.push(
                        match
                    );
                    console.log("STATE.RECIPES", this.state.recipes)
                    this.setState({
                        recipes:this.state.recipes
                    })
                });
            })
        })
    }
    
    render(){
        return (
            <div>
                <form>
                    <label>
                        searchQuery
                        <input value={this.state.searchQuery} onChange={this.handleInputChange} type="text" name="searchQuery" />
                    </label>
                        <input type="submit" value="Submit" onClick={this.handleFormSubmit} />
                </form>
                
                {this.state.recipes.map(recipe => (
                    <div>
                        <img src={recipe.fullImageUrl} alt = "fullsize" />
                        <a href={recipe.sourceUrl} className="active" target="_blank">{recipe.recipeName}</a>
                
                        <h3>Ingredients</h3>
                        {recipe.ingredients.map(ingredient =>(
                            <ul>
                            <li>{ingredient}</li>
                            </ul>
                        ))} 
                    </div>
                ))}
        </div>
        )
    }

}

export default Food;