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

// Component for rendering each individual trip card to home page
function TripCard(props) {
  return (
    // <Slide index={props.tripIndex}>
    <Container>
      <img className="trip-card-photo"></img>
      <Card>
        <div className="trip-card-destination">{props.destination}</div>
        <div className="trip-card-dates">{props.arrival} - {props.departure}</div>
      </Card>
      {/* <button className="trip-card-edit-button"></button> */}
    </Container>
    // </Slide>
  );
}

export default TripCard;
