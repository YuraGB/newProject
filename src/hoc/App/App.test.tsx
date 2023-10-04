import React from "react";
import {
  screen,
  render,
  act,
  renderHook,
  waitFor,
} from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  test("The first loading will not have any data", async () => {
    // component with state conditions
    const promise = Promise.resolve();
    render(<App />);

    //
    // @ts-ignore
    const fullName = screen.queryByText("Yurii Hurianov");

    expect(fullName).toBeNull();
    await promise;
  });

  test("App loads resume data", async () => {
    const { container } = render(<App />);
    await waitFor(() => {
      expect(container).not.toBeNull();
    });
  });
});
