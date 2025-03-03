import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;