import React, { useEffect, useState, useRef } from 'react';
import {TweenMax, Power3} from 'gsap';
import styled from 'styled-components';
import Parallax from 'parallax-js';
import List from './components/list';
import back from './images/back.jpg';
import backping from './images/backping.jpg';
import peopel from './images/peopel.jpg';
import strong from './images/strong.jpg';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import withListLoading from './components/listloading';
import categories from './allCategories';
import './App.scss';

Swiper.use([Navigation, Pagination]);

const Body = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: "Roboto";
    line-style: none;
    box-sizing: border-box;
    background: #fceade; 
   filter: brightness(0.9)
`
const Section = styled.section`
  height: 100vh;
  overflow: hidden;
`
//rock1
const Hg = styled.img`
  position: absolute !important;
  width:195vh;
  height: 50vh;
  top: 1vh;
`
//earth
// const Stong = styled.img`
//     width:205vh;
//     height:50vh;
//     position: absolute;
//     left:0;
//     top:50vh;
//     z-index: 1;
//     filter: brightness(0.9);
// `

const Text = styled.h1`
  font-family: "AlphaCentauri" !important;
  font-size: 5vw;
  color: #ea5d74;
  letter-spacing:20px;
  position: absolute;
  top: 35vh;
  left:64vh;
`

// var scene = document.getElementById('scene');
//     var parallaxInstance = new Parallax(scene, {
//       relativeInput: true
//     });


function App() {

  
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    recipes: [],
  });
const categoriesResult = [];
  useEffect(() => {
      setAppState({ loading: true });
    categories.map( category => {
      fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category} ` )
        .then( res => {
          return res.json()
        } ).then( res => {
          console.log('r', res )
          console.log('l',categoriesResult.length)
          console.log('c',categoriesResult)
          setAppState({ loading: false, recipes: categoriesResult });
          categoriesResult.push( ...res.meals );
        } )
    } );
    // console.log('ct',categoriesResult.length)
    // setAppState({ loading: false, recipes: categoriesResult });
    // console.log('ct',categoriesResult.length)
    }, [setAppState]);

    
  
  return (
   
    <Body>
      {/* <Section>
          <div id="scene">
             <Hg  src={back} ></Hg>  
            
             <div data-depth="0.1" className="veg1">
              <Stong  src={strong} ></Stong>
            </div>
            <div data-depth="0.2" className="veg2">
              <img src={peopel} ></img>
            </div>
            <div data-depth="0.1"className='text'>
              <Text id="scene">RECIPES</Text>
             </div> 
          </div>
      </Section> */}
      
      <div className="circle-container">
            <ListLoading isLoading={appState.loading} recipes={appState.recipes} />
      </div>
    </Body>
  );
}
export default App;