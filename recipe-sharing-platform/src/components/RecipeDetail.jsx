import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json'; // Assuming data.json is in src/

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-md h-64 object-cover rounded-lg mb-4"
      />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <p className="text-gray-700 mb-4">{recipe.ingredients || 'No ingredients listed.'}</p>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions || 'No instructions provided.'}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;