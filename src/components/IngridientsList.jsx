import PropTypes from 'prop-types';

export default function IngridientsList(props){
    return (
        <div className="generate-recipe-container">
            <div className="generate-recipe-text" >
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe for your list of ingridients</p>
            </div>
            <button onClick={ props.getRecipe}>Get a recipe</button>
        </div>
    )
}

IngridientsList.propTypes = {
    getRecipe: PropTypes.func.isRequired,
};