import React from 'react';
import Main from './views/Main';
import styled from '@emotion/styled';



const Grid = styled.main`
  display: grid;
  grid-gap: 1rem;
  padding: var(--s1);
  scroll-snap-type: proximity;

  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
`;

function App() {
  return (
    <>
      <header>
        <h1>SuperHero API</h1>
      </header>
      <Grid>
        <Main />
      </Grid>
    </>
  );
}

export default App;
