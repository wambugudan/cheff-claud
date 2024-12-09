import { useState } from "react";
import { getRecipeFromMistral } from "../ai"
import PropTypes from 'prop-types';
import { useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";


export default function ClaudRecipe(props){


    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [error, setError] = uEeState();


    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await getRecipeFromMistral(props.ingridients);
                setRecipe(response)
            } catch(err){
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [props.ingridients])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!recipe) return <div>No recipe found.</div>;


    
    return (
        <div className="suggested-recipe-container">
            <h2>Suggested Recipe</h2>
            
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {recipe}
            </ReactMarkdown>

        </div>
    )
}

ClaudRecipe.propTypes = {
    ingridients: PropTypes.array.isRequired,
};