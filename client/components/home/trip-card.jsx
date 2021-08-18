import React from 'react';
import styled from 'styled-components';
// import { Slide } from 'pure-react-carousel';

const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 3px 3px 0px rgb(221, 221, 221);
  width: 200px;
  height: 10rem;
  margin: 1% 2.8rem 0 0;
`;

const Card = styled.div`
  padding: 15%;
`;

// Render each individual trip card to home page

function TripCard(props) {

  const handleDeleteClick = (event, data) => {
    // const trip = event.target.parentNode.parentNode.tripId;
    // const data = { tripId: trip };
    fetch('/api/deleteTrip:tripId', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.error(err));
  };

  return (
    // <Slide index={props.tripIndex}>
    <Container>
      <img className="trip-card-photo"></img>
      <Card>
        <div className="trip-card-destination">{props.destination}</div>
        <div className="trip-card-dates">{props.arrival} - {props.departure}</div>
        <button onClick={handleDeleteClick()}>Delete</button>
      </Card>
      {/* <button className="trip-card-edit-button"></button> */}
    </Container>
    // </Slide>
  );
}

export default TripCard;
