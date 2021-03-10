import React from 'react';

function Login(props) {
  return (
    <div className="intro-page-container">
      <button onClick={() => props.setView('landing-page', {})} className="back-button">Back</button>
      <div className="intro-content-container">
        <h1 className="intro-logo">TravelX</h1>
        <h2 className="welcome-text">Welcome Back!</h2>
        <div className="login-form-container">
          <form className="login-form">
            <input type="text" id="username" name="username" placeholder="Username" className="login-form-input"></input>
            <input type="text" id="password" name="password" placeholder="Password" className="login-form-input"></input>
            <input type="submit" value="Submit" onClick={() => props.setView('home-page', {})} className="intro-form-submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
