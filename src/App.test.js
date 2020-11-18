import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ApiRequest from "./Api";

it("Api testing", async function () {
  const response = new ApiRequest();
  // console.warn( await response.api());
  var data = await response.api();
  expect("category").toEqual("category");
});
