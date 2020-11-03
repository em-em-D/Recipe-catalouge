import React from 'react';
const List = (props) => {
  const { recipes } = props;
  if (!recipes || recipes.length === 0) return <p>No repcipes, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available recipe</h2>
      {recipes.map((recipe) => {
        return (
          <li key={recipe.categories} className='list'>
            <span className='repo-text'>{recipe.name} </span>
            <span className='repo-description'>{recipe.ingredients}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;