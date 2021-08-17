import React from 'react';

// COMPONENT CURRENTLY NOT IN USE

// Currently not being used
function ProfilePage(props) {
  function logOut() {
    props.setView('landing-page', {});
  }
  return (
    <div>
      <h1>Here&apos;s your profile!!</h1>
      <button onClick={() => props.setView('home-page', {})} className="back-button">Home</button>
      <button onClick={() => logOut()}>Log Out</button>
    </div>

  );
}

export default ProfilePage;
