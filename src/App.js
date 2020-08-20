import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Recipe from './Recipe.component.js';
import './App.css';

const App = () => {
  const APP_ID = 'bbd0ec31';
  const APP_KEY = '9c0870aaa3cb69c2d6135078ccd73173';

  const [qValue, set_qValue] = useState('');
  const [recipes, setRecipes] = useState([]);

  const API_GET = `https://api.edamam.com/search?q=${qValue}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    axios
      .get(API_GET)
      .then((res) => {
        setRecipes(res.data.hits);
        console.log(Array.from(res.data.hits));
      })
      .catch((err) => console.log('Error: ' + err));
  };

  return (
    <div className='container'>
      <div className='App'>
        <br />
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Ingredient App
        </h1>
        <hr />
        <form className='search-form'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control keyword-field'
              placeholder='Enter Dish'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
              onChange={(e) => set_qValue(e.target.value)}
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-secondary'
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  getRecipes();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className='recipes'>
          {recipes.map((r) => (
            <Recipe
              key={r.recipe.label}
              title={r.recipe.label}
              calories={Math.round(Number(r.recipe.calories))}
              foodimg={r.recipe.image}
              ingr={Array.from(r.recipe.ingredients)}
              time={r.recipe.totalTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
