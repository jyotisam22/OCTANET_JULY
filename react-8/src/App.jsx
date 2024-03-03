// src\App.jsx
import React, { useState } from 'react';
import RecipeList from './RecipeList';
import SearchForm from './SearchForm';
import './App.css'; // Import custom CSS file for styling
// import logo from './logo.png'; // Import your logo image
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            {/* <img src={logo} alt="Logo" className="logo" /> */}
            Food Recipe Plaza 🍔
          </a>
        </div>
      </nav>
      <div className="container mt-4">
        <SearchForm onSearch={handleSearch} />
        <RecipeList recipes={recipes} />
      </div>
    </div>

  // return (
  //   <div className="app">
  //      <h1>Food Recipe Plaza 🍔</h1>
  //     <SearchForm onSearch={handleSearch} />
  //     <RecipeList recipes={recipes} />
  //   </div>
  );
}

export default App;
