import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import withListLoading from "./components/listloading";
import List from "./components/list";
import categories from "./allCategories";

const Body = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  background: #2a2b2a;
  filter: brightness(0.7);
`;

const Container = styled.div`
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`;
const H2 = styled.h2`
  font-family: "Pacifico", cursive;
  font-size: 50px;
  color: #ffff;
  text-align: center !important;
`;

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    recipes: [],
  });
  const categoriesResult = [];
  useEffect(() => {
    setAppState({ loading: true });
    categories.map((category) => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category} `)
        .then((res) => res.json())
        .then((res) => {
          setAppState({ loading: false, recipes: categoriesResult });
          categoriesResult.push(...res.meals);
        });
    });
  }, [setAppState]);

  return (
    <Body>
      <H2>Available recipes</H2>
      <Container>
        <ListLoading isLoading={appState.loading} recipes={appState.recipes} />
      </Container>
    </Body>
  );
}

React.forwardRef.propTypes = {
  categories: PropTypes.array,
};
export default App;
