import React from 'react';
import styled from 'styled-components';
import {TweenMax, Power3} from 'gsap';
import Parallax from 'parallax-js';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './App.scss';

const Circle = styled.div`
 width: 115px;
 height: 95px;
 border-radius:100%;
 background-color: #ffff;
 margin: 50px;
`

const List = (props) => {
  const { recipes } = props;
  console.log('rs',recipes)
  if (!recipes || recipes.length === 0) return <p>No repcipes, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available recipe</h2>
      {recipes.map((recipe) => {
        return (
          <li key={recipe.idMeal} className='list'>
            <span className='repo-text'>{recipe.strMeal} </span>
            <img
            className="round"
            src={recipe.strMealThumb}
            alt="Recipe Cover"
          />
          </li>
        );
      })}
    </ul>
  );
};
export default List;