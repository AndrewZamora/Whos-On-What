import React, { Component } from "react";
import Layout from '../components/layout'
import Celebrity from '../components/Celebrity'

class PicPage extends Component {
    render() {
        return (
            <Layout>
                <div style={{marginTop: '4em'}}>
                <Celebrity inputType={`file`} title="Upload" />
                </div>
            </Layout>
        );
    }
}

export default PicPage;
