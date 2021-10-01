import React, { memo } from 'react';
import styled from '@emotion/styled';

// Add SVG icons for each stat
const StatIcon = styled.svg`
  width: var(--s-1);
  height: var(--s-1);
`;

// number or 'level' of each stat
const StatCaption = styled.span`
  display: inline-flex;
  align-items: baseline;
  color: var(--appred);
`;

export const StrIcon = (props) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {props.level}str
    </StatCaption>
  );
};
export const IntIcon = (props) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {props.level}int
    </StatCaption>
  );
};
export const SpdIcon = (props) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {props.level}spd
    </StatCaption>
  );
};
export const DurIcon = (props) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {props.level}dur
    </StatCaption>
  );
};
export const PwrIcon = (props) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {props.level}pwr
    </StatCaption>
  );
};
export const ComIcon = (props) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {props.level}com
    </StatCaption>
  );
};
