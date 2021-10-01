import React, { memo } from 'react';
import styled from '@emotion/styled';

const StatIcon = styled.svg`
  width: var(--s-1);
  height: var(--s-1);
`;

const StatCaption = styled.span`
  display: inline-flex;
  align-items: baseline;
  & > svg {
    margin-inline-end: var(--s0);
  }
`;

export const StrIcon = (level) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {level}
    </StatCaption>
  );
};
export const IntIcon = (level) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {level}
    </StatCaption>
  );
};
export const SpdIcon = (level) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {level}
    </StatCaption>
  );
};
export const DurIcon = (level) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {level}
    </StatCaption>
  );
};
export const PwrIcon = (level) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {level}
    </StatCaption>
  );
};
export const ComIcon = (level) => {
  return (
    <StatCaption>
      <StatIcon></StatIcon>
      {level}
    </StatCaption>
  );
};
