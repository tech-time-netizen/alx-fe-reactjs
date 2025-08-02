import useRecipeStore from "./recipeStore";
import { useState } from "react";

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({
            id: Date.now(),
            name: title,
            description: description,
        });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Recipe</button>
        </form>
    )
}
export default AddRecipeForm;