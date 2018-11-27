import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Celebrity from '../components/Celebrity';

const IndexPage = () => (
  <Layout>
    <Celebrity />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
