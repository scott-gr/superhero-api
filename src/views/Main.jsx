import React, { memo, useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import axios from 'axios';
import { render } from '@testing-library/react';
import HeroCard from '../components/HeroCard';

//
// ─── SUPERHERO API https://akabab.github.io/superhero-api/api/
//
const client = axios.create({
  baseURL: 'https://akabab.github.io/superhero-api/api/',
});
// API ENDPOINTS
const all_endpoint = 'all.json';
const id_endpoint = 'id/3.json';

const Listitem = (props) => {
  return <li>{props.value}</li>;
};

const Main = memo(()  => {
  //
  // ─── STATE HOOKS ────────────────────────────────────────────────────────────────
  //
  const [heroes, setHeroes] = useState([]);
  //
  // ─── API 'GET' REQUEST ───────────────────────────────────────────────────────────────────
  //
  useEffect(() => {
    async function getHeroes() {
      const response = await client.get(all_endpoint);
      const heroData = Object.values(response.data);
      const length = heroData.length
      setHeroes(heroData);
    }
    getHeroes();
  }, []);

  const List = heroes.map((hero) => (
// if (hero.name === "A-Bomb"){

// }

<HeroCard key={hero.id} name={hero.name} />


  ));

  return <ul>{List[0]}</ul>;
});

export default Main;
