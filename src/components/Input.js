import React, { Component } from "react";
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      preview: ''
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
          input: { base64: base64Result },
          preview: reader.result
        });
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
    const { type, title } = this.props;
    const { preview, input } = this.state;
    const imgStyle = {
      display: 'block',
      maxHeight: '30vh'
    }
    return (
      <div>
        <div>
          <form style={styles.form} onSubmit={event => this.handleSubmit(event)}>
              <div style={type === 'url'? styles.urlContainer: styles.fileContainer}>
                <input
                  autoFocus={type === 'url' ? true : false}
                  id={type}
                  type={type}
                  name="input"
                  className="validate"
                  autoComplete="off"
                  onChange={event => this.handleChange(event)} />
                <label htmlFor={type}>{`${title}`}</label>
            </div>
            {preview.length > 0 && <img src={preview} alt="Preview" style={imgStyle} />}
            {input && <button style={styles.submit} type="submit" name="action">Submit</button>}
          </form>
        </div>
      </div>
    );
  }
}

export default Input;

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  urlContainer: {
    display: 'flex',
    width: '60vw',
    flexDirection:'row-reverse',
    marginTop: '30vh'
  },
  fileContainer: {
    width: '100%',
  }
}