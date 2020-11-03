import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list';
import withListLoading from './components/listloading';


function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    recipes: null,
  });
  
    useEffect(() => {
      setAppState({ loading: true });
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((recipes) => {
          setAppState({ loading: false, recipes: recipes });
        });
    }, [setAppState]);


  return (
    <div className='App'>
      <div className='container'>
        <h1>My Recipes</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} recipes={appState.recipes} />
      </div>
    </div>
  );
}

export default App;
