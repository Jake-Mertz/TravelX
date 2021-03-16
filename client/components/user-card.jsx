import React from 'react';

function UserCard(props) {
  // function interests() {
  //   const interests = [props.artsnculture, props.food, props.leisure, props.nightlife, props.shipping, props.sightseeing];
  //   const userInterests = '';
  //   for (let i = 0; i < 5; i++) {
  //     const interest = interests[i].toString();
  //     if (interests[i] > 0) {
  //       userInterests.concat(interest);
  //     }
  //   }
  //   return userInterests;
  // }
  return (
    <div>
      {/* <button className="airplane-photo"></button> */}
      <h1>{props.name}</h1>
      <p>{props.food}</p>
    </div>
  );
}

export default UserCard;
