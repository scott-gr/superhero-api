import React, { memo, useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import axios from 'axios';
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

const Main = memo(() => {
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
      setHeroes(response.data);
    }
    getHeroes();
  }, []);

  const List = heroes.map((hero) => (
    <HeroCard key={hero.id} name={hero.name} fullname={hero.fullName} altergo={hero.alterEgos}  picture={hero.images.lg} />
  ));
  return <>{List}</>;
  // return <HeroCard name={heroes.name}/>;
});

export default Main;
