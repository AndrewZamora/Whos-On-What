import React, { Component } from 'react';
import Celebrity from './Celebrity';

class Main extends Component {
    render() {
        const url = `url`;
        const file = `file`;
        return (
            <main>
            <Celebrity inputType={url}/>
            <Celebrity inputType={file}/>
            </main>
        );
    }
}

export default Main;
