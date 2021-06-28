import React from 'react';

function Matches(props) {
  return (
    <div className="matches-container-container-container">
      <div className="matches-container-container">
        <h1 className="matches-list-title">Your Matches:</h1>
        <h2 className="matches-subhead">Start a conversation</h2>
        <div className="matches-container">
          <div className="matches-list">{props.renderMatches}</div>
        </div>
      </div>
    </div>
  );
}

export default Matches;
