import React, { Component } from 'react';
import Celebrity from './Celebrity';

class Main extends Component {
    render() {
        const url = `url`;
        const file = `file`;
        const mainStyle = {
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }
        return (
            <main style={mainStyle}>
            <Celebrity inputType={url}/>
            <Celebrity inputType={file}/>
            </main>
        );
    }
}

export default Main;
