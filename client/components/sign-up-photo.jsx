import React from 'react';

function SignUpPhoto(props) {
  function signUpPhotoSubmit() {
    props.setView('sign-up-interests', {});
  }
  return (
    <div className="landing-page">
      <div>
        <button className="login-button">Login</button>
      </div>
      <div className="sign-up-photo-text-container">
        <h1>TravelX</h1>
        <h3 className="welcome-solo-traveler">Welcome solo traveler</h3>
        <h4 className="sign-up-photo-blurb">Let&apos;s get started on building your profile! Please add at least
          <br></br>
      one photo of yourself. Solo traveling doesn&apos;t necessarily
          <br></br>
      mean you&apos;ll be alone throughout your entire trip! We want to
          <br></br>
      help you build real connections.
        </h4>
      </div>

      <div className="airplane-photo-container">
        <button className="airplane-photo"></button>
        {/* <button>Upload Photo</button> */}
      </div>
      <div className="next-button-container">
        <button onClick={() => signUpPhotoSubmit()} className="sign-up-photo-submit">Next</button>
      </div>
    </div>
  );
}

export default SignUpPhoto;
