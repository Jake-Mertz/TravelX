import React from 'react';

function Login(props) {
  return (
    <div>
      <button onClick={() => props.setView('landing-page', {})}>Back</button>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username"></input>
        <label htmlFor="username">Password</label>
        <input type="text" id="password" name="password"></input>
      </form>
    </div>
  );
}

export default Login;
