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
            artsnculture={user.artsnculture}
            food={user.food}
            leisure={user.leisure}
            nightlife={user.nightlife}
            shopping={user.shopping}
            sightseeing={user.sightseeing}
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
        <div className="user-list">{userListRender}</div>
        {/* <div className="home-search-results-container">
          <div className="home-hardcoded-user-example">
            <button className="airplane-photo"></button>
            <div className="home-hardcoded-user-example-info">
              <div className="home-hardcoded-user-example-name-and-percent-container">
                <h1 className="home-hardcoded-user-example-name">Donna, 27</h1>
                <div className="home-hardcoded-user-example-percent">98%</div>
              </div>
              <p>Interests: Hiking, Shopping, Museums, Photography, <br></br>
                Sightseeing, always looking for great places to eat.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default HomePage;
