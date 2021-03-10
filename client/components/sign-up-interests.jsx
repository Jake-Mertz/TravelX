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
        {/* <h4 className="intro-blurb">Did you know finding common interests not only makes
          <br></br>
        conversation easier, but also boosts your chances of building
          <br></br>
        genuine connections?
        </h4> */}
        <h4 className="interests-blurb">What are your traveling interests?</h4>
        <div className="interests-form-container-container">
          <div className="interests-form-container">
            <form className="interests-form">
              <input type="checkbox" id="shopping" name="shopping" value="shopping" className="interests-input"></input>
              <label className="interests-form-label">Shopping</label>
              <br></br>
              <input type="checkbox" id="nightlife" name="nightlife" value="nightlife" className="interests-input"></input>
              <label className="interests-form-label">Nightlife</label>
              <br></br>
              <input type="checkbox" id="hiking" name="hiking" value="hiking" className="interests-input"></input>
              <label className="interests-form-label">Hiking</label>
              <br></br>
              <input type="checkbox" id="arts n culture" name="arts n culture" value="arts n culture" className="interests-input"></input>
              <label className="interests-form-label">Arts & Culture</label>
              <br></br>
              <input type="checkbox" id="food" name="food" value="food" className="interests-input"></input>
              <label className="interests-form-label">Food</label>
              <br></br>
              <input type="checkbox" id="sightseeing" name="sightseeing" value="sightseeing" className="interests-input"></input>
              <label className="interests-form-label">Sightseeing</label>
              {/* <input type="submit" value="Submit" className="join-sign-up-buttons" onClick={() => signUpComplete()}>Done!</input> */}
            </form>
          </div>
        </div>

        <button className="join-sign-up-buttons" onClick={() => signUpComplete()}>Done!</button>
      </div>

    </div>
  );
}

export default SignUpInterests;
