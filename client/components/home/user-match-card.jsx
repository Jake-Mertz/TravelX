import React from 'react';
// import styled from 'styled-components';

// Essentially the same as user-card2, except for user matches.
// Instead of accept or deny buttons on card, user can choose to send a message.
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
    <div className="user-match-card">
      <div className="user-match-photo-and-info-container">
        <div className="user-match-photo-container">
          <button className="home-photo"></button>
        </div>
        <div className="user-match-info-container">
          <h1 className="user-card-name">{props.name}</h1>
          <p>Interests: {userInterestMap()}</p>
        </div>
      </div>
      <div className="user-match-message-button-container">
        <button className="user-match-message-button">Send a Message</button>
      </div>
    </div>
  );
}

export default UserMatchCard;
