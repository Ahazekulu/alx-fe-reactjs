import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

const FavoritesList = () => {
  const [favorites, recipes] = useRecipeStore(
    (state) => [state.favorites, state.recipes],
    shallow
  );

  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // Remove undefined if a favorite ID doesn't match a recipe

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
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

export default FavoritesList;