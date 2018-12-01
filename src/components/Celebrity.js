import React, { Component } from 'react';
import Input from './Input';

class Celebrity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  checkImg = img => {
    const Clarifai = require('clarifai');
    const app = new Clarifai.App({
      apiKey: `${process.env.GATSBY_CLARIFAI_API_KEY}`
    });
    app.models.predict("e466caa0619f444ab97497640cefc4dc",
      img.input).then(response => {
        this.setState({
          name: response.outputs[0].data.regions[0].data.face.identity.concepts[0].name
        })
      },
        err => {
          console.log(err)
          this.setState({
            name: `Sorry there was an error!`
          })
        }
      );
  }
  onSubmit = submitInfo => {
    const regexUrl = /^https?:\/\//;
    if (regexUrl.test(submitInfo.input)) {
      this.checkImg(submitInfo);
    }
    this.checkImg(submitInfo);
  };
  render() {
    return (
      <div>
        <Input
          onSubmit={this.onSubmit}
          type={this.props.inputType}
          title={this.props.inputType} />
        {this.state.name.length > 0 &&
          <h2>{this.state.name}</h2>
        }
      </div>
    );
  }
}

export default Celebrity;
