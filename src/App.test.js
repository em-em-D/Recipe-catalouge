import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ApiRequest from "./Api";

it("Api testing", async function () {
  const response = new ApiRequest();
  var data = await response.api();
  expect(data.category[0].id).toEqual("1");
});
