import React, { Component } from 'react';
import RecipeList from './Components/RecipeList';
import Form from './Components/Form';
import styles from './styles.css';

class App extends Component {
  state = {
    currentRecipeList: [],
  };

  fetchRecipes = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.recipe.value;
    const api_key = '7ce87499e0323106b2d0ce31162933f5';
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${searchTerm}&count=28`);
    const api_data = await api_call.json()

    this.setState({
      currentRecipeList: api_data.recipes
    })
  }

  render() {
    return (
      <div>
        <div className='app__component'>
          <h1 className='main__h1'>Recipe Search</h1>
          <Form FetchRecipes={this.fetchRecipes} />
        </div>
        <RecipeList CurrentRecipeList={this.state.currentRecipeList} />
      </div>
    );
  }
}

export default App;
