import React, { Component } from 'react';
import Input from './Input';
const Clarifai = require('clarifai');
const app = new Clarifai.App({
  apiKey: `${process.env.GATSBY_CLARIFAI_API_KEY}`
});

class Celebrity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  onSubmit = submitInfo => {
    app.models.predict("e466caa0619f444ab97497640cefc4dc",
      `${submitInfo.input}`).then(response => {
        this.setState({
          name: response.outputs[0].data.regions[0].data.face.identity.concepts[0].name
        })
      },
        err => {
          console.log(err)
        }
      );
  };
  render() {
    return (
      <div>
        <Input
          onSubmit={this.onSubmit}
          type={`url`}
          title={`Picture-URL`} />
        {this.state.name.length > 0 &&
          <h2>{this.state.name}</h2>
        }
      </div>
    );
  }
}

export default Celebrity;
