import React, { Component } from "react";
import Layout from '../components/layout'
import Celebrity from '../components/Celebrity'

class UrlPage extends Component {
    render() {
        return (
            <Layout>
                <div style={{paddingTop:"2em"}}>
                <Celebrity inputType={`url`} title="URL"/>
                </div>
            </Layout>
        );
    }
}

export default UrlPage;
