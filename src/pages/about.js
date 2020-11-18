import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-family: "Pacifico", cursive;
  font-size: 50px;
  color: #ffff;
  text-align: center !important;
`;
const H1 = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 20px;
  color: #ffff;
  text-align: center !important;
`;

export default function About() {
  return (
    <>
      <H2>About </H2>
      <H1>
        {" "}
        An online recipe catalog is great for caterers, chefs, and home cooks
        alike. Organize your favorite dishes, add notes, the ingredient list,
        instructions, and how long the prep and cook times are. Another great
        reason to move your recipes to an online catalog? You can email it to
        your friends if you're requesting or sharing a recipe, and you can even
        post it on your website or blog!
      </H1>
    </>
  );
}
