import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("should have main  div", () => {
  const view = render(<App />);
  //   fireEvent.click(getByTestId(1));
  //   fireEvent.click(getByTestId(1));
  //   fireEvent.click(getByTestId(1));
  //   fireEvent.click(getByTestId(1));
  expect(view.getByTestId("main")).toBeInTheDocument();
  //done
});
