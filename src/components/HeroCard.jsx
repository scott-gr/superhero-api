import React, { memo } from 'react';
import styled from '@emotion/styled';
import HeroImage from './Image';
import HeroStats from './Stats';

const CardContainer = styled.article`
  padding: var(--s-1);
  /* border: 2px solid black; */
  background-color: var(--appwhite);
  border-radius: 5px;
  scroll-snap-align: start;
  box-shadow: 0 2px 4px rgb(0 0 0 / 7%), 0 0 0 1px rgb(0 0 0 / 10%);

  display: flex;
  flex-wrap: wrap;
  gap: var(--s-1);
  & > * {
    flex-grow: 1;
    flex-basis: calc((349px - 100%) * 999);
  }
  & > :nth-last-child(n + 3),
  & > :nth-last-child(n + 3) ~ * {
    flex-basis: 100%;
  }
  & > * {
    color: inherit;
  }
`;

const InfoBox = styled.section`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: left;
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > * + * {
    margin-top: var(--s-1);
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
  }
`;

const InfoSection = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: left;
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > * + * {
    margin-top: var(--s-2);
  }
`;

const SectionHeader = styled.h5`
  color: var(--appdarkblue);
`;

const HeroCard = (
  props
  // name,
  // int,
  // str,
  // spd,
  // dur,
  // pwr,
  // com,
  // gender,
  // race,
  // height,
  // weight,
  // eyes,
  // hair,
  // fullname,
  // alteregos,
  // alias,
  // birthplace,
  // firstappeared,
  // publisher,
  // alignment,
  // occupation,
  // base,
  // groups,
  // family
) => {
  return (
    <CardContainer>
      <Sidebar>
        <HeroStats />
        <HeroImage pic={props.picture} />
      </Sidebar>
      <InfoBox>
        <InfoSection>
          <SectionHeader>Name:</SectionHeader>
         {props.name}{' '}
          Full Name: {props.fullname}{' '}
          Alter Ego: {props.alterego}{' '}
          Aliases: {props.alias}{' '}
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
