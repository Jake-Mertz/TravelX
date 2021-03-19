import React from 'react';

function UserCard(props) {
  function userInterestMap() {
    let userInterests = [];
    const interestsData = [
      props.artsandculture,
      props.food,
      props.leisure,
      props.nightlife,
      props.shopping,
      props.sightseeing,
      props.hiking
    ];
    for (let i = 0; i < 6; i++) {
      if (interestsData[i] !== 'Nope') {
        userInterests += (interestsData[i] + ', ');
      }
    }
    return userInterests;
  }

  return (
    <div className="user-card">
      <div className="user-photo-and-info-container">
        <div>
          <button className="home-photo"></button>
        </div>
        <div className="user-info-container">
          <h1 className="user-card-name">{props.name}</h1>
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

export default UserCard;
