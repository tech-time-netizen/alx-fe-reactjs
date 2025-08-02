// Import the recipe store hook to access recipe data and actions
import useRecipeStore from "../store/recipeStore";

// RecipeList component displays all recipes with options to delete and update
const RecipeList = () => {
    // Destructure recipes array and action functions from the store
    const { recipes, deleteRecipe, updateRecipe } = useRecipeStore();

    return (
        <div>
            <h1>Recipe List</h1>
            {/* Render a list of all recipes */}
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        {/* Display recipe name as heading */}
                        <h3>{recipe.name}</h3>
                        {/* Display recipe description */}
                        <p>{recipe.description}</p>
                        {/* Display ingredients as comma-separated list */}
                        <p>{recipe.ingredients.join(", ")}</p>
                        {/* Display cooking instructions */}
                        <p>{recipe.instructions}</p>
                        {/* Delete button - removes recipe from store */}
                        <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                        {/* Update button - modifies recipe name (example update) */}
                        <button onClick={() => updateRecipe(recipe.id, { ...recipe, name: "Updated Recipe" })}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Export the component for use in other parts of the app
export default RecipeList;