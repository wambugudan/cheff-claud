export default function ClaudRecipe(props){
    
    return (
        <div className="suggested-recipe-container">
            <h2>Suggested Recipe</h2>
            <p>Based on the provided recipe, I suggests <strong>Beef Stew Chapati</strong> recipe </p>
            <h3>Ingridients</h3>
            {props.ingridients}
            <h3>Instructions</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Libero fugit incidunt tempora voluptatem hic quas unde 
                ex sit tempore nihil eligendi numquam quasi porro ea, 
                similique aliquid fugiat ullam quis.
            </p>
        </div>
    )
}