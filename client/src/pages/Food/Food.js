import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

class Food extends React.Component {
    constructor(){
        super();
        this.state = {
            searchQuery: '',
            recipe: {
                ingredients: []
            }
        };

        this.search = this.search.bind(this);
        this.queryUpdate = this.queryUpdate.bind(this);
    }

    componentWillMount(){
        this.search(this.state.searchQuery);
    }
    
    handleInputChange = event => {
      const { name, value } = event.target; 
      console.log(name, value)
      this.setState({
        [name]: value
      });
    };

    render(){
        const title = 'Title of food'; // have to get this from somewhere else
        const {recipe, searchQuery} = this.state; // Get state properties
        const listItems = _.get(recipe, 'ingredients', []).map((ingredient) => {
            return (<h5>{ingredient}</h5>);
        });

        return(
            <div>
                <input onChange={this.queryUpdate} type="text" value={searchQuery} />
                

                <h4>{title}</h4>
                <ul>
                    <li>{listItems}</li>
                </ul>
            </div>
        )
    }

    queryUpdate(e) {
        const searchQuery = "corn";
        this.setState({searchQuery}); // Save to state
        this.search(searchQuery); // Search
    }

    search(searchQuery) {
        const url = `https://api.yummly.com/v1/api/recipes?_app_id=f009d8ed&_app_key=51efe345d8aee0dfafd461250280bd9b&q=${searchQuery}&maxResult=3`
        Request.get(url).then((response) => {
            this.setState({
                recipe: response.body.matches[0]
            });
            console.log(response.body.matches)
        });
    }
}

export default Food;
