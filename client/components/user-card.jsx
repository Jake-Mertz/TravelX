import React from 'react';

function UserCard(props) {
  // const userjawn = function interests() {
  //   const interests = [props.artsnculture, props.food, props.leisure, props.nightlife, props.shipping, props.sightseeing];
  //   const userInterests = '';
  //   for (let i = 0; i < 5; i++) {
  //     const interest = interests[i].toString();
  //     if (interests[i] > 0) {
  //       userInterests.concat(interest);
  //     }
  //   }
  //   return userInterests;
  // };
  function oneInterest() {
    // const interests = 'hello!';
    // return interests;
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
      <div className="user-info-container">
        <h1 className="user-card-name">{props.name}</h1>
        <p>Interests: {oneInterest()}</p>
      </div>
      <div className="user-card-buttons-container">
        <button className="user-card-no"></button>
        <button className="user-card-yes"></button>
      </div>
    </div>
  );
}

export default UserCard;
