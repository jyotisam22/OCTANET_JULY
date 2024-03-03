
// RecipeCard.js
import React from 'react';
import './RecipeCard.css'; // Import custom CSS file for styling

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} className="recipe-image" alt={recipe.label} />
      <div className="recipe-details">
        <h5 className="recipe-title">{recipe.label}</h5>
        <ul className="recipe-ingredients">
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient.foodId}>{ingredient.text}</li>
          ))}
        </ul>
        <a href={recipe.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Recipe</a>
      </div>
    </div>
  );
}

export default RecipeCard;
