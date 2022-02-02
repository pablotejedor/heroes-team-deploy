import React, { useState } from 'react';
import { Search } from './Search';
import { MyTeam } from './MyTeam';
export const Home = () => {
  const [heroTeam, setHeroTeam] = useState([]);
  return (
    <>
      <MyTeam heroTeam={heroTeam} setHeroTeam={setHeroTeam} />
      <Search setHeroTeam={setHeroTeam} heroTeam={heroTeam} />
    </>
  );
};
