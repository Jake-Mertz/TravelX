import React from 'react';

function TripCard(props) {
  return (
    <div className="trip-card-container">
      <div className="trip-card-photo"></div>
      <div className="trip-info-container">
        <div className="trip-card-destination">{props.destination}</div>
        <div className="trip-card-dates">{props.arrival} - {props.departure}</div>
      </div>
      {/* <button className="trip-card-edit-button"></button> */}
    </div>
  );
}

export default TripCard;
