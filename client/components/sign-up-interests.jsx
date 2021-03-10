import React from 'react';

function SignUpInterests(props) {
  function signUpComplete() {
    props.setView('home-page', {});
  }
  return (
    <div className="intro-page-container">
      <div className="intro-content-container">
        <h1 className="intro-logo">TravelX</h1>
        <h3 className="welcome-text">Welcome solo traveler</h3>
        <h4 className="intro-blurb">Did you know finding common interests not only makes
          <br></br>
        conversation easier, but also boosts your chances of building
          <br></br>
        genuine connections?
        </h4>
        <form className="interests-form">
          <input type="checkbox" id="shopping" name="shopping" value="shopping"></input>
          <label>Shopping</label>
          <input type="checkbox" id="nightlife" name="nightlife" value="nightlife"></input>
          <label>Nightlife</label>
          <input type="checkbox" id="hiking" name="hiking" value="hiking"></input>
          <label>Hiking</label>
          <input type="checkbox" id="arts n culture" name="arts n culture" value="arts n culture"></input>
          <label>Arts & Culture</label>
          <input type="checkbox" id="food" name="food" value="food"></input>
          <label>Food</label>
          <input type="checkbox" id="sightseeing" name="sightseeing" value="sightseeing"></input>
          <label>Sightseeing</label>
          {/* <input type="submit" value="Submit" className="join-sign-up-buttons" onClick={() => signUpComplete()}>Done!</input> */}
        </form>
        <button className="join-sign-up-buttons" onClick={() => signUpComplete()}>Done!</button>
      </div>

    </div>
  );
}

export default SignUpInterests;
