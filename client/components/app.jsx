import React from 'react';
import UserLogin from './user-login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: null,
      // isLoading: true
      view: {
        name: 'user-login',
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
    if (this.state.view.name === 'user-login') {
      appView = <UserLogin
        setView={this.setView}
      />;
    }
    return (
      <div>{appView}</div>
    );
  }
}
