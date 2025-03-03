import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useState } from 'react';
import { useRecipeStore } from './store/recipeStore';

function App() {
  const [editingRecipe, setEditingRecipe] = useState(null);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link> |{' '}
        <Link to="/recommendations" onClick={generateRecommendations}>
          Recommendations
        </Link>
      </nav>
      <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetailsWrapper
              setEditingRecipe={setEditingRecipe}
              editingRecipe={editingRecipe}
            />
          }
        />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
      {editingRecipe && (
        <EditRecipeForm
          recipe={editingRecipe}
          onClose={() => setEditingRecipe(null)}
        />
      )}
    </div>
  );
}

const RecipeDetailsWrapper = ({ setEditingRecipe, editingRecipe }) => {
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <>
      <RecipeDetails recipeId={Number(window.location.pathname.split('/').pop())} />
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <button onClick={() => setEditingRecipe(recipe)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>Add Favorite</button>
          )}
        </div>
      ))}
    </>
  );
};

export default App;
