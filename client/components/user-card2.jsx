import React from 'react';
// import { render } from 'react-dom';

// Current version of component for rendering each individual
// suggested user card to the home page.
class UserCard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.id,
      name: props.name,
      artsandculture: props.artsandculture,
      food: props.food,
      leisure: props.leisure,
      nightlife: props.nightlife,
      shopping: props.shopping,
      sightseeing: props.sightseeing,
      hiking: props.hiking
    };
  }

  render() {
    // Get list of user interests
    const userInterestMap = () => {
      let userInterests = [];
      const interestsData = [
        this.state.artsandculture,
        this.state.food,
        this.state.leisure,
        this.state.nightlife,
        this.state.shopping,
        this.state.sightseeing,
        this.state.hiking
      ];
      for (let i = 0; i < 6; i++) {
        if (interestsData[i] !== 'Nope') {
          userInterests += (interestsData[i] + ', ');
        }
      }
      return userInterests;
    };

    // recommendNo (deny suggested user button method) has been replaced by
    // this.props.delete. Still keeping in case it becomes useful later.
    // Also, beginnings of method for accept suggested user button.
    // const recommendNo = () => {
    //   event.preventDefault();
    //   const user = {
    //     userJawn: event.target.parentNode
    //   };
    //   fetch('/api/deleteSuggestion', {
    //     method: 'DELETE',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(user)
    //   })
    //     .then(res => res.json())
    //     .catch(err => { console.error(err); });
    // };
    // const recommendYes = () => {
    //   const userMatchId = event.target;
    //   console.log(userMatchId);
    // };
    return (
      // Rendering suggested user card with user info.
      <div className="user-card" id={this.state.userId}>
        <div className="user-photo-and-info-container">
          <div>
            <button className="home-photo"></button>
          </div>
          <div className="user-info-container">
            <h1 className="user-card-name">{this.state.name}</h1>
            <p>Interests: {userInterestMap()}</p>
          </div>
        </div>
        {/* Buttons on suggested user card for user to either accept or remove suggested user from home page */}
        {/* Functionality under construction. Proper database setup required to move forward.  */}
        <div className="user-card-buttons-container">
          <button
            className="user-card-no"
            onClick={this.props.delete}>
            <i
              className="fas fa-times"
            >
            </i></button>
          <button
            className="user-card-yes"
            // onClick={recommendYes()}
          >
            <i className="fas fa-check"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default UserCard2;
