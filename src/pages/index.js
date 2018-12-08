import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "./index.css";

const IndexPage = () => (
  <Layout>
    <div className="index-container">
    <div className="text-container">
      <p>
       <span>Who's On What?</span> recognizes an actor with an upload of a picture or image url. Give it a try so you don't have to ask yourself Who's on what film or TV show.
      </p>
    </div>
    <div className="link-container">
    <Link className="index-links" to="/PicPage/">Picture</Link>
    <Link className="index-links" to="/UrlPage/">Url</Link>
    </div>
    </div>
  </Layout>
)

export default IndexPage
