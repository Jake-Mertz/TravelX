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
      // <div className="page-container">
      //   {/* <button onClick={() => this.props.setView('profile-page', {})}>Profile</button> */}
      //   <div className="header">
      //     <h1 className="home-logo">TravelX</h1>
      //     <h3 className="slogan-text">Solo travel made easier</h3>
      //   </div>
      //   <div className="user-list-container">
      //     <div className="user-list">{userListRender}</div>
      //   </div>
      // </div>
      <div className="page-container">
        <div className="home-top-row">
          <div className="travelx-logo">TravelX</div>
          <div className="add-trip-bar">
            <form className="add-trip-form">
              <div className="add-trip-input-container">
                <label className="add-trip-input-label">Destination</label>
                <input
                  type="text"
                  id="destination"
                  name="trip"
                  placeholder="Where are you going?"
                  className="add-trip-input"
                ></input>
              </div>
              <div className="add-trip-input-container">
                <label className="add-trip-input-label">Arrival</label>
                <input
                  type="text"
                  id="arrival"
                  name="trip"
                  placeholder="Add dates"
                  className="add-trip-input"
                ></input>
              </div>
              <div className="add-trip-input-container">
                <label className="add-trip-input-label">Departure</label>
                <input
                  type="text"
                  id="departure"
                  name="trip"
                  placeholder="Add dates"
                  className="add-trip-input"
                ></input>
              </div>
              {/* <input type="submit" value="Submit">Add trip</input> */}
            </form>
          </div>
          <div className="profile/log-out"></div>
        </div>
        <div className="my-trips-carousel"></div>
        <div className="connections-container">
          <div className="filters-container">
            <h1 className="filters-title">Filters:</h1>
            <form className="filters-form">
              <label>Age Range</label>
              <label>Destination</label>
              <label>Interests</label>
              <label>Split Costs</label>
            </form>
          </div>
          <div className="user-list-container">
            <div className="user-list">{userListRender}</div>
          </div>
          <div className="matches-container"></div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default HomePage;
