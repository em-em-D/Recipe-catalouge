import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Parallax from 'parallax-js';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';



const Card = styled.div`
 max-width: 300px;
 position: relative;
 margin: 30px 10px;
 background: #fff;
 padding: 20px 15px;
 display: flex;
 flex-direction: column;
 box-shadow: 0 5px 202px rgba(0,0,0,0.5);
 transition: 0.5s ease-in-out;
 &:hover {
   height: 420px;
   margin-top: -0px !important;
   transition-delay: 0.1s !important;
 }
 `;



const Imagebox = styled.div`
  position: relative;
  width: 290px;
  height: 260px;
  top: -60px;
  left: 2px;
  z-index: 2;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
`
const Picture = styled.img`
  max-width: 100%;
  border-radius: 4px;
`

const Content = styled.div`
position: relative;
font-size: 10px;
font-family: 'Pacifico', cursive;
margin-top: -90px;
padding: 10px 15px;
text-align: center;
visibility: hidden;
transition: 0.3s ease-in-out;
&:hover {
   visibility: visible !important;
   opacity: 1 !important;
   margin-top: -60px !important;
   color: red !important;
   transition-delay: 0.1s !important;
   z-index: 1000;
 }
`
// gsap.to("li",{duration: 2.5, autoAlpha:1, repeat: -1, stagger:5})
const List = (props) => {

  const { recipes } = props;
  console.log('rs',recipes)
  if (!recipes || recipes.length === 0) return <p>No repcipes, sorry</p>
  return (
    
     <>
      {recipes.map((recipe) => {
        return (
         
            <Card >
                  
                  <Imagebox>
                        <Picture 
                            src={recipe.strMealThumb}
                         />
                    </Imagebox>
                    
                            <Content >
                                    A recipe is a set of instructions that describes
                                    how to prepare or make something,
                                    especially a dish of prepared food.
                              </Content>
                     
            </Card>
        
        );
      })}
     </>
  );
};
export default List;