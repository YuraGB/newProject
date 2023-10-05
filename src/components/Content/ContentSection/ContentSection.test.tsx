import React from "react";
import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ContentSection from "./ContentSection";

describe("ContentSection tests", () => {
  const SECTION_TITLE = "Title";

  test("ContentSection with title", async () => {
    render(<ContentSection title={SECTION_TITLE} />);
    const submitButton = screen.queryByText(SECTION_TITLE);
    expect(submitButton).toBeInTheDocument();
  });

  test("match snapshots about me component", () => {
    // @ts-ignore
    const tree = renderer
      .create(<ContentSection title={SECTION_TITLE} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
