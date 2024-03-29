import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Layout from "./Layout";

describe("Layout tests", () => {
  const blocks = {
    Languages: "",
    skills: { test: "test" },
    social_links: { test: "test" },
    Education: {
      title: "",
      url: "",
      description: {
        title: "",
        url: "",
      },
    },
    about_me: "",
    profile: {
      first_name: "Yurii",
      last_name: "Hurianov",
      sub_title: "",
    },
    contact_info: "",
    work_experience: {
      test: {
        duties: [""],
        projects: [""],
      },
    },
  };

  test("Content wouldn't be rendered", () => {
    // @ts-ignore
    render(<Layout blocks={null} />);
    // @ts-ignore
    expect(screen.queryByText("Yurii Hurianov")).toBeNull();
  });

  test("the full name is in document", () => {
    // @ts-ignore
    render(<Layout blocks={blocks} />);
    expect(screen.queryByText("Yurii Hurianov")).toBeInTheDocument();
  });

  test("the full name is in document2", () => {
    // @ts-ignore
    render(<Layout blocks={blocks} />);
    // @ts-ignore
    expect(screen.queryByText("Yurii Hurianov")).toBeInTheDocument();
  });

  test("match snapshots", () => {
    // @ts-ignore
    const tree = renderer.create(<Layout blocks={blocks} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
