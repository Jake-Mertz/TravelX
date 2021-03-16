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
    <div>
      <button className="home-photo"></button>
      <h1>{props.name}</h1>
      <p>{oneInterest()}</p>
    </div>
  );
}

export default UserCard;
