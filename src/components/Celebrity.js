import React, { Component } from 'react';
import Input from './Input';
const Clarifai = require('clarifai');
  const app = new Clarifai.App({
    apiKey: `${process.env.GATSBY_CLARIFAI_API_KEY}`
  });

function onSubmit(submitInfo) {
  console.log(`${submitInfo.input}`)
  app.models.predict("e466caa0619f444ab97497640cefc4dc",`${submitInfo.input}`).then(
    function(response) {
     console.log(response)
    },
    function(err) {
      console.log(err)
    }
  );
};

class Celebrity extends Component {
  render() {
    return (
      <div>
        <Input 
        onSubmit={onSubmit}
        type={`url`}
        title={`Picture-URL`} />
      </div>
    );
  }
}

export default Celebrity;
