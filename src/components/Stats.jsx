import React, { memo } from 'react';
import styled from '@emotion/styled';
import {
  StrIcon,
  IntIcon,
  SpdIcon,
  DurIcon,
  PwrIcon,
  ComIcon,
} from '../icons/StatIcons';

const StatSet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  & > * {
    margin-top: 0;
    margin-bottom: 0;
    padding:0;
  }
  & > * + * {
    margin-top: var(--s-2);
  }
`;

const HeroStats = memo((props) => {
  return (
    <StatSet>
      <IntIcon />
      <StrIcon />
      <SpdIcon />
      <DurIcon />
      <PwrIcon />
      <ComIcon />
    </StatSet>
  );
});

export default HeroStats;
