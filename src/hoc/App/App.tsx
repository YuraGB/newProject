/**
 * App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from "react";

import "./App.css";
import Layout from "../Layout/Layout";
import { ContainerProps } from "../types";
import ContentComponent from "../../components/Content/ContentComponent";
import { useContent } from "../../components/Content/useContent";
import SpinnerComponent from "../../components/Spinner/SpinnerComponent";
import NotFoundComponent from "../../components/Content/NotFoundComponent/NotFoundComponent";

/**
 * App
 *
 * @return {*} JSX.Element
 */
const App: React.FC<ContainerProps> = (): JSX.Element => {
  const { blocks } = useContent();

  if (!blocks) {
    return <SpinnerComponent />;
  }

  if (typeof blocks === "string") {
    return <NotFoundComponent />;
  }

  return (
    <Layout blocks={blocks}>
      <ContentComponent blocks={blocks} />
    </Layout>
  );
};

export default App;
