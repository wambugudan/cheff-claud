import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";


export default function ClaudRecipe(props){

    
    return (
        <div className="suggested-recipe-container">
            <h2 aria-live='polite'>Suggested Recipe</h2>
            
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {props.recipe}
            </ReactMarkdown>

        </div>
    )
}

// Explicit declaring props
ClaudRecipe.propTypes = {
    recipe: PropTypes.array.isRequired,
};