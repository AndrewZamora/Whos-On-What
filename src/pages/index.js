import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Main from '../components/Main';

const IndexPage = () => (
  <Layout>
    <Link to="/PicPage/">Picture</Link>
    <Link to="/UrlPage/">Url</Link>
  </Layout>
)

export default IndexPage
