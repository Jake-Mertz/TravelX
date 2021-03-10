import React from 'react';

function SignUpPhoto(props) {
  function signUpPhotoSubmit() {
    props.setView('sign-up-interests', {});
  }
  return (
    <div className="intro-page-container">
      <div className="intro-content-container">
        <h1 className="intro-logo">TravelX</h1>
        <h3 className="welcome-text">Welcome solo traveler</h3>
        <h4 className="intro-blurb">Let&apos;s get started on building your profile! Please add at least
          <br></br>
        one photo of yourself. Solo traveling doesn&apos;t necessarily
          <br></br>
        mean you&apos;ll be alone throughout your entire trip! We want to
          <br></br>
        help you build real connections.
        </h4>
        <button className="airplane-photo"></button>
        <button onClick={() => signUpPhotoSubmit()} className="join-sign-up-buttons">Next</button>
      </div>
    </div>
  );
}

export default SignUpPhoto;
