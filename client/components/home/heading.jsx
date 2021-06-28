import React from 'react';

function Heading(props) {
  return (
    <div className="home-top-row">
      <div className="travelx-logo">TravelX</div>
      {/* Add trip form */}
      <div className="add-trip-bar">
        <form className="add-trip-form" method="POST">
          <div className="add-trip-input-container">
            <label className="add-trip-input-label">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="Where are you going?"
              className="add-trip-input"
              value={props.destination}
              onChange={props.handleCreateTrip}
            ></input>
          </div>
          <div className="add-trip-input-container">
            <label className="add-trip-input-label">Arrival</label>
            <input
              type="date"
              id="arrival"
              name="arrival"
              placeholder="Add dates"
              className="add-trip-input"
              value={props.arrival}
              onChange={props.handleCreateTrip}
            ></input>
          </div>
          <div className="add-trip-input-container">
            <label className="add-trip-input-label">Departure</label>
            <input
              type="date"
              id="departure"
              name="departure"
              placeholder="Add dates"
              className="add-trip-input"
              value={props.departure}
              onChange={props.handleCreateTrip}
            ></input>
            {/* <button onClick={() => this.createTrip()}>Add trip</button> */}
          </div>
          <div className="add-trip-input-container">
            <input
              type="submit"
              value="Add trip"
              name="Submit"
              className="add-trip-button"
              onClick={() => props.createTrip()}
            />
          </div>
        </form>
      </div>

      {/* Container for: link to edit user profile, messaging, "help", and logout. */}
      {/* <button onClick={this.fillSuggestions()}>FILL SUGGESTIONS</button> */}
      {/* <div className="home-page-option-container"> */}
      {/* <button className="home-page-option-button"><i className="far fa-user-circle"></i></button> */}
      {/* <button className="home-page-option-button">Messages</button>
            <button className="home-page-option-button">Profile</button>
            <div className="home-page-option-spacer"></div>
            <button className="home-page-option-button">Help</button> */}
      <button className="home-page-option-button" onClick={() => props.logout()}>Log Out</button>
      {/* </div> */}
    </div>
  );
}

export default Heading;
