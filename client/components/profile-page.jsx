import React from 'react';

function ProfilePage(props) {
  function logOut() {
    props.setView('landing-page', {});
  }
  return (
    <div>
      <h1>Here&apos;s your profile!!</h1>
      <button onClick={() => props.setView('home-page', {})}>Back</button>
      <button onClick={() => logOut()}>Log Out</button>
    </div>

  );
}

export default ProfilePage;
