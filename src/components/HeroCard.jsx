import React, { memo } from 'react';
import styled from '@emotion/styled';
import HeroImage from './Image';
import HeroStats from './Stats';

const CardContainer = styled.article`
  padding: var(--s1);
  border: 2px solid black;
  & > * {
    color: inherit;
  }
`;

const Sidebar = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: var(--s1);

  & > :first-child {
    flex-grow: 1;
  }
  & > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: 55%;
  }
`;

const InfoBox = styled.section`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > * + * {
    margin-top: var(--s0);
  }
`;

const InfoSection = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > * + * {
    margin-top: var(--s-2);
  }
`;

const SectionHeader = styled.h5`
  color: blue;
`;

const HeroCard = (
  picture,
  name,
  int,
  str,
  spd,
  dur,
  pwr,
  com,
  gender,
  race,
  height,
  weight,
  eyes,
  hair,
  fullname,
  alteregos,
  alias,
  birthplace,
  firstappeared,
  publisher,
  alignment,
  occupation,
  base,
  groups,
  family
) => {
  return (
    <CardContainer>
      <Sidebar>
        <HeroStats />
        <HeroImage pic={picture} />
      </Sidebar>
      <InfoBox>
        <InfoSection>
          <SectionHeader>Name:</SectionHeader>
          <p>{name}</p>
        </InfoSection>
        <InfoSection>
          <SectionHeader>Appearance:</SectionHeader>
        </InfoSection>
        <InfoSection>
          <SectionHeader>Bio:</SectionHeader>
        </InfoSection>
        <InfoSection>
          <SectionHeader>History:</SectionHeader>
        </InfoSection>
      </InfoBox>
      {/*
    stack
      names
        name
        fullname
        alias
      appearance
        gender
        race
        height
        weight
        eye hair
      bio
        birth
        group
        relatives
        work
      history
        first appearance
        publisher
    /stack */}
    </CardContainer>
  );
};

export default HeroCard;
