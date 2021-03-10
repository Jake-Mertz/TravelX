import React from 'react';

function Login(props) {
  return (
    <div className="intro-page-container">
      <button onClick={() => props.setView('landing-page', {})} className="back-button">Back</button>
      <div className="intro-content-container">
        <h1 className="intro-logo">TravelX</h1>
        <h2 className="welcome-text">Welcome Back!</h2>
        <form className="sign-in-form">
          <input type="text" id="username" name="username" placeholder="Username" className="sign-in-form-input"></input>
          <input type="text" id="password" name="password" placeholder="Password" className="sign-in-form-input"></input>
          <input type="submit" value="Submit" onClick={() => props.setView('home-page', {})} className="intro-form-submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
