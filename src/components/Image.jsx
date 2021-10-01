import React, { memo } from 'react';
import styled from '@emotion/styled';

const Frame = styled.picture`
  --n: 3;
  --d: 4;
  padding-bottom: calc(var(--n) / var(--d) * 100%);
  position: relative;
  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroImage = memo((props) => {
  return (
    <Frame>
      <img src={props.pic} />
    </Frame>
  );
});

export default HeroImage;
