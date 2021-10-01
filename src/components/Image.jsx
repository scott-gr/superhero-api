import React, { memo } from 'react';
import styled from '@emotion/styled';

const Frame = styled.picture`
  --n: 1;
  --d: 1;
  padding-bottom: calc(var(--n) / var(--d) * 90%);
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
    height: 100%;
    width: auto;
    object-fit: cover;
    border-radius: 5px;
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
