import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout";

describe("Blocks", () => {
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
    expect(screen.queryByText("Yurii Hurianov")).toBeNull();
  });

  test("Content will be rendered", () => {
    // @ts-ignore
    render(<Layout blocks={blocks} />);
    expect(screen.queryByText("Yurii Hurianov")).toBeInTheDocument();
  });
});
