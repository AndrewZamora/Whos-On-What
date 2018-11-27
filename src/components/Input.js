import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
    // Call onSubmit from Parent
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div>
              <div>
                <label htmlFor={this.props.type}>
                  {`${this.props.title} :`}</label>
                <input
                  id={this.props.type}
                  type={this.props.type}
                  name="input"
                  className="validate"
                  autoComplete="off"
                  value={this.state.input}
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
