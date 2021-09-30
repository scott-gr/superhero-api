import React, { memo, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const Main = memo(() => {
  //
  // ─── STATE HOOKS ────────────────────────────────────────────────────────────────
  //
  const [displayHero, setDisplayHero] = useState('[]');
  const fetchHero = async () => {
    try {
      const response = await axios(
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/30.json'
      );
      setDisplayHero(response.data);
    } catch (err) {
      console.error(err);
    }}

    useEffect(() => {
      fetchHero();
    }, []);

    return (
      <div>
        <button onClick={fetchHero}>See Hero</button>
        <p>{displayHero.name}</p>
      </div>
    );
  }
);

export default Main;
