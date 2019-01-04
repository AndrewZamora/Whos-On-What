import React, { Component } from "react";
import './Input.css';

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
        let stripped = reader.result.replace(/^data:image\/[a-z]+;base64,/gi, "")
        let base64Result = `${stripped}`;
        this.setState({
          input: { base64: base64Result }
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
    const { type,title } = this.props;
    return (
      <div>
        <div>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div>
              <div>
                <input
                  id={type}
                  type={type}
                  name="input"
                  className="validate"
                  autoComplete="off"
                  onChange={event => this.handleChange(event)}
                />
                <label
                  htmlFor={type}>
                  {`${title}`}</label>
              </div>
            </div>
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
