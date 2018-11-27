import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  };

  handleSubmit = event => {
    event.preventDefault();
    // Call on submit from parent (LoginPage)
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <div>
          <form onSubmit={event => this.handleSubmit(event)}>
            {/* ---password--- */}
            <div>
              <div>
                <label htmlFor="url">{`${this.props.title}`}: </label>
                <input
                  id="url"
                  type="url"
                  name="url"
                  className="validate"
                  autoComplete="off"
                  value={this.state.url}
                  onChange={event => this.handleChange(event)}
                />
              </div>
            </div>
            {/* ---Submit--- */}
            <button type="submit" name="action">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Input;
