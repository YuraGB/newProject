import React from 'react';

import './App.css';
import Layout from "./hoc/Layout/Layout";
import ContentComponent from "./components/Content/ContentComponent";

const App:React.FC = () => {
  return (
    <Layout>
      <ContentComponent/>
    </Layout>
  );
};

export default App;
