import React from "react";
import styled from "styled-components";

const Fonts = styled.p`
  font-family: "Pacifico", cursive;
  font-size: 40px;
  color: white;
  text-align: center;
`;

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <>
        <Fonts>Hold on, fetching data may take some time ...</Fonts>
      </>
    );
  };
}
export default WithListLoading;
