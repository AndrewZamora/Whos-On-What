import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Main from '../components/Main';

const IndexPage = () => (
  <Layout>
    <Main></Main>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
