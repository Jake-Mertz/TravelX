import React from 'react';

function SignUpInterests(props) {
  return (
    <div className="landing-page">
      <div>
        <button className="login-button">Login</button>
      </div>
      <div className="airplane-photo-container">
        <div className="airplane-photo"></div>
      </div>
      <h1>Let&#39;s get started! What are your travelling interests?</h1>
      <form>
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
      </form>
    </div>
  );
}

export default SignUpInterests;
