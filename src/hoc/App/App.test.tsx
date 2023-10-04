import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

test("View content", () => {
  render(<App />);

  // the first loading will return spinner
  const fullName = screen.queryByText("Yurii Hurianov");

  expect(fullName).toBeNull();
});
