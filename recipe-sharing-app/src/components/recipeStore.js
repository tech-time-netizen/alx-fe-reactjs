import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set((state) => ({
        recipes:[...state.recipes, newRecipe]
    })),
    setRecipes: (recipes) => set({recipes}),
    deleteRecipe: (recipeId) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
    })),
    updateRecipe: (recipeId, updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) => recipe.id === recipeId ? updatedRecipe : recipe)
    }))
}))

export default useRecipeStore;