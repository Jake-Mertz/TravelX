import React from 'react';

function SignUpCredentials(props) {
  function signUpCredSubmit() {
    props.setView('sign-up-photo', {});
  }
  return (
    <div className="sign-up-creds-container">
      <button onClick={() => props.setView('landing-page', {})} className="back-button">Back</button>
      <div className="sign-up-creds-center">
        <h1 className="sign-up-creds-logo">TravelX</h1>
        <div className="sign-up-form-container">
          <form className="sign-up-creds-form">
            {/* <label htmlFor="username">Name</label> */}
            <input type="text" id="username" name="username" placeholder="What is your name?" className="sign-up-form-input"></input>
            {/* <label htmlFor="email">Email</label> */}
            <input type="email" id="email" name="email" placeholder="What is your email?" className="sign-up-form-input"></input>
            {/* <label htmlFor="username">Password</label> */}
            <input type="text" id="password" name="password" placeholder="Create a password" className="sign-up-form-input"></input>
            <input type="submit" value="Submit" className="sign-up-cred-submit" onClick={() => signUpCredSubmit()}></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpCredentials;
