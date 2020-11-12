import React from 'react';
import styled from 'styled-components';

import peopel from './../images/peopel.jpg';

const Body = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    background: #2a2b2a; 
   filter: brightness(0.7);
  
`

const Fonts = styled.p`
font-family: 'Pacifico', cursive;
font-size: 40px;
color: white;
text-align: center;
`

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <Body>
          <Fonts>
              Hold on, fetching data may take some time ...
             </Fonts>
      </Body>         
            );
  };
}
export default WithListLoading;
