import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        <h1>Home Page!</h1>
        <button onClick={() => this.props.setView('profile-page', {})}>Profile</button>
      </div>
    );
  }
}

export default HomePage;
