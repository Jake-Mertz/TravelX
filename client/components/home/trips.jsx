import React from 'react';

function Trips(props) {
  return (
    <div className="my-trips-container-container">
      <div className="my-trips-container">
        <div className="my-trips-title">Trips Planned:</div>
        {/* <CarouselProvider
              naturalSlideHeight={7}
              naturalSlideWidth={0}
              totalSlides={4}
            >
              <Slider> */}
        <div className="my-trips-carousel">{props.renderTrips}</div>
        {/* </Slider> */}
        {/* <div className="my-trips-carousel">{userTripsRender}</div> */}
        {/* <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider> */}
      </div>
    </div>
  );
}

export default Trips;
