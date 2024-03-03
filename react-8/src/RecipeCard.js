
// RecipeCard.js
import React, { useState } from 'react';
import IngredientsModal from './IngredientsModal';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="recipe-card">
      <img src={recipe.image} className="recipe-image" alt={recipe.label} />
      <div className="recipe-details">
        <h5 className="recipe-title">{recipe.label}</h5>
        <ul className="recipe-ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={handleShowModal}>View Ingredients</button>
        <button className="btn btn-primary" onClick={() => window.open(recipe.url, "_blank")}>View Recipe</button>
      </div>
      <IngredientsModal
        ingredients={recipe.ingredients.map(ingredient => ingredient.text)}
        show={showModal}
        onHide={handleCloseModal}
      />
    </div>
  );
}

export default RecipeCard;
