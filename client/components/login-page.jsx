import React from 'react';

function Login(props) {
  return (
    <div>
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
