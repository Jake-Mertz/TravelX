import React from 'react';

function LandingPage(props) {
  return (
    <div className="intro-page-container">
      <button className="sign-in-button" onClick={() => props.setView('login-page', {})}>Sign in</button>
      <div className="intro-content-container">
        <h1 className="intro-logo">TravelX</h1>
        <h3 className="welcome-text">Welcome solo traveler</h3>
        {/* <img src="../../server/public/images/banff-mountains.png" alt="banff mountains" /> */}
        <h3 className="intro-blurb">Ever had that wanderlust but didn&apos;t take that chance because a friend or
          <br></br>
          loved one didn&apos;t have the time or wasn&apos;t interested?
          <br></br>
          <br></br>
          At TravelX, we believe everyone should have the opportunity to travel with
          <br></br>
          confidence. Connect with like-minded solo travelers based on common
          <br></br>
          destinations & interests.
        </h3>
        <button className="join-sign-up-buttons" onClick={() => props.setView('sign-up-creds', {})}>Join TravelX</button>
      </div>
    </div>
  );
}

export default LandingPage;
