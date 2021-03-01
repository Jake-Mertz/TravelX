import React from 'react';

function SignUpPhoto(props) {
  return (
    <div className="landing-page">
      <div>
        <button className="login-button">Login</button>
      </div>
      <div className="airplane-photo-container">
        <div className="airplane-photo"></div>
        <button>Upload Photo</button>
      </div>
      <div className="next-button-container">
        <button>Next</button>
      </div>
    </div>
  );
}

export default SignUpPhoto;
