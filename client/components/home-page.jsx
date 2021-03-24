import React from 'react';
// import UserCard from './user-card';
import UserMatchCard from './user-match-card';
import TripCard from './trip-card';
import UserCard2 from './user-card2';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userList: [],
      userTrips: [],
      destination: [],
      arrival: [],
      departure: []
      // dummy: 0,
      // reload: false
    };
    this.getUsers = this.getUsers.bind(this);
    this.getTrips = this.getTrips.bind(this);
    this.handleCreateTrip = this.handleCreateTrip.bind(this);
    this.createTrip = this.createTrip.bind(this);
    // this.refreshPage = this.refreshPage.bind(this);
    this.createTrip2 = this.createTrip2.bind(this);
  }

  componentDidMount() {
    this.getUsers();
    this.getTrips();
  }

  // componentDidUpdate() {
  //   this.getTrips();
  // }

  getTrips() {
    fetch('/api/mapTrips2', { method: 'GET' })
      .then(res => res.json())
      .then(data => this.setState({ userTrips: data }));
  }

  getUsers() {
    fetch('/api/mapHome', { method: 'GET' })
      .then(res => res.json())
      .then(data => this.setState({ userList: data }));
  }

  handleCreateTrip(res) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(res);
  }

  // refreshPage() {
  //   this.setState(
  //     { reload: true },
  //     () => this.setState({ reload: false })
  //   );
  // }

  createTrip2() {
    this.createTrip();
    this.getTrips();
    // this.render();
    // this.setState({ state: this.state });
    // this.setState({});
    // .then(this.forceUpdate())
    // this.setState({ dummy: this.state.dummy + 1 });
    // .then(window.location.reload())
    // .then(useEffect(() => {
    //   fetchData();
    // }, [data]))
    // this.refreshPage();
  }

  createTrip(destination, arrival, departure) {
    event.preventDefault();
    const tripInfo = {
      destination: this.state.destination,
      arrival: this.state.arrival,
      departure: this.state.departure
    };
    fetch('/api/createTrip2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tripInfo)
      // cache: 'reload'
    })
      .then(res => res.json())
      // .then(this.getTrips())
      // .then(this.render())
      // .then(this.setState({ state: this.state }))
      // .then(this.setState({}))
      // .then(this.forceUpdate())
      // .then(this.setState({ dummy: this.state.dummy + 1 }))
      // .then(window.location.reload())
      // .then(useEffect(() => {
      //   fetchData();
      // }, [data]))
      // .then(this.refreshPage())
      .catch(err => console.error(err));
  }

  render() {
    // const userListRender = this.state.userList.map(user => {
    //   return (
    //     <div key={user.userId}>
    //       <UserCard
    //         name={user.name}
    //         artsandculture={user.artsandculture}
    //         food={user.food}
    //         leisure={user.leisure}
    //         nightlife={user.nightlife}
    //         shopping={user.shopping}
    //         sightseeing={user.sightseeing}
    //         hiking={user.hiking}
    //       />
    //     </div>
    //   );
    // });
    const userListRender2 = this.state.userList.map(user => {
      return (
        <div key={user.userId}>
          <UserCard2
            id={user.userId}
            name={user.name}
            artsandculture={user.artsandculture}
            food={user.food}
            leisure={user.leisure}
            nightlife={user.nightlife}
            shopping={user.shopping}
            sightseeing={user.sightseeing}
            hiking={user.hiking}
          />
        </div>
      );
    });
    const userMatchesRender = this.state.userList.map(user => {
      return (
        <div key={user.userId}>
          <UserMatchCard
            name={user.name}
            artsandculture={user.artsandculture}
            food={user.food}
            leisure={user.leisure}
            nightlife={user.nightlife}
            shopping={user.shopping}
            sightseeing={user.sightseeing}
            hiking={user.hiking}
          />
        </div>
      );
    });
    const userTripsRender = this.state.userTrips.map(user => {
      return (
        <div key={user.tripId}>
          <TripCard
            destination={user.destination}
            arrival={user.arrival}
            departure={user.departure}
          />
        </div>
      );
    });
    return (
      <div className="page-container">

        <div className="home-top-row">
          <div className="travelx-logo">TravelX</div>

          <div className="add-trip-bar">
            <form className="add-trip-form" method="POST">
              <div className="add-trip-input-container">
                <label className="add-trip-input-label">Destination</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Where are you going?"
                  className="add-trip-input"
                  value={this.state.destination}
                  onChange={this.handleCreateTrip}
                ></input>
              </div>
              <div className="add-trip-input-container">
                <label className="add-trip-input-label">Arrival</label>
                <input
                  type="date"
                  id="arrival"
                  name="arrival"
                  placeholder="Add dates"
                  className="add-trip-input"
                  value={this.state.arrival}
                  onChange={this.handleCreateTrip}
                ></input>
              </div>
              <div className="add-trip-input-container">
                <label className="add-trip-input-label">Departure</label>
                <input
                  type="date"
                  id="departure"
                  name="departure"
                  placeholder="Add dates"
                  className="add-trip-input"
                  value={this.state.departure}
                  onChange={this.handleCreateTrip}
                ></input>
                <input
                  type="submit"
                  value="Add trip"
                  name="Submit"
                  onClick={() => this.createTrip2()}
                />
                {/* <button onClick={() => this.createTrip()}>Add trip</button> */}
              </div>
            </form>
          </div>

          <div className="home-page-option-container">
            <button className="home-page-option-button"><i className="far fa-user-circle"></i></button>
            <button className="home-page-option-button">Messages</button>
            <button className="home-page-option-button">Profile</button>
            <div className="home-page-option-spacer"></div>
            <button className="home-page-option-button">Help</button>
            <button className="home-page-option-button">Log Out</button>
          </div>
        </div>

        <div className="my-trips-container-container">
          <div className="my-trips-container">
            <div className="my-trips-title">Trips Planned:</div>
            <div className="my-trips-carousel">{userTripsRender}</div>
          </div>
        </div>

        <div className="connections-container">
          <div className="filters-container">
            <h1 className="filters-title">Filters:</h1>
            <form className="filters-form">
              <label>Age Range</label>
              <label>Destination</label>
              <label>Interests</label>
              <label>Split Costs</label>
            </form>
          </div>
          <div className="user-list-container">
            <h1 className="user-list-title">Recommended just for you:</h1>
            <div className="user-list">{userListRender2}</div>
          </div>
          <div className="matches-container">
            <h1 className="matches-list-title">Your Matches:</h1>
            <div className="matches-list">{userMatchesRender}</div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default HomePage;
