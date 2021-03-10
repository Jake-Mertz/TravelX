import React from 'react';

function SignUpCredentials(props) {
  function signUpCredSubmit() {
    props.setView('sign-up-photo', {});
  }
  return (
    <div className="intro-page-container">
      <button onClick={() => props.setView('landing-page', {})} className="back-button">Back</button>
      <div className="intro-content-container">
        <h1>TravelX</h1>
        <h3 className="welcome-text">Welcome solo traveler</h3>
        <form className="sign-up-creds-form">
          <input type="text" id="username" name="username" placeholder="What is your name?" className="sign-up-form-input"></input>
          <input type="email" id="email" name="email" placeholder="What is your email?" className="sign-up-form-input"></input>
          <input type="text" id="password" name="password" placeholder="Create a password" className="sign-up-form-input"></input>
          <input type="submit" value="Submit" className="join-sign-up-buttons" onClick={() => signUpCredSubmit()}></input>
        </form>
      </div>
    </div>
  );
}

export default SignUpCredentials;
