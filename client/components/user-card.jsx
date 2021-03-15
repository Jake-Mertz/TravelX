import React from 'react';

function UserCard(props) {
  // function interests() {
  //   const interestsList = '';
  //   if (props.artsnculture > 0) {
  //     interestsList.concat('Arts and Culture');
  //   }
  //   if (props.food > 0) {
  //     interestsList.concat('Food');
  //   }
  //   if (props.leisure > 0) {
  //     interestsList.concat('Leisure');
  //   }
  //   if (props.nightlife > 0) {
  //     interestsList.concat('Nightlife');
  //   }
  //   if (props.shopping > 0) {
  //     interestsList.concat('Shopping');
  //   }
  //   if (props.sightseeing > 0) {
  //     interestsList.concat('Sightseeing');
  //   }
  //   return interestsList;
  // }

  return (
    <div>
      <button className="airplane-photo"></button>
      <h1>{props.name}</h1>
      {/* <p>{}</p> */}
    </div>
  );
}

export default UserCard;
