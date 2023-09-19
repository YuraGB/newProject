import React from 'react'

import './App.css'
import Layout from '../Layout/Layout'
import ContentComponent from '../../components/Content/ContentComponent'
import {ContainerProps} from "../types";

const App: React.FC<ContainerProps> = (): JSX.Element =>{
  return (
    <Layout>
      <ContentComponent />
    </Layout>
  )
}

export default App
