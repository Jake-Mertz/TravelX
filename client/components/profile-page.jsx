import React from 'react';

function ProfilePage(props) {
  return (
    <div>
      <h1>Here&apos;s your profile!!</h1>
      <button onClick={() => props.setView('home-page', {})}>Back</button>
    </div>

  );
}

export default ProfilePage;
