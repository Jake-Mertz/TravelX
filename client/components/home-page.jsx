import React from 'react';
import UserCard from './user-card';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userList: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('/api/mapHome', { method: 'GET' })
      .then(res => res.json())
      .then(data => this.setState({ userList: data }));
  }

  render() {
    const userListRender = this.state.userList.map(user => {
      return (
        <div key={user.userId}>
          <UserCard
            name={user.name}
            artsandculture={user.artsandculture}
            food={user.food}
            leisure={user.leisure}
            nightlife={user.nightlife}
            shopping={user.shopping}
            sightseeing={user.sightseeing}
            hiking={user.hiking}
          />
        </div>
      );
    });
    return (
      <div className="page-container">
        {/* <button onClick={() => this.props.setView('profile-page', {})}>Profile</button> */}
        <div className="header">
          <h1 className="home-logo">TravelX</h1>
          <h3 className="slogan-text">Solo travel made easier</h3>
        </div>
        <div className="user-list-container">
          <div className="user-list">{userListRender}</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
