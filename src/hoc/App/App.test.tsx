import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import App from "./App";
import Resume from "../../DataBase/database_connection";
import { IResumeBlocks } from "../../components/Content/useContent";

describe("App tests", () => {
  test("The first loading will not have any data", async () => {
    // component with state conditions
    const promise = Promise.resolve();
    render(<App />);

    // first render will be Spinner
    // @ts-ignore
    const fullName = screen.queryByText("Yurii Hurianov");

    expect(fullName).toBeNull();
    await promise;
  });

  test("App renders all data", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Education")).toBeInTheDocument();
    });
  });

  test("fetch data", async () => {
    const getBlocks: string | IResumeBlocks[] = await Resume;
    expect(JSON.stringify(getBlocks)).toContain("Hurianov");
  });
});
