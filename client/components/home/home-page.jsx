import React from 'react';
// import UserCard from './user-card';
import UserMatchCard from './user-match-card';
import TripCard from './trip-card';
import UserCard2 from './user-card2';
// import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import Heading from './heading';
import Trips from './trips';
import Matches from './matches';
import RecommendedUsers from './recommended-users';
import NewTrip from './NewTrip';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userList: [],
      userSuggestions: [],
      userTrips: [],
      destination: [],
      arrival: [],
      departure: []
      // dummy: 0,
      // reload: false
    };
    this.getUsers = this.getUsers.bind(this);
    this.getTrips = this.getTrips.bind(this);
    // this.handleCreateTrip = this.handleCreateTrip.bind(this);
    // this.createTrip = this.createTrip.bind(this);
    // this.refreshPage = this.refreshPage.bind(this);
    // this.createTrip2 = this.createTrip2.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.fillSuggestions = this.fillSuggestions.bind(this);
    this.logout = this.logout.bind(this);
    // this.tripIndex = this.tripIndex.bind(this);
  }

  // Map suggested users and trips to home page upon page load!
  componentDidMount() {
    this.getUsers();
    this.getTrips();
    // this.fillSuggestions();
  }

  // Map trips to home page
  getTrips() {
    fetch('/api/mapTrips2', { method: 'GET' })
      .then(res => res.json())
      .then(data => this.setState({ userTrips: data }));
  }

  // Map suggested users to home page
  getUsers() {
    fetch('/api/mapHome', { method: 'GET' })
      .then(res => res.json())
      .then(data => this.setState({ userList: data }));
  }

  // Part of functionality for actually rendering suggested
  // users instead of just rendering users from primary user table [under construction]
  // Idea is to POST certain entries from primary user table into a secondary table upon page load,
  // then map secondary table to home page to be manipulated by the user.
  fillSuggestions() {
    fetch('/api/createSuggestions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json());

    fetch('/api/mapHome', { method: 'GET' })
      .then(res => res.json())
      .then(data => this.setState({ userSuggestions: data }));
  }

  // Updating state when trip form receives entries
  // handleCreateTrip(res) {
  //   this.setState({ [event.target.name]: event.target.value });
  //   console.log(res);
  // }

  // Very basic user log out function
  logout() {
    this.props.setView('landing-page', {});
  }

  // User can create a trip. Playing around with different express endpoints
  // with this, hence the api "createTrip2".
  // createTrip(destination, arrival, departure) {
  //   event.preventDefault();
  //   const tripInfo = {
  //     destination: tripData.destination,
  //     arrival: tripData.arrival,
  //     departure: tripData.departure
  //   };
  //   fetch('/api/createTrip2', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(tripInfo)
  //   })
  //     .then(res => res.json())
  //     .catch(err => console.error(err));
  // }

  // Remove suggested user from suggested users list
  handleDeleteClick(event) {
    // const users = this.state.userList.map(item => ({ ...item }));
    const thisGuy = event.target.parentNode.parentNode.id;
    // .getAttribute('id');
    const data = { userJawn: thisGuy };
    fetch('/api/deleteSuggestion', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.error(err));
    // console.log(thisGuy);
  }

  // Trying to figure out carousel index problem
  // tripIndex() {
  //   const index = Map.prototype.get();
  //   return index;
  // }

  render() {
    // Map method for rendering suggested users to home page
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
            handleDeleteClick={this.handleDeleteClick}
          />
        </div>
      );
    });
    // Map method for rendering user matches to home page. For now, this is a placeholder,
    // virtually the same as userListRender2 and pulling from the same data table.
    const userMatchesRender = this.state.userList.map(user => {
      return (
        <div key={user.userId} className="mapped-match-container">
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
    // Mapping user trips to home page
    const userTripsRender = this.state.userTrips.map(user => {
      // Trying to figure out using keys for Carousel rendering
      // const tripIndexJawn = this.tripIndex;
      // const keyObject = {};
      // userTripsRender.set(keyObject, 'value');
      // userTripsRender.get(keyObject);
      // for (const [key, value] of userTripsRender) {
      //   console.log(key + ' goes ' + value);
      // }
      return (
        // <Slider>
        <div key={user.tripId}>
          <TripCard
            destination={user.destination}
            arrival={user.arrival}
            departure={user.departure}
            tripId={user.tripId}
            // tripIndex={keyObject}
            // tripIndexLength={this.state.userTrips.length}
          />
        </div>
        // </Slider>
      );
    });

    // Extra carousel code in userTripsRender above, and directly below: could be useful later

    // <CarouselProvider
    //   naturalSlideHeight={7}
    //   naturalSlideWidth={100}
    //   totalSlides={4}
    // >
    //   <Slider>
    //     <div className="my-trips-carousel">{userTripsRender}</div>
    //   </Slider>
    //   {/* <div className="my-trips-carousel">{userTripsRender}</div> */}
    // </CarouselProvider>

    return (
      <div className="page-container">
        {/* <Heading
          destination={this.state.destination}
          arrival={this.state.arrival}
          departure={this.state.departure}
          onChange={this.handleCreateTrip}
          createTrip={this.createTrip2}
          logout={this.logout}
        /> */}
        <NewTrip />
        <Trips
          renderTrips={userTripsRender}
        />
        <Matches
          renderMatches={userMatchesRender}
        />
        <RecommendedUsers
          renderUsers={userListRender2}
        />
      </div>
    );
  }
}

export default HomePage;
