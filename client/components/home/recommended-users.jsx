import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4%;
`;

const Heading = styled.h2`
  font-size: ${rem(32)};
  font-style: bold;
  margin-bottom: 1rem;
`;

const FiltersWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1%;
`;

const SubHeading = styled.h2`
  font-size: ${rem(18)};
  margin-right: 8rem;
`;

const SuggestionsWrap = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin-right: 3%;
`;

const Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function RecommendedUsers(props) {
  return (
    <Container>
      <Section>
        <Heading>Recommended just for you:</Heading>
        <FiltersWrap>
          <SubHeading>Filters:</SubHeading>
          <form className="filters-form">
            <label className="filter-labels">Destination</label>
            <label className="filter-labels">Interests</label>
            <label className="filter-labels">Split Costs</label>
          </form>
        </FiltersWrap>
        <SuggestionsWrap>
          <Suggestions>{props.renderUsers}</Suggestions>
        </SuggestionsWrap>
      </Section>
      {/* <div className="footer"></div> */}
    </Container>
  );
}

export default RecommendedUsers;
