import React from 'react';
// import { render } from 'react-dom';

class UserCard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: [],
      name: props.name,
      artsandculture: props.artsandculture,
      food: props.food,
      leisure: props.leisure,
      nightlife: props.nightlife,
      shopping: props.shopping,
      sightseeing: props.sightseeing,
      hiking: props.hiking
    };
  }

  render() {
    const userInterestMap = () => {
      let userInterests = [];
      const interestsData = [
        this.state.artsandculture,
        this.state.food,
        this.state.leisure,
        this.state.nightlife,
        this.state.shopping,
        this.state.sightseeing,
        this.state.hiking
      ];
      for (let i = 0; i < 6; i++) {
        if (interestsData[i] !== 'Nope') {
          userInterests += (interestsData[i] + ', ');
        }
      }
      return userInterests;
    };
    return (
      <div className="user-card">
        <div className="user-photo-and-info-container">
          <div>
            <button className="home-photo"></button>
          </div>
          <div className="user-info-container">
            <h1 className="user-card-name">{this.state.name}</h1>
            <p>Interests: {userInterestMap()}</p>
          </div>
        </div>
        <div className="user-card-buttons-container">
          <button className="user-card-no"><i className="fas fa-times"></i></button>
          <button className="user-card-yes"><i className="fas fa-check"></i></button>
        </div>
      </div>
    );
  }
}

export default UserCard2;
