import React from 'react';

function SignUpCredentials(props) {
  return (
    <div>
      <button onClick={() => props.setView('landing-page', {})}>Back</button>
      <form>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" name="username"></input>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="username">Password</label>
        <input type="text" id="password" name="password"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default SignUpCredentials;
