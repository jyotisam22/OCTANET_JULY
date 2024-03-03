// src\App.jsx
import React, { useState } from 'react';
import RecipeList from './RecipeList';
import SearchForm from './SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const ID = "f8db2f80";
const key = "62b0e2e4bb230de88123b83a5d069193";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${key}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="app">
       <h1>Food Recipe Plaza 🍔</h1>
      <SearchForm onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
