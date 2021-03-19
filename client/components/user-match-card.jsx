import React from 'react';

function UserMatchCard(props) {
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
      <div className="home-photo-container">
        <button className="home-photo"></button>
      </div>
      <div className="user-match-info-container">
        <h1 className="user-card-name">{props.name}</h1>
        <p>Interests: {userInterestMap()}</p>
      </div>
    </div>
  );
}

export default UserMatchCard;
