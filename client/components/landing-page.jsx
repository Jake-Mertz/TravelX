import React from 'react';

function LandingPage(props) {
  return (
    <div className="landing-page">
      <div>
        <button className="login-button" onClick={() => props.setView('login', {})}>Login</button>
      </div>
      <div className="landing-hero-container">
        <img src="../../server/public/images/banff-mountains.png" alt="banff mountains" />
        <h1 className="landing-text">[Couple sentences]</h1>
      </div>
      <div className="sign-up-button-container">
        <button className="sign-up-button" onClick={() => props.setView('sign-up-creds', {})}>Sign Up</button>
      </div>
    </div>
  );

}

export default LandingPage;
