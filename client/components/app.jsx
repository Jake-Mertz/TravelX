import React from 'react';
import LandingPage from './landing-page';
import SignUpPhoto from './sign-up-photo.jsx';
import SignUpInterests from './sign-up-interests';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: null,
      // isLoading: true
      view: {
        name: 'sign-up-interests',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
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
      appView = <SignUpPhoto />;
    } else if (this.state.view.name === 'sign-up-interests') {
      appView = <SignUpInterests />;
    }
    return (
      <div>{appView}</div>
    );
  }
}
