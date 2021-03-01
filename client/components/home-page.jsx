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
        <button>Profile</button>
      </div>
    );
  }
}

export default HomePage;
