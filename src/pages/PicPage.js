import React, { Component } from "react";
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Celebrity from '../components/Celebrity'

class PicPage extends Component {
    render() {
        return (
            <Layout>
              <Link to='/'>Back</Link>
              <Celebrity inputType={`file`}/>
            </Layout>
        );
    }
}

export default PicPage;
