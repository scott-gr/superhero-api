import React, { memo } from 'react';
import styled from '@emotion/styled';

// Alignment Icons, Thumbs up/down, angel/devil. Should be clear
const AlignmentIcon = styled.svg`
  width: var(--s-1);
  height: var(--s-1);
`;

const AlignmentCaption = styled.span`
  display: inline-flex;
  align-items: baseline;
  & > ${AlignmentIcon} {
    margin-inline-end: var(--s0);
  }
`;

export const GoodIcon = () => {
  return (
    <AlignmentCaption>
      <AlignmentIcon></AlignmentIcon>
      GOOD
    </AlignmentCaption>
  );
};

export const EvilIcon = () => {
  return (
    <AlignmentCaption>
      <AlignmentIcon></AlignmentIcon>
      EVIL
    </AlignmentCaption>
  );
};

export const NeutralIcon = () => {
  return (
    <AlignmentCaption>
      <AlignmentIcon></AlignmentIcon>
      NEUTRAL
    </AlignmentCaption>
  );
};