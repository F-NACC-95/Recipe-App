import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.FetchRecipes} className='form'>
                <input type='text' name='recipe' placeholder='Enter a search term...'/>
                <button class="form__button">Find Recipes</button>
            </form>
        </div>
    )
}   

export default Form