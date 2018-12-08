import React, { Component } from "react";
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Celebrity from '../components/Celebrity'

class UrlPage extends Component {
    render() {
        return (
            <Layout>
              <Link to='/'>Back</Link>
              <Celebrity inputType={`url`}/>
            </Layout>
        );
    }
}

export default UrlPage;
