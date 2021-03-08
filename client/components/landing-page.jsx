import React from 'react';

function LandingPage(props) {
  return (
    <div className="landing-page">
      <button className="login-button" onClick={() => props.setView('login-page', {})}>Sign in</button>
      <div className="landing-hero-container">
        <h1 className="landing-page-logo">TravelX</h1>
        {/* <img src="../../server/public/images/banff-mountains.png" alt="banff mountains" /> */}
        <h3 className="landing-text">Ever had that wanderlust but didn&apos;t take that chance because a friend or
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
      </div>
      <div className="sign-up-button-container">
        <button className="join-button" onClick={() => props.setView('sign-up-creds', {})}>Join TravelX</button>
      </div>
    </div>
  );

}

export default LandingPage;
