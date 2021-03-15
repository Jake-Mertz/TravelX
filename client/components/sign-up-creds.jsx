import React from 'react';

class SignUpCredentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.signUpCredSubmit = this.signUpCredSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  signUpCredSubmit(event) {
    // event.preventDefault();
    this.props.handleUserSubmit(this.state.name, this.state.email, this.state.password);
    // props.setView('sign-up-photo', {});
  }

  render() {
    return (
      <div className="intro-page-container">
        <button
          onClick={() => this.props.setView('landing-page', {})}
          className="back-button">Back
        </button>
        <div className="intro-content-container">
          <h1 className="intro-logo">TravelX</h1>
          <h3 className="welcome-text">Welcome solo traveler</h3>
          <form className="sign-up-creds-form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What is your name?"
              className="sign-up-form-input"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="What is your email?"
              className="sign-up-form-input"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Create a password"
              className="sign-up-form-input"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
            <input
              type="submit"
              value="Submit"
              className="intro-form-submit"
              onClick={() => this.signUpCredSubmit()}>
            </input>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpCredentials;
