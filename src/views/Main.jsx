import React, { memo, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

//
// ─── SUPERHERO API https://akabab.github.io/superhero-api/api/
//
const client = axios.create({
  baseURL: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/',
});
// API ENDPOINTS
const all_endpoint = 'all.json';
const id_endpoint = 'id/3.json';

const Main = () => {
  //
  // ─── STATE HOOKS ────────────────────────────────────────────────────────────────
  //
  const [heroes, setHeroes] = useState([]);
  //
  // ─── API 'GET' REQUEST ───────────────────────────────────────────────────────────────────
  //
  useEffect(() => {
    async function getHeroes() {
      const response = await client.get(id_endpoint);
      setHeroes(response.data);
    }
    getHeroes();
  }, []);


  return (
    <div>
      <h1>{heroes.name}</h1>
      <p>{heroes.id}</p>
    </div>
  );
};

export default Main;
