import React, { Component } from "react";
import Layout from '../components/layout'
import Celebrity from '../components/Celebrity'

class UrlPage extends Component {
    render() {
        return (
            <Layout>
              <Celebrity inputType={`url`}/>
            </Layout>
        );
    }
}

export default UrlPage;
