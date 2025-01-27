import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const remainingCharacters = this.props.maxChars - this.state.value.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
        <p>Remaining Characters: {remainingCharacters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
