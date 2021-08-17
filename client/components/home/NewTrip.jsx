import React from 'react';
import NewTripForm from './NewTripForm';

const createTrip = tripData => {
  event.preventDefault();
  const tripInfo = {
    destination: tripData.destination,
    arrival: tripData.arrival,
    departure: tripData.departure
  };
  fetch('/api/createTrip', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tripInfo)
  })
    .then(res => res.json())
    .catch(err => console.error(err));
};

const NewTrip = props => {
  const tripDataHandler = enteredTripData => {
    const tripData = {
      ...enteredTripData
      // id: Math.random().toString()
    };
    // eslint-disable-next-line
    // console.log(tripData);
    createTrip(tripData);
  };

  return (
    <div>
      <NewTripForm
        onSaveTripData={tripDataHandler}
      />
    </div>
  );
};

export default NewTrip;
