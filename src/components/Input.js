import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = event => {
    // FILE UPLOAD
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let stripped = reader.result.replace(/^data:image\/[a-z]+;base64,/gi,"")
        let base64Result = `${stripped}`;
        this.setState({
          input:{base64:base64Result}
        })
      }
    }
    // TEXT
    this.setState({
      [event.target.name]: event.target.value
    });
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