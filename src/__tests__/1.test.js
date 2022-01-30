import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("should have main  div", () => {
  const view = render(<App />);
  expect(view.getByTestId("main")).toBeInTheDocument();
});
