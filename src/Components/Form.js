import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.FetchRecipes} className='form'>
                <input type='text' name='recipe' placeholder='Search for recipes...'/>
                <button>Search</button>
            </form>
        </div>
    )
}   

export default Form