import React from 'react';
import LandingPage from './landing-page';
import SignUpPhoto from './sign-up-photo';
import SignUpInterests from './sign-up-interests';
import HomePage from './home-page';
import Login from './login-page';
import SignUpCredentials from './sign-up-creds';
import ProfilePage from './profile-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: null,
      // isLoading: true
      view: {
        name: 'landing-page',
        params: {}
      },
      userId: [],
      name: []
    };
    this.setView = this.setView.bind(this);
    this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserSubmit(userId, name, email, password) {
    const userInfo = {
      userId: userId,
      name: name,
      email: email,
      password: password
    };
    // const newUserData = this.state.user.slice();
    // const newUserId = this.state.userId.slice();
    // const newUserName = this.state.name.slice();
    fetch('/api/createUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      // .then(data => newUserId.push(data.userId))
      // .then(data => newUserName.push(data.name))
      // .then(() => this.setState({ userId: newUserId }))
      // .then(() => this.setState({ name: newUserName})
      // .then(res => res.json(this.state.userId, this.state.name))
      .catch(err => console.error(err));
  }

  handlePhotoSubmit(event) {
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
