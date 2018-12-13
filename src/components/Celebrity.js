import React, { Component } from 'react';
import Input from './Input';
import LoadWidget from './LoadWidget';
import MovieDetails from './MovieDetails';

class Celebrity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: ''
    };
  }
  checkImg = img => {
    const Clarifai = require('clarifai');
    const app = new Clarifai.App({
      apiKey: `${process.env.GATSBY_CLARIFAI_API_KEY}`
    });
    this.setState({
      status: 'loading'
    })
    app.models.predict("e466caa0619f444ab97497640cefc4dc",
      img.input).then(response => {
        this.setState({
          status: '',
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
    if (this.state.name.length > 0) {
      this.setState({
        name: ''
      })
    }
  };
  render() {
    return (
      <div style={{ color: '#fff', display: 'flex', alignItems: 'center',flexDirection:'column' }}>
        <Input
          onSubmit={this.onSubmit}
          type={this.props.inputType}
          title={this.props.inputType} />
        {this.state.name.length > 0 &&
          <div>
            <h2>{this.state.name}</h2>
            <MovieDetails actor={this.state.name} />
          </div>
        }
        {this.state.status.length > 0 &&
          <LoadWidget />
        }
      </div>
    );
  }
}

export default Celebrity;
