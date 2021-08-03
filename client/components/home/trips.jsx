import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 65%;
  display: flex;
  justify-content: left;
`;

const Section = styled.div`
  margin-top: 6%;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 32px;
  font-style: bold;
  margin: 0 0 0.3% 0.2%;
`;

const TripsRender = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

function Trips(props) {
  return (
    <Container>
      <Section>
        <Heading>Trips Planned:</Heading>
        {/* <CarouselProvider
              naturalSlideHeight={7}
              naturalSlideWidth={0}
              totalSlides={4}
            >
              <Slider> */}
        <TripsRender>{props.renderTrips}</TripsRender>
        {/* </Slider> */}
        {/* <div className="my-trips-carousel">{userTripsRender}</div> */}
        {/* <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider> */}
      </Section>
    </Container>
  );
}

export default Trips;
