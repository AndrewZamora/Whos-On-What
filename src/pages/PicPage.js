import React, { Component } from "react";
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Celebrity from '../components/Celebrity'

class PicPage extends Component {
    render() {
        return (
            <Layout>
                <Celebrity inputType={`file`} />
            </Layout>
        );
    }
}

export default PicPage;
