import React from 'react';

function RecommendedUsers(props) {
  return (
    <div className="suggested-users-container-container">
      <div className="suggested-users-container">
        <h1 className="suggested-user-list-title">Recommended just for you:</h1>
        <div className="filters-container">
          <h1 className="filters-title">Filters:</h1>
          <form className="filters-form">
            <label className="filter-labels">Destination</label>
            <label className="filter-labels">Interests</label>
            <label className="filter-labels">Split Costs</label>
          </form>
        </div>
        <div className="suggested-user-list-container">
          <div className="suggested-user-list">{props.renderUsers}</div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default RecommendedUsers;
