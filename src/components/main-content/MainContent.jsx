import "./MainContent.css"

export default function MainContent() {
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                />
                <button>Add Ingredient</button>
            </form>
        </main>
    )
}