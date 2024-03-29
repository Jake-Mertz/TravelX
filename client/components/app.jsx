import React from 'react';
import LandingPage from './landing/landing-page';
import SignUpPhoto from './landing/sign-up-photo';
import SignUpInterests from './landing/sign-up-interests';
import Login from './landing/login-page';
import SignUpCredentials from './landing/sign-up-creds';
import HomePage from './home/home-page';
import ProfilePage from './profile-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: null,
      // isLoading: true
      view: {
        name: 'home-page',
        params: {}
      },
      user: []
    };
    this.setView = this.setView.bind(this);
    this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  // Handle submission of user credentials upon completion
  // of first page in sign-up process (sign-up-creds.jsx)
  handleUserSubmit(name, email, password) {
    event.preventDefault();
    const userInfo = {
      name: name,
      email: email,
      password: password
    };
    // const newUserData = [];
    // const newUserData = this.state.user.slice();
    fetch('/api/createUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      // .then(data => console.log(data))
      // .then(() => this.setState({ user: newUserData }))
      .catch(err => console.error(err));
  }

  // Handle submission of user profile photo upon completion
  // of second page in sign-up process (sign-up-photo.jsx)
  handlePhotoSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('api/uploads', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json());
    // .then(() => event.target.reset());
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  // Some initial functionality for using state
  // for login feature.
  getUserProfile() {
    fetch('api/userTable')
      .then(res => res.json())
      .then(data => this.setState({ user: data }))
      .catch(err => console.error(err));
  }

  render() {
    // return this.state.isLoading
    //   ? <h1>Testing connections...</h1>
    //   : <h1>{this.state.message}</h1>;
    let appView = null;
    if (this.state.view.name === 'landing-page') {
      appView = <LandingPage
        setView={this.setView}
      />;
    } else if (this.state.view.name === 'sign-up-photo') {
      appView = <SignUpPhoto
        setView={this.setView}
      />;
    } else if (this.state.view.name === 'sign-up-interests') {
      appView = <SignUpInterests
        setView={this.setView}
      />;
    } else if (this.state.view.name === 'home-page') {
      appView = <HomePage
        setView={this.setView}
      />;
    } else if (this.state.view.name === 'login-page') {
      appView = <Login
        setView={this.setView}
      />;
    } else if (this.state.view.name === 'sign-up-creds') {
      appView = <SignUpCredentials
        setView={this.setView}
        handleUserSubmit={this.handleUserSubmit}
      />;
    } else if (this.state.view.name === 'profile-page') {
      appView = <ProfilePage
        setView={this.setView}
      />;
    }
    return (
      <div>{appView}</div>
    );
  }
}
