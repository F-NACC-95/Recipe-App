import React, { Component } from 'react';

class RecipePage extends Component {
    state = {
        currentRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe
        const api_key = '7ce87499e0323106b2d0ce31162933f5';
        const request = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${title}`);
        const response = await request.json()

        this.setState({
          currentRecipe: response.recipes[0]
        })
    }

    render() {
        return (
            <div className="recipe__page__div">
                <div className="recipe__page__title">{this.state.currentRecipe.title}</div>
                <div className="recipe__page__publisher">Published by {this.state.currentRecipe.publisher}</div>
                <div className="recipe__page__image__url"><img src={this.state.currentRecipe.image_url} alt={this.state.currentRecipe.title} /></div>
                <div className="recipe__page__source__url"><a href={this.state.currentRecipe.source_url} >Click here to learn more about this recipe</a></div>
            </div>
        );  
    }
}

export default RecipePage