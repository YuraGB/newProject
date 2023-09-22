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

/**
 * App
 *
 * @return {*} JSX.Element
 */
const App: React.FC<ContainerProps> = (): JSX.Element => {
  return (
    <Layout>
      <ContentComponent />
    </Layout>
  );
};

export default App;
