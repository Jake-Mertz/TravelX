import React from 'react';

function Login(props) {
  return (
    <div>
      <button onClick={() => props.setView('landing-page', {})} className="back-button">Back</button>
      <div className="login-page-center">
        <h1>TravelX</h1>
        <h2 className="welcome-back">Welcome Back!</h2>
        <div>
          <form className="login-form-container">
            {/* <label htmlFor="username">Username</label> */}
            <input type="text" id="username" name="username" placeholder="Username" className="login-form-input"></input>
            {/* <label htmlFor="username">Password</label> */}
            <input type="text" id="password" name="password" placeholder="Password" className="login-form-input"></input>
            <input type="submit" value="Submit" onClick={() => props.setView('home-page', {})} className="login-form-submit"></input>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Login;
