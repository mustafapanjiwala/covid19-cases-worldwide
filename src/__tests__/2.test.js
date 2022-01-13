import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("should have map div", () => {
  const view = render(<App />);
  //   fireEvent.click(getByTestId(1));
  //   fireEvent.click(getByTestId(1));
  //   fireEvent.click(getByTestId(1));
  //   fireEvent.click(getByTestId(1));
  expect(view.getByTestId("map")).toBeInTheDocument();
  //done
});
