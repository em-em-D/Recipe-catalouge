import React from 'react';
import styled from 'styled-components';
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
 &:hover .content {
   height: 280px;
   margin-top: -40px !important;
   transition-delay: 0.1s ;
   visibility: visible;
   opacity: 1 !important;
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
font-family: 'Pacifico', cursive;
margin-top: -90px;
padding: 10px 15px;
text-align: center;
visibility: hidden;
transition: 0.3s ease-in-out;

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
         
            <Card>
                  <Imagebox>
                        <Picture 
                            src={recipe.strMealThumb}
                         />
                    </Imagebox>
                    <Content className="content">
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