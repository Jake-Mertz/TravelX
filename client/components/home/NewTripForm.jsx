import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

// const Container = styled.div`
//   max-width: 1500px;
//   margin: auto;
//   padding: 0;
// `;

const TopRow = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 5rem;
  width: 100%;
`;

const Logo = styled.div`
  margin: 1rem 0 0 0;
  font-size: ${rem(35)};
`;

const AddTripBar = styled.div`
  width: 45rem;
  margin: 3rem 0 0 5%;
`;

const AddTripForm = styled.form`
  background-color: white;
  /* border: 2px rgb(221, 221, 221); */
  box-shadow: 0px 4px 3px 0px rgb(221, 221, 221);
  height: 3.5rem;
  border-radius: 60px;
  width: 100%;
  display: flex;
  padding-left: 6%;
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  width: 25%;
  margin-left: 3%;
`;

const FormLabel = styled.label`
  padding-left: 2px;
`;

const FormInput = styled.input`
  border: none;
  background: none;
`;

const SubmitButton = styled.input`
  width: ${rem(106)};
  padding: 9px 0;
  margin: 3% 0 0 0;
  background-color: #00a2e8;
  border-radius: 60px;
  border-style: none;
  color: white;
`;

const NewTripForm = props => {
  const [enteredDestination, setEnteredDestination] = useState('');
  const [enteredArrival, setEnteredArrival] = useState('');
  const [enteredDeparture, setEnteredDeparture] = useState('');

  const destinationChangeHandler = event => {
    setEnteredDestination(event.target.value);
  };

  const arrivalChangeHandler = event => {
    setEnteredArrival(event.target.value);
  };

  const departureChangeHandler = event => {
    setEnteredDeparture(event.target.value);
  };

  const submitHandler = () => {
    event.preventDefault();

    const tripData = {
      destination: enteredDestination,
      arrival: new Date(enteredArrival),
      departure: new Date(enteredDeparture)
    };
    // eslint-disable-next-line
    console.log(tripData);
  };

  return (
    <TopRow>
      <Logo>TravelX</Logo>
      {/* Add trip form */}
      <AddTripBar>
        <AddTripForm onSubmit={submitHandler}>
          <FormInputContainer>
            <FormLabel>Destination</FormLabel>
            <FormInput
              type="text"
              id="destination"
              name="destination"
              placeholder="Where are you going?"
              // value={props.destination}
              onChange={destinationChangeHandler}
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel>Arrival</FormLabel>
            <FormInput
              type="date"
              id="arrival"
              name="arrival"
              placeholder="Add dates"
              // value={props.arrival}
              onChange={arrivalChangeHandler}
            ></FormInput>
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel>Departure</FormLabel>
            <FormInput
              type="date"
              id="departure"
              name="departure"
              placeholder="Add dates"
              // value={props.departure}
              onChange={departureChangeHandler}
            ></FormInput>
            {/* <button onClick={() => this.createTrip()}>Add trip</button> */}
          </FormInputContainer>
          <FormInputContainer>
            <SubmitButton
              type="submit"
              value="Add trip"
              name="Submit"
            // onClick={() => props.createTrip()}
            />
          </FormInputContainer>
        </AddTripForm>
      </AddTripBar>
    </TopRow>
  );
};

export default NewTripForm;
