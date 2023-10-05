import React from "react";
import { screen, render } from "@testing-library/react";
import AboutMeComponent from "./AboutMeComponent";
import renderer from "react-test-renderer";

describe("AboutMeComponent tests", () => {
  const data = "test string for about me component";
  const SECTION_TITLE = "About Me";

  test("About me component with no props data", async () => {
    render(<AboutMeComponent />);
    const title = screen.queryByText(SECTION_TITLE);
    expect(title).not.toBeInTheDocument();
  });

  test("App loads resume data", async () => {
    render(<AboutMeComponent about_me={data} />);

    const aboutMeTitle = screen.queryByText(SECTION_TITLE);

    expect(aboutMeTitle).toBeInTheDocument();
  });

  test("match snapshots about me component", () => {
    // @ts-ignore
    const tree = renderer.create(<AboutMeComponent about_me={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
