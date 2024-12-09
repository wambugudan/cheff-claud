import { useState } from "react"
import ClaudRecipe from "./ClaudRecipe"
import IngridientsList from "./IngridientsList"
import { getRecipeFromMistral } from "../ai"


export default function MainSection(){
    
    const [ingridients, setIngridients] = useState([])
    const [recipe, setRecipe] = useState("");


    const ingridientsList = ingridients.map(ingridient => (
        <li key={ingridient}>{ingridient}</li>
    ))


    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingridients)
        setRecipe(recipeMarkdown)
    }

    // const addIngridient = function (formData){
    //     const newIngridient = formData.get("ingridient")
    //     setIngridients(prevIngridients => [...prevIngridients, newIngridient])
    // }


    function addIngridient(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngridient = formData.get("ingridients")
        setIngridients(prevIngridients => [...prevIngridients, newIngridient])
        document.getElementById("ingridient").value = ""
    }


    return(
        <>
            <form className="add-ingidient-form" onSubmit={addIngridient}>
                <input 
                    type="text"
                    placeholder="e.g beans"
                    aria-label="Add Ingridient"
                    name="ingridients"
                    id="ingridient" 
                />

                <button>Add Ingridients</button>
                
            </form>

            <div className="recipe-content-area">
                {ingridients.length === 0 ? null :<h2 className="ingridients-title">Ingridients on hand:</h2>}

                <ul>
                    {ingridientsList}
                </ul>


                {/* Dispay generate recipe container based on given condition */}
                {   
                    ingridients.length < 4 ? null : <IngridientsList getRecipe = {getRecipe} />
                }
            </div>

            {/* Render recipe based on the set condition */}

            { recipe && <ClaudRecipe recipe = {recipe}
            /> }
        </>
        
    )
}