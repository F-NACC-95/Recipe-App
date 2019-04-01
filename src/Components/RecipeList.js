import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = (props) => {
    return (
        <div className='recipe__list__div'>
            <ul className="recipe__list__grid">
                {props.CurrentRecipeList.length === 0 && <h4 className='recipe__list__enter__message'>Enter a search term to view recipes...</h4>}
                {props.CurrentRecipeList.length > 0 && props.CurrentRecipeList.map(currentRecipe => {
                    return (
                    <div className='recipe__list__map__through' key={currentRecipe.question_id}>
                        <div>
                            <li className='recipe__list__title'>{currentRecipe.title.length > 22 ? currentRecipe.title.slice(0, 22) + '...' : currentRecipe.title}</li>
                        </div>
                        <div>
                            <img className='recipe__list__img' src={currentRecipe.image_url} alt={currentRecipe.title + ' img'}/>
                        </div>
                        <div>
                            <p className='recipe__list__rank'>Recipe Rank: {Math.floor(currentRecipe.social_rank)} / 100</p>
                        </div>
                        <div>
                            <button className='recipe__list__buttons'>
                                <Link className='recipe__list__link' to={{ 
                                    pathname: `/recipe/${currentRecipe.recipe_id}`,
                                    state: { recipe: currentRecipe.title } 
                                }}>
                                    View Recipe
                                </Link>
                            </button>
                        </div>
                    </div>
                    );
                })}
            </ul>
        </div>
    )
}   

export default RecipeList

