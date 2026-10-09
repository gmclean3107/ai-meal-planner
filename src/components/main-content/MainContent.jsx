import "./MainContent.css"
import { useState } from "react"

export default function MainContent() {

    const [ingredients, setIngredients] = useState([])
    const [ingredientText, setIngredientText] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        
        setIngredients([...ingredients, newIngredient])
        setIngredientText("")
    }

    function handleIngredientText(event) {
        setIngredientText(event.target.value)
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                    value={ingredientText}
                    onChange={handleIngredientText}
                />
                <button>Add Ingredient</button>
            </form>

            {ingredients.length > 0 && <h1>Ingredients on hand:</h1>}
            <ul>
                {ingredients.map((ingredient => {
                    return <li>{ingredient}</li>
                }))}
            </ul>
        </main>
    )
}