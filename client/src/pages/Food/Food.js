import React from 'react';
import Request from 'superagent';


class Food extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            recipes: [],
            recipeID: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.search = this.search.bind(this);    
        this.handleRecipeClick = this.handleRecipeClick.bind(this);
        this.getRecipe = this.getRecipe.bind(this)
    }

    componentDidMount(){
        this.getRecipe (this.state.recipeID);
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
                recipes:response.body.matches,
                searchQuery: '',
                recipeID: ''
            });
        })
    }

    getRecipe(recipeID) {
        const url = `https://api.yummly.com/v1/api/recipe/${recipeID}?_app_id=f009d8ed&_app_key=51efe345d8aee0dfafd461250280bd9b`
        Request.get(url).then((response) => {
            this.setState({
                recipes:[],
                searchQuery: "",
                recipeID: ''
            })
            window.open(response.body.source.sourceRecipeUrl,'_blank')
        });
    }

    
    handleRecipeClick = event => {
        event.preventDefault(); 
        console.log(event.target.value)
        this.getRecipe(event.target.value)
        console.log(this.state)
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
                        {recipe.smallImageUrls.map(image =>(
                            <img src={image} alt = "img" />
                        ))} 
                        <button name="{recipeName}" value={recipe.id} onClick={this.handleRecipeClick}> {recipe.recipeName} </button>
                
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