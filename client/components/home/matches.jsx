import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: ${rem(32)};
  font-style: bold;
  padding-top: 5%;
  width: 20%;
`;

const SubHeading = styled.h3`
  font-size: ${rem(18)};
  width: 20%;
`;

const MatchesWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
`;

const MatchesList = styled.div`
  width: 80%;
  display: flex;
`;

function Matches(props) {
  return (
    <Container>
      <Section>
        <Heading>Your Matches:</Heading>
        <SubHeading>Start a conversation</SubHeading>
        <MatchesWrap>
          <MatchesList>{props.renderMatches}</MatchesList>
        </MatchesWrap>
      </Section>
    </Container>
  );
}

export default Matches;
