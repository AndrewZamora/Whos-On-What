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
            status: 'error'
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
    const { inputType, title } = this.props;
    return (
      <div style={{ color: '#fff', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {this.state.name.length === 0 &&
          <Input onSubmit={this.onSubmit} type={inputType} title={title} />}
          {this.state.name.length > 0 &&
          <div style={{width: "90%"}}>
            <h2>Actor's Name: {this.state.name}</h2>
            </div>}
        {this.state.status === "loading" && <LoadWidget />}
        {this.state.status === "error" &&
          <h2>aww.. <span aria-label="poop" role="img">💩</span> there was an error!</h2>}
      </div>
    );
  }
}

export default Celebrity;
