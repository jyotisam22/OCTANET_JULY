// RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
