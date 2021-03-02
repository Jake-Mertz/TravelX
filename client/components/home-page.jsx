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
        <button onClick={() => this.props.setView('profile', {})}>Profile</button>
      </div>
    );
  }
}

export default HomePage;
